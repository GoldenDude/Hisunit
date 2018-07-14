window.addEventListener('load', function(){

var modal = document.getElementById('lightBox');
var modalDelete = document.getElementById('lightBoxDelete');
var btn = document.getElementById("sub");
var btn2 = document.getElementById("sub2");
var btnDelete = document.getElementById("Delete");
var btnDelete2 = document.getElementById("Delete2");
var span = document.getElementsByClassName("close")[0];
var disable = document.getElementsByTagName("input");

if(btn){
    btn.onclick = function() {
        modal.style.display = "block";
        if (window.location.pathname == '/tipul.html'){
            for (i=0; i < disable.length - 2; i++ ){
                disable[i].disabled = true;
            } 
        }
    }
}

if(btn2){
    btn2.onclick = function() {
        modal.style.display = "block";
        if (window.location.pathname == '/tipul.html'){
            for (i=0; i < disable.length - 2; i++ ){
                disable[i].disabled = true;
            } 
        }
    }
}

if(btnDelete){
    btnDelete.onclick = function() {
        modalDelete.style.display = "block";
        if (window.location.pathname == '/tipul.html'){
            for (i=0; i < disable.length - 2; i++ ){
                disable[i].disabled = true;
            } 
        }
    }
}

if(btnDelete2){
    btnDelete2.onclick = function() {
        modalDelete.style.display = "block";
        if (window.location.pathname == '/tipul.html'){
            for (i=0; i < disable.length - 2; i++ ){
                disable[i].disabled = true;
            } 
        }
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

    if (event.target == modalDelete) {
        modalDelete.style.display = "none";
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
