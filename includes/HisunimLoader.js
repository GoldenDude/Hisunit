window.addEventListener('load', function(){
    var json_data = [];
    var index = 0;
    var notTreatedFound = 0;

    $.getJSON("data/hisun.json", function (data) {
        console.log(data);
        json_data = data;
        for (var row of data) {
                        
            if(index % 2){
                var table_row = $(
                    '<tr class = "marked">' + 
                    '<td>' + '</td>' +
                    '<td>' + row.recommendedStock + '</td>' +
                    '<td class = "currentStock" data-color = ' + row.currentStock + '>' + row.currentStock + '</td>' +
                    '<td>' + row.name + '</td>' +
                    '<td>' + row.serial + '</td>' +
                    '</tr>'  
                
                ) 
                ++index;
            }       
            
                else{
                var table_row = $(
                    '<tr>' + 
                    '<td>' + '</td>' +
                    '<td>' + row.recommendedStock + '</td>' +
                    '<td class = "currentStock" data-color = ' + row.currentStock + '>' + row.currentStock + '</td>' +
                    '<td>' + row.name + '</td>' +
                    '<td>' + row.serial + '</td>' +
                    '</tr>' 
                )
    
                ++index;
            }
            
            $("tbody").append(table_row);
            var inputSelect = document.createElement("input");
            inputSelect.type = "checkbox";
            inputSelect.name = "toOrder[]";
            inputSelect.value = row.name;
            table_row.prepend(inputSelect);

        }
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
    )
    
})
