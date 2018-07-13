window.addEventListener('load', function() {

        var name = $("#name").val();
        var serial = $("#serial").val();
        var currentStock = $("#currentStock").val();
        var dataString = 'name=' + name + '&serial=' + serial + '&currentStock=' + currentStock;	

        $.ajax({
            type: "POST",
            url: "AddNewHisun.php",
            data: dataString,
            cache: true,

        });
        return false;
});