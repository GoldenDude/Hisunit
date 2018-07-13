window.onload = function startTime(){
    var today = new Date();
    var currentDate  = new Date(),
        currentDay = today.getDate() < 10 ? '0' + today.getDate(): today.getDate(),
        currentMonth = today.getMonth() < 9 ? '0' + (today.getMonth() + 1): (today.getMonth() + 1);

    var weekday = new Array(7);
    weekday[0] =  "ראשון";
    weekday[1] = "שני";
    weekday[2] = "שלישי";
    weekday[3] = "רביעי";
    weekday[4] = "חמישי";
    weekday[5] = "שישי";
    weekday[6] = "שבת";

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("date").innerHTML = currentDay + '/' + currentMonth + '/' +  today.getFullYear();
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    document.getElementById("currDay").innerHTML = "יום " + weekday[today.getDay()];
    if (document.getElementById("date2"))
        document.getElementById("date2").innerHTML = "יום " + weekday[today.getDay()] + " " + currentDay + '/' + currentMonth + '/' +  today.getFullYear();
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}