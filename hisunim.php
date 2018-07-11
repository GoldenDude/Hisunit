<!DOCTYPE html>
<html>
    <head>
        
            <meta charset="UTF-8">
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="includes/jquery-3.3.1.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
            <link rel = "stylesheet" href = "https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity = "sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin = "anonymous">
            <link rel = "stylesheet" href = "includes/style.css">
            <script src = "includes/HisunimPhp.js"></script>
            <script src = "includes/HisunimLoader.js"></script>
            <script src = "includes/Clock.js"></script>
            <link href = "https://fonts.googleapis.com/css?family=Alef" rel = "stylesheet">
            <title>Hisunit</title>

    </head>
    
    <body>
        <header>
            <section>
                <section id = "user"></section>
                <h5>איריס היימן</h5>
                <a id = "logo" href = "#"></a>
            </section>

            <div id = "clock"></div>
            <div id = "date"></div>
            <div id = "currDay"></div>
            
            <nav class="navbar navbar-expand-lg ">
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                    </button>
                  
                    <div class="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
                      <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a id="selected" class="nav-link" href="hisunim.html"> ניהול מלאי חיסונים<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                          <a class="nav-link" href="#"> ניהול פנקס מטופל <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                          <a  class="nav-link" href="index.html">לוח זמנים יומי</a>
                        </li>
                      </ul>
                      <form class="form-inline my-lg-0">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">חיפוש</button>
                        <input class="ml-1 form-control mr-sm-2 text-right" type="search" placeholder="...חיפוש" aria-label="Search">
                      </form>
                    </div>
                  </nav>

            <ol class = "breadcrumb breadcrumb-left-arrow">
                <li id = "currentPage" class = "breadcrumb-item">ניהול מלאי חיסונים</li>
            </ol>

            <div class = "clear"></div>
        </header>

        <main>
            <div id = "hisunim" class = "container">
                <h1>ניהול מלאי חיסונים - כללית למטייל, רחובות</h1>        
                <form action = "confirm.html" name = "Order" method = "GET">
                    <table class = "table">
                        <thead>
                            <tr>
                                <th scope = "col">הערות</th>
                                <th scope = "col">נבחר</th>
                                <th scope = "col">מלאי מומלץ</th>
                                <th scope = "col">מלאי נוכחי</th>
                                <th scope = "col">שם החיסון</th>
                                <th scope = "col">מספר סידורי</th>
                            </tr>
                        </thead>

                        

                    </table>

                    <input type = "submit" value = "שלח הזמנה">

                </form>
                
            </div>        
        </main>
    </body>
</html>