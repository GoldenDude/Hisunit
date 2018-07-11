window.addEventListener('load', function(){
    var json_data = [];

    $.getJSON("data/patients.json", function (data) {
        var id = getParameterByName('selected');

        json_data = data;
        for (var row of data) {
            
            if ( id == row.id){
                
                document.getElementsByTagName("h1")[0].innerHTML = "פרטי טיפול - " + row.name;

                var details = document.getElementsByTagName("th");

                /* inserts Patient Data*/
                details[0].innerHTML = row.fatherName;
                details[1].innerHTML = row.dob;
                details[2].innerHTML = row.sex;
                details[3].innerHTML = row.age;
                details[4].innerHTML = row.id;
                details[5].innerHTML = row.name;
                details[6].innerHTML = row.cellphone;
                details[7].innerHTML = row.phone;
                details[8].innerHTML = row.house;
                details[9].innerHTML = row.street;
                details[10].innerHTML = row.city;


                details = document.getElementsByTagName("label");
                
                /* inserts Treatment Data + Recommended */
                details[0].innerHTML = row.treatment.t2;
                details[1].innerHTML = row.treatment.t1;
                details[2].innerHTML = row.recommended;
            }  
        }    
    })
})


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}