window.addEventListener('load', function() {
    
    $.ajax({
        type: "GET",
        url: "HisunimDataBaseLoader.php",
        cache: false,
        success: function(html){
            $("thead").after(html);
        },
        complete: function(){
            setColors();
        }
    });

    return false;

});


function setColors() {

    var elements = document.getElementsByClassName("currentStock");    
    
    while (elements.length) {
        
        var check = parseInt(elements[0].getAttribute("data-color"));
        
        if (check >= 0 && check <= 100)
            elements[0].className = "red";
        
        if (check > 100 && check <= 200)
            elements[0].className = "yellow";
        
        if (check > 200)
            elements[0].className = "green";
    }

    return true;    

}

function ValidationEvent(form){

    var tmp = false;
    for (var i in form.elements) {
      var el = form.elements[i];
  
      if (el.type == 'checkbox' && el.checked){
        var check = parseInt(form.elements[i].getAttribute("stock"));
        if (check)
            tmp = true;
      }
    }

    return tmp;
}

