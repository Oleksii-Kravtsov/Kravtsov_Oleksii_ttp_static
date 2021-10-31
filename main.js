
function printTime(){
    var date = new Date(),
        hours = date.getHours() % 12
        minutes = date.getMinutes()
        seconds = date.getSeconds()
        timeString = `The current time is: ${hours}:${minutes}:${seconds}`;

    document.getElementById("time").innerHTML = timeString;
    setTimeout(printTime, 1000)
}

printTime()
