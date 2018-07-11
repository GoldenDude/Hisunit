window.addEventListener('load', function(){

    var elements = document.getElementsByClassName("currentStock");
<<<<<<< HEAD
<<<<<<< HEAD
    
    this.console.log(elements.length);

    for (i = 0; i < elements.length;) {
=======
=======
>>>>>>> 340aa0cf6bae27e01d3dc0665acdbb8da43fcb6f
                    
        for (i = 0; i < elements.length;) {
>>>>>>> 340aa0cf6bae27e01d3dc0665acdbb8da43fcb6f
            var check = parseInt(elements[i].getAttribute("data-color"));
            
            if (check >= 0 && check <= 100)
                elements[i].className = "red";
            
            if (check > 100 && check <= 200)
                elements[i].className = "yellow";
            
            if (check > 200 && check <= 350)
                elements[i].className = "green";
            
<<<<<<< HEAD
<<<<<<< HEAD
    }

=======
        }    
>>>>>>> 340aa0cf6bae27e01d3dc0665acdbb8da43fcb6f
=======
        }    
>>>>>>> 340aa0cf6bae27e01d3dc0665acdbb8da43fcb6f
})
