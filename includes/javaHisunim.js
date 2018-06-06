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

                    '<td id = "checkbox">' + '</td>' +
                    '<td>' + row.recommendedStock + '</td>' +
                    '<td class = "currentStock">' + row.currentStock + '</td>' +
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
                    '<td data-color = ' + row.currentStock +'>' + row.currentStock + '</td>' +
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

    startTime();    

    var colorMatch = {
        '0-100'     : 'red',
        '101-200'    : 'orange',
        '201-350'   : 'green'
     };

     function between(x, min, max) {
        return x >= min && x <= max;
      }
        
      
        
        var dc;
        var first; 
        var second;
        var th;
        
        $('p').each(function(index){
          
          th = $(this);
          
          dc = parseInt($(this).attr('data-color'),10);
          
          
            $.each(mc, function(name, value){
              
              
              first = parseInt(name.split('-')[0],10);
              second = parseInt(name.split('-')[1],10);
              
              console.log(between(dc, first, second));
              
              if( between(dc, first, second) ){
                th.addClass(value);
              }
      
          
          
            });
          
        });
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