window.addEventListener('load', function(){
    var json_data = [];
    var index = 0;
    var notTreatedFound = 0;

    $.getJSON("data/patients.json", function (data) {
        json_data = data;
        for (var row of data) {
            
            var checkTreated = row.treated.match("no");
            
            if(index % 2){
                if (checkTreated && notTreatedFound == 0){
                    var table_row = $(
                        '<tr class = "marked">' + 
                        '<td>' + "<i class = 'fas fa-times-circle'></i> " + '</td>' +
                        '<td class = "bold">' + row.treatment.t1 + ", " + row.treatment.t2 + '</td>' +
                        '<td class = "toHide bold">' + row.age + '</td>' +
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
                            '<td class = "toHide">' + row.age + '</td>' +
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
                            '<td class = "toHide">' + row.age + '</td>' +
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
                        '<td class = "toHide bold">' + row.age + '</td>' +
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
                    '<td class = "toHide">' + row.age + '</td>' +
                    '<td>' + row.name + '</td>' +
                    '<td>' + row.hour + '</td>' +
                    '</tr>'
                    )
                }

                ++index;
            }

            var button = $('<button type = "submit" name = "selected" class = "pDetail" value = "' + row.id + '" > פרטי טיפול </button>');

            $("tbody").append(table_row);
            table_row.prepend(button);

        }    
    })
})