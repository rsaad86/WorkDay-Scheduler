var currentDate = new Date();
document.getElementById("currentDay").innerHTML = currentDate.toDateString();

// Get Reference to different buttons

// var btns = [];
// var txtAreas = [];

// for (i=1;i<9;i++){
//   btns.push(document.querySelector("#btn"+ i.toString()));
//   txtAreas.push(document.getElementById("ta" + i.toString()));
// }

var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btn5 = document.querySelector("#btn5");
var btn6 = document.querySelector("#btn6");
var btn7 = document.querySelector("#btn7");
var btn8 = document.querySelector("#btn8");
var btn9 = document.querySelector("#btn9");

// Get Reference to different textareas
var txt1 = document.getElementById("ta1");
var txt2 = document.getElementById("ta2");
var txt3 = document.getElementById("ta3");
var txt4 = document.getElementById("ta4");
var txt5 = document.getElementById("ta5");
var txt6 = document.getElementById("ta6");
var txt7 = document.getElementById("ta7");
var txt8 = document.getElementById("ta8");
var txt9 = document.getElementById("ta9");

txt1.value = localStorage.getItem("ta1");
txt2.value = localStorage.getItem("ta2");
txt3.value = localStorage.getItem("ta3");
txt4.value = localStorage.getItem("ta4");
txt5.value = localStorage.getItem("ta5");
txt6.value = localStorage.getItem("ta6");
txt7.value = localStorage.getItem("ta7");
txt8.value = localStorage.getItem("ta8");
txt9.value = localStorage.getItem("ta9");

// Add Listener Events to buttons to make click event work
btn1.addEventListener("click", function () {
  //let txt1Contents = document.getElementById("ta1").value;
  //localStorage.setItem("ta1", txt1Contents);
  localStorage.setItem("ta1", document.getElementById("ta1").value);
});

btn2.addEventListener("click", function () {
  let txt1Contents = document.getElementById("ta2").value;
  localStorage.setItem("ta2", txt1Contents);
});

btn3.addEventListener("click", function () {
  //let txt1Contents = document.getElementById("ta1").value;
  //localStorage.setItem("ta1", txt1Contents);
  localStorage.setItem("ta3", document.getElementById("ta3").value);
});

btn4.addEventListener("click", function () {
  let txt1Contents = document.getElementById("ta4").value;
  localStorage.setItem("ta4", txt1Contents);
});

btn5.addEventListener("click", function () {
  //let txt1Contents = document.getElementById("ta1").value;
  //localStorage.setItem("ta1", txt1Contents);
  localStorage.setItem("ta5", document.getElementById("ta5").value);
});

btn6.addEventListener("click", function () {
  let txt1Contents = document.getElementById("ta6").value;
  localStorage.setItem("ta6", txt1Contents);
});

btn7.addEventListener("click", function () {
  //let txt1Contents = document.getElementById("ta1").value;
  //localStorage.setItem("ta1", txt1Contents);
  localStorage.setItem("ta7", document.getElementById("ta7").value);
});

btn8.addEventListener("click", function () {
  let txt1Contents = document.getElementById("ta8").value;
  localStorage.setItem("ta8", txt1Contents);
});

btn9.addEventListener("click", function () {
  //let txt1Contents = document.getElementById("ta1").value;
  //localStorage.setItem("ta1", txt1Contents);
  localStorage.setItem("ta9", document.getElementById("ta9").value);
});

setInterval(myTimer, 100);

function myTimer() {
  let currentDate1 = new Date();
  let currentHour1 = currentDate1.getHours();
  let currentBlockID = 0;
  // Just for testing while working at night
  // currentHour1 = 13;
  currentBlockID = getTimeBlockID(currentHour1);

  for (i = 1; i < 10; i++) {
    // console.log("xxxx");
    if (currentHour1 > 17) {
      document.getElementById(i.toString()).className = "past";
    } else if (currentHour1 < 9) {
      document.getElementById(i.toString()).className = "future";
    } else {
      // Between Working Hours 9-5
      if (i < currentBlockID) {
        document.getElementById(i.toString()).className = "past";
      } else if (i === currentBlockID) {
        document.getElementById(i.toString()).className = "present";
      } else {
        document.getElementById(i.toString()).className = "future";
      }
    }
  }
}

function getTimeBlockID(currentHourParameter) {
  let returnValue = 0;
  if (currentHourParameter >= 9 && currentHourParameter <= 17) {
    returnValue = currentHourParameter - 8;
  }
  return returnValue;
}
