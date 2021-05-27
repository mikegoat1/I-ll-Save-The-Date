
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




// var today = moment(); 

// separate the data string and take the first value out of the array to make it an integer


// console.log($("#pm5").data("time"))

function firstTime(){
    let now = moment().format("MMM Do, YYYY [at] hh:mm:ss a"); 
    $("#currentDay").text(now); 
    return now; 
}

console.log(moment().format("h a")); 
console.log($(".hour").data("time"));
console.log($("#9"));
greenCordinate();



function before(currentHour, time){
    let currentVal = currentHour.split(" ");
    let timeVal = time.split(" ");
    currentVal[0].parseInt() < timeVal[0].parseInt();
}

function timeZ(currentHour, time){
    let currentVal = currentHour.split(" ");
    let timeVal = time.split(" ");
    if()
    currentVal[1] === timeVal[1];
    
}

function greenCordinate (){
    // if the time(hour) is equal to the current hour then turn red
    let currentHour = moment().format("h a");
    //9am 
    if(currentHour === time9am){
        $("#9").addClass("present"); 
    } else if((timeZ(currentHour, time9am)) && (before(currentHour, time9am) )){
        // console.log(timeZ(currentHour, time9am))
        $("#9").addClass("future"); 
    } else {
        $("#9").addClass("not"); 
    }
    //10am
    if(currentHour === time10am){
        $("#10").addClass("present"); 
    } else {
        $("#10").addClass("not"); 
    }
    //11am
    if(currentHour === time11am){
        $("#11").addClass("present"); 
    } else {
        $("#11").addClass("not"); 
    }
    //12pm
    if(currentHour === time12pm){
        $("#12").addClass("present"); 
    } else {
        $("#12").addClass("not"); 
    }
    //1pm
    if(currentHour === time1pm){
        $("#1").addClass("present"); 
    } else {
        $("#1").addClass("not"); 
    }
    //2pm
    if(currentHour === time2pm){
        $("#2").addClass("present"); 
    } else {
        $("#2").addClass("not"); 
    }
    //3pm
    if(currentHour === time3pm){
        $("#3").addClass("present"); 
    } else {
        $("#3").addClass("not"); 
    }
    //4pm
    if(currentHour === time4pm){
        $("#4").addClass("present"); 
    } else {
        $("#4").addClass("not"); 
    }
    //5pm
    if(currentHour === time5pm){
        $("#5").addClass("present"); 
    } else {
        $("#5").addClass("not"); 
    }







    
    //is if the time(hour) is before the current hour turn grey
    //else if the time(hour) is after the current hour turn green 
}

//parse into an (int)

// This is an hour ago 
// moment().startOf('hour').fromNow();   


//Function that saves and deletes 
    //what ever is in the textarea is added to the local storage if the button is clicked 
    //click event for storage
    //grab val of text area














setInterval(firstTime, 1000); 