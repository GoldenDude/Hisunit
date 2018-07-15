window.addEventListener("load",function(){
    
    var btn = document.getElementById("toDelete");

    btn.onclick = function(){
        if(deleteVac())
            return true;
     
        return false;
    }

})

function deleteVac(){
    var selectedVac = document.forms["Order"]["toOrder[]"];
    var datastring="";
    var counter = 0;
    for (var i in selectedVac) {    
        if (selectedVac[i].type == 'checkbox' && selectedVac[i].checked){
            datastring += "'"+ selectedVac[i].value+"',";
            ++counter;
        }
    }

    if (!counter)
        return false;

    datastring = datastring.substring(0,datastring.length-2);
    datastring = datastring.substring(1,datastring.length);
    
    var sent = 'toDelete=' + datastring;
   
    $.ajax({
        type: "POST",
        url: "deleteHisunim.php",
        data: sent,
        cache: false
    });

    location.reload(true);
    return true;
}