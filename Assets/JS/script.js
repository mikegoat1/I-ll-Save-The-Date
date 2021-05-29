
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

// looking through the save button for clicks
for (i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", setText)

}
// Sets the value when save is pressed
function setText() {
    let inputVal = this.parentNode.children[1].value
    console.log(inputVal)
    let key = this.parentNode.children[1].id
    // let key = this.parentNode.children[1];
    console.log(key)
    

    localStorage.setItem(key, inputVal)
}

// grabbing stored data and assigning them to the proper place
function getText() {
    var stored9am = localStorage.getItem("9");
    console.log(stored9am);
    if(stored9am){
        document.getElementById("9").value = stored9am;
    }
    
    let stored10am = localStorage.getItem("10");
    if(stored10am){
        document.getElementById("10").value = stored10am;
    }

    let stored11am = localStorage.getItem("11");
    if(stored11am){
        document.getElementById("11").value = stored11am;
    }

    let stored12pm = localStorage.getItem("12");
    if(stored12pm){
        document.getElementById("12").value = stored12pm;
    }

    let stored1pm = localStorage.getItem("1");
    if(stored1pm){
        document.getElementById("1").value = stored1pm;
    }

    let stored2pm = localStorage.getItem("2");
    if(stored2pm){
        document.getElementById("2").value = stored2pm; 
    }

    let stored3pm = localStorage.getItem("3"); 
    if(stored3pm){
        document.getElementById("3").value = stored3pm;
    }

    let stored4pm = localStorage.getItem("4"); 
    if(stored4pm){
        document.getElementById("4").value = stored4pm;
    }

    let stored5pm = localStorage.getItem("5");
    if(stored5pm){
        document.getElementById("5").value = stored5pm;
    }
}



// Date going in header
function firstTime() {
    let now = moment().format("MMM Do, YYYY [at] hh:mm:ss a");
    $("#currentDay").text(now);
    return now;
}

console.log(moment().format("h a"));

console.log($(".hour").data("time"));
console.log($("#9"));
colorCordinate();


// comparing the time
function before(currentHour, time) {
    let currentVal = currentHour.split(" ");
    currentVal = parseInt(currentVal[0]);

    let timeVal = time.split(" ");
    timeVal = parseInt(timeVal[0]);
    return currentVal < timeVal;

}
// comparing am pm
function notTimeZ(currentHour, time) {
    let currentVal = currentHour.split(" ");
    let timeVal = time.split(" ");
    return currentVal[1] !== timeVal[1];
}
// seeing if am pm is not equal 
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
getText();

setInterval(firstTime, 1000);