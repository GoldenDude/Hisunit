function validateForm(){
    
        var name = document.forms["addVaccine"]["name"].value;
        var serial = document.forms["addVaccine"]["serial"].value;
        var currentStock = document.forms["addVaccine"]["currentStock"].value;
        var dataString = 'name=' + name + '&serial=' + serial + '&currentStock=' + currentStock;	
    
        $.ajax({
            type: "POST",
            url: "AddNewHisun.php",
            data: dataString,
            cache: false,
        });

    location.reload(true);
    return true;
}