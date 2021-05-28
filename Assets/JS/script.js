
var heroTime = $("#lead");
//Time 9am variable 
var am9 = document.getElementById("am9");
var time9am = $(am9).data("time");
console.log(time9am);
//Time 10am variable 
var am10 = document.getElementById("am10");
var time10am = $(am10).data("time");
console.log(time10am);
//Time 11am variable
var am11 = document.getElementById("am11");
var time11am = $(am11).data("time");
console.log(time11am);
//Time 12pm variable 
var pm12 = document.getElementById("pm12");
var time12pm = $(pm12).data("time");
console.log(time12pm);
//Time 1pm variable 
var pm1 = document.getElementById("pm1");
var time1pm = $(pm1).data("time");
console.log(time1pm);
//Time 2pm varialbe 
var pm2 = document.getElementById("pm2");
var time2pm = $(pm2).data("time");
console.log(time2pm);
//Time 3pm variable 
var pm3 = document.getElementById("pm3");
var time3pm = $(pm3).data("time");
console.log(time3pm);
//Time 4pm variable 
var pm4 = document.getElementById("pm4");
var time4pm = $(pm4).data("time");
console.log(time4pm);
//Time 5pm varialbe 
var pm5 = $("#pm5");
var time5pm = $(pm5).data("time");
console.log(time5pm);

var saveBtn = document.querySelectorAll(".saveBtn");


for(i=0; i < saveBtn.length; i++){
    saveBtn[i].addEventListener("click", setText)
}

function setText(){
    let inputVal = $("textarea").val();
    console.log(this.parentNode.children[1].id)
    let key = this.parentNode.children[1].id
    // let key = this.parentNode.children[1];
    console.log(key)
    localStorage.setItem(key, inputVal)
}




function firstTime() {
    let now = moment().format("MMM Do, YYYY [at] hh:mm:ss a");
    $("#currentDay").text(now);
    return now;
}

console.log(moment().format("h a"));

console.log($(".hour").data("time"));
console.log($("#9"));
colorCordinate();



function before(currentHour, time) {
    let currentVal = currentHour.split(" ");
    currentVal = parseInt(currentVal[0]);

    let timeVal = time.split(" ");
    timeVal = parseInt(timeVal[0]);
    return currentVal < timeVal;
    
}

function notTimeZ(currentHour, time) {
    let currentVal = currentHour.split(" ");
    let timeVal = time.split(" ");
    return currentVal[1] !== timeVal[1];
}

function timeZ(currentHour, time) {
    let currentVal = currentHour.split(" ");
    let timeVal = time.split(" ");
    console.log(currentVal[1] === timeVal[1])
    return currentVal[1] === timeVal[1];

}

function colorCordinate() {
    // if the time(hour) is equal to the current hour then turn red
    let currentHour = moment().format("h a");
    //9am 

    if (currentHour === time9am) {
        $("#9").addClass("present");
    } else if ((timeZ(currentHour, time9am)) && (before(currentHour, time9am))) {
        $("#9").addClass("future");
    } else {
        
        $("#9").addClass("not");
    }
    //10am
    if (currentHour === time10am) {
        $("#10").addClass("present");
    } else if ((timeZ(currentHour, time10am)) && (before(currentHour, time10am))) {
        $("#10").addClass("future");
    } else {
        $("#10").addClass("not");
    }
    //11am
    if (currentHour === time11am) {
        $("#11").addClass("present");
    } else if ((timeZ(currentHour, time11am)) && (before(currentHour, time11am))) {
        $("#11").addClass("future");
    } else {
        $("#11").addClass("not");
    }
    //12pm
    if (currentHour === time12pm) {
        $("#12").addClass("present");
    } else if ((notTimeZ(currentHour, time12pm))) {
        $("#12").addClass("future");
    }
    else {
        $("#12").addClass("not");
    }
    //1pm
    if (currentHour === time1pm) {
        $("#1").addClass("present");
    } else if ((timeZ(currentHour, time1pm)) && (before(currentHour, time1pm)) || (notTimeZ(currentHour, time1pm))) {
        $("#1").addClass("future");
    }
    else {
        $("#1").addClass("not");
    }
    //2pm
    if (currentHour === time2pm) {
        $("#2").addClass("present");
    } else if ((timeZ(currentHour, time2pm)) && (before(currentHour, time2pm)) || notTimeZ(currentHour, time2pm)) {
        $("#2").addClass("future");
    } else {
        $("#2").addClass("not");
    }
    //3pm
    if (currentHour === time3pm) {
        $("#3").addClass("present");
    } else if ((timeZ(currentHour, time3pm)) && (before(currentHour, time3pm)) || notTimeZ(currentHour, time3pm)) {
        $("#3").addClass("future");
    } else {
        $("#3").addClass("not");
    }
    //4pm
    if (currentHour === time4pm) {
        $("#4").addClass("present");
    } else if ((timeZ(currentHour, time4pm)) && (before(currentHour, time4pm)) || notTimeZ(currentHour, time4pm)) {
        $("#4").addClass("future");
    } else {
        $("#4").addClass("not");
    }
    //5pm
    if (currentHour === time5pm) {
        $("#5").addClass("present");
    } else if ((timeZ(currentHour, time5pm)) && (before(currentHour, time5pm)) || notTimeZ(currentHour, time5pm)) {
        $("#5").addClass("future");
    } else {
        $("#5").addClass("not");
    }








    //is if the time(hour) is before the current hour turn grey
    //else if the time(hour) is after the current hour turn green 
}

console.log($("#9"));

//querySelectorAll 

//Function that saves and deletes 
//what ever is in the textarea is added to the local storage if the button is clicked 
//click event for storage
//grab val of text area














setInterval(firstTime, 1000);