window.addEventListener('load', function() {
    
    $.ajax({
        type: "GET",
        url: "action.php",
        cache: true,
        success: function(html){
            $("thead").after(html);
        }
    });

    return false;
});