window.onload = function(){
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
                    '<td class = "currentStock" data-color = "' + row.currentStock +'">' + row.currentStock + '</td>' +
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
                    '<td class = "currentStock" data-color = "' + row.currentStock +'">' + row.currentStock + '</td>' +
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
    }
    )
    
        fixColors();
        startTime();    
}

function fixColors(){
    
    var elements = document.getElementsByClassName("currentStock");
    console.log(elements.length);
        
    for (i = 0; i < elements.length; i++) {
        

        if (elements[i].getAttribute("data-color") >= 0 && elements[i].getAttribute(data-color) <= 100)
            console.log("hey");
            
        if (elements[i].getAttribute("data-color") >= 100 && elements[i].getAttribute(data-color) <= 200)
            console.log("hey");

        if (elements[i].getAttribute("data-color") >= 200 && elements[i].getAttribute(data-color) <= 350)
            console.log("hey");
    
        }

        
    
}



function startTime() {    
    var today = new Date();
    var currentDate  = new Date(),
    currentDay = today.getDate() < 10 ? '0' + today.getDate(): today.getDate(),
        currentMonth = today.getMonth() < 9 ? '0' + (today.getMonth() + 1): (today.getMonth() + 1);

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("date").innerHTML = currentDay + '/' + currentMonth + '/' +  today.getFullYear();
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
    
// $(document).ready(function () {
//     var option = $(
//     '<option>' + row.country + '</option>'
//     )
//     $('#country').append(option)
//     $('tbody').append(table_row)
//     }
//     });

//     $('#country').on('change', function (e) {
//     var value = e.target.value;
//     var match = '';
//     console.log(value);
    
//     if (value == "All"){
//         for (var row of data) {
//             var table_row = $(
//             '<tr>' +
//             '<td>' + row.id + '</td>' +
//             '<td>' + row.date + '</td>' +
//             '<td>' + row.country + '</td>' +
//             '<td>' + row.city + '</td>' +
//             '<td>' + row.temp_c + '</td>' +
//             '<td>' + row.temp_f + '</td>' +
//             '</tr>'
//             )
//             $('tbody').append(table_row);
//         }
//         return;
//     }   


//     for (var row of json_data) {
//     if (row.country == value)
//     match +=
//     '<tr>' +
//     '<td scope="row">' + row.id + '</td>' +
//     '<td>' + row.date + '</td>' +
//     '<td>' + row.country + '</td>' +
//     '<td>' + row.city + '</td>' +
//     '<td>' + row.temp_c + '</td>' +
//     '<td>' + row.temp_f + '</td>' +
//     '</tr>'
//     }
//     $('tbody').html(match)
//     })
//    });