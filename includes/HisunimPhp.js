window.addEventListener('load', function() {
    
    $.ajax({
        type: "GET",
        url: "action.php",
        cache: true,
        success: function(html){
<<<<<<< HEAD
<<<<<<< HEAD
            $("thead").after(html),
            $("main").after.colors()

=======
            $("thead").after(html);
>>>>>>> 340aa0cf6bae27e01d3dc0665acdbb8da43fcb6f
=======
            $("thead").after(html);
>>>>>>> 340aa0cf6bae27e01d3dc0665acdbb8da43fcb6f
        }
    });

    return false;
<<<<<<< HEAD
<<<<<<< HEAD
});

function colors(){
        
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
} 
=======
});
>>>>>>> 340aa0cf6bae27e01d3dc0665acdbb8da43fcb6f
=======
});
>>>>>>> 340aa0cf6bae27e01d3dc0665acdbb8da43fcb6f
