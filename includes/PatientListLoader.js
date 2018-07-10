window.addEventListener('load', function(){
    var json_data = [];
    var index = 0;
    var notTreatedFound = 0;



    $.getJSON("data/patients.json", function (data) {
        console.log(data);
        json_data = data;
        for (var row of data) {
            
            var checkTreated = row.treated.match("no");
            
            if(index % 2){
                if (checkTreated && notTreatedFound == 0){
                    var table_row = $(
                        '<tr class = "marked">' + 
                        '<td>' + "<i class = 'fas fa-times-circle'></i> " + '</td>' +
                        '<td class = "bold">' + row.treatment.t1 + ", " + row.treatment.t2 + '</td>' +
                        '<td class = "bold">' + row.age + '</td>' +
                        '<td class = "bold">' + row.name + '</td>' +
                        '<td class = "bold">' + row.hour + '</td>' +
                        '</tr>' 
                        
                    )

                    notTreatedFound = 1; 
                }
                
                else if (checkTreated){
                        var table_row = $(
                            '<tr class = "marked">' + 
                            '<td>' + "<i class = 'fas fa-times-circle'></i> " + '</td>' +
                            '<td>' + row.treatment.t1 + ", " + row.treatment.t2 + '</td>' +
                            '<td>' + row.age + '</td>' +
                            '<td>' + row.name + '</td>' +
                            '<td>' + row.hour + '</td>' +
                            '</tr>' 
                        
                        )
                    }
                    else{
                    
                        var table_row = $(
                            '<tr>' + 
                            '<td>' + "<i class = 'fas fa-check-circle'></i> " + '</td>' +
                            '<td>' + row.treatment.t1 + ", " + row.treatment.t2 + '</td>' +
                            '<td>' + row.age + '</td>' +
                            '<td>' + row.name + '</td>' +
                            '<td>' + row.hour + '</td>' +
                            '</tr>' 
                            
                        )

                    }
                }

            else{

                if (checkTreated && notTreatedFound == 0){
                    var table_row = $(
                        '<tr>' + 
                        '<td>' + "<i class = 'fas fa-times-circle'></i> " + '</td>' +
                        '<td class = "bold">' + row.treatment.t1 + ", " + row.treatment.t2 + '</td>' +
                        '<td class = "bold">' + row.age + '</td>' +
                        '<td class = "bold">' + row.name + '</td>' +
                        '<td class = "bold">' + row.hour + '</td>' +
                        '</tr>' 
                        
                    )

                    notTreatedFound = 1; 
                }

                else {
                    var table_row = $(
                    '<tr>' +
                    '<td>' + " <i class = 'fas fa-check-circle'></i> " + '</td>' +
                    '<td>' + row.treatment.t1 + ", " + row.treatment.t2 + '</td>' +
                    '<td>' + row.age + '</td>' +
                    '<td>' + row.name + '</td>' +
                    '<td>' + row.hour + '</td>' +
                    '</tr>'
                    )
                }

                ++index;
            }

            var button = $('<a href = "tipul.html"> <button target = "tipul.html" type="button" class = "pDetail"> פרטי טיפול </button></a>' );

            $("tbody").append(table_row);
            table_row.prepend(button);

        }
     })   
})