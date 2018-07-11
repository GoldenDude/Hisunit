window.addEventListener('load', function(){

    var elements = document.getElementsByClassName("currentStock");
                    
        for (i = 0; i < elements.length;) {
            var check = parseInt(elements[i].getAttribute("data-color"));
            
            if (check >= 0 && check <= 100)
                elements[i].className = "red";
            
            if (check > 100 && check <= 200)
                elements[i].className = "yellow";
            
            if (check > 200 && check <= 350)
                elements[i].className = "green";
            
        }    
})
