window.onload = function(){
startTime();  

var modal = document.getElementById('lightBox');
var btn = document.getElementById("sub");
var span = document.getElementsByClassName("close")[0];
var disable = document.getElementsByTagName("input");


btn.onclick = function() {
    modal.style.display = "block";
    for (i=0; i < disable.length - 2; i++ ){
        disable[i].disabled = true;
    }
    
}

span.onclick = function() {
    modal.style.display = "none";
    delay(3000);
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        for (i=0; i < disable.length - 2; i++ ){
            disable[i].disabled = false;
        }
    }
}}
 
function delay(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();  
        }
        return false;
}

function startTime() {    
    var today = new Date();
    var currentDate  = new Date(),
        currentDay = today.getDate() < 10 ? '0' + today.getDate(): today.getDate(),
        currentMonth = today.getMonth() < 9 ? '0' + (today.getMonth() + 1): (today.getMonth() + 1);

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("date").innerHTML = currentDay + '/' + currentMonth + '/' +  today.getFullYear();
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}







    
// function clicked(){
//         var div = document.createElement("div");
//         var input = document.createElement("input");
//         var div2 = document.createElement("div");
//         var icon = document.createElement("i");
//         var label = document.createElement("label");
//         var mainObj = document.getElementById("add");
//         mainObj.insertBefore(square,div);
// }