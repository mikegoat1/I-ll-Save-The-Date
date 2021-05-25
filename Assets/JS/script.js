var heroTime = $("#lead"); 
// var today = moment(); 



function firstTime(){
    let now = moment().format("MMM Do, YYYY [at] hh:mm:ss a"); 
    $("#currentDay").text(now); 
}




















setInterval(firstTime, 1000); 