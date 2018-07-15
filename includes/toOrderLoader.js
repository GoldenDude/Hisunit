window.addEventListener('load', function() {

    var urlParams = new URLSearchParams(window.location.search);
    var datastring = urlParams.getAll('toOrder[]');
    
    $.ajax({
        type: "POST",
        url: "confirmDataBaseLoader.php",
        data: {toOrder: datastring, length: datastring.length},
        cache: false,
        success: function(html){
            $("thead").after(html);
        },
    });

    return false;

});


