window.addEventListener('load', function(){

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
}})
 
function delay(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();  
        }
        return false;
}
