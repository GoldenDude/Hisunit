$(function() {
    $("#posts").submit(function() {
        var desc = $("#desc").val();
        var ttl = $("#ttl").val();
        var dataString = 'desc=' + desc + '&ttl=' + ttl;//if desc is empty it will send empty string	

        //console.log(dataString);
        $("#loader").show();
        $("#loader").fadeIn(300).html('<span class="loading">Loading..</span>');

        $.ajax({
            type: "POST",
            url: "action.php",
            data: dataString,
            cache: true,
            success: function(html){
                $("#loader").after(html);
                $("#loader").hide();
            }  
        });
        return false;
    });
});