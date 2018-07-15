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
            <script src = "includes/toOrderLoader.js"></script>
            <script src = "includes/Clock.js"></script>
            <link href = "https://fonts.googleapis.com/css?family=Alef" rel = "stylesheet">
            <title>Hisunit</title>

    </head>
 
    <body>
        <header>
            <section>
                <article id = "user"></article>
                <h5>איריס היימן</h5>
                <a id = "logo" href = "index.html"></a>  
            </section>

            <div id = "clock"></div>
            <div id = "date"></div>
            <div id = "currDay"></div>

            <nav class="navbar navbar-expand-lg ">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                    </button>
                    
                    <div class="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a id="selected" class="nav-link" href="hisunim.php"> ניהול מלאי חיסונים<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#"> ניהול פנקס מטופל <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a  class="nav-link" href="index.html">לוח זמנים יומי</a>
                        </li>
                        </ul>
                        <form class="form-inline my-lg-0" method = "GET">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">חיפוש</button>
                        <input class="ml-1 form-control mr-sm-2 text-right" type="search" placeholder="...חיפוש">
                        </form>
                    </div>
                    </nav>

            <ol class = "breadcrumb breadcrumb-left-arrow">
                <li id = "currentPage" class = "breadcrumb-item">אישור הזמנה</li>
                <li class = "breadcrumb-item"><a href = "hisunim.html">ניהול מלאי חיסונים</a></li>
            </ol>

            <div class = "clear"></div>
        </header>

        <main>
            <div id="confirm" class = "container">
                <img class="checkButton" src="images/check-button.svg" alt="check-button">
                <h1>!הזמנה נשלחה בהצלחה</h1>
                <h5>.ההזמנה בוצעה ונשלחה לספק החיסונים בהצלחה. ההזמנה תימסר תוך 2 ימי עבודה לכללית למטייל, רחוב ביל"ו 1, רחובות</h5>
                <h2>95784 :הזמנה מספר</h2>
                <h4 id = "date2">יום</h4>

                <table class = "table">
                        <thead>
                            <tr>
                                <th scope="col">כמות</th>
                                <th scope="col">מספר סידורי</th>
                                <th scope="col">שם פריט</th>
                            </tr>
                        </thead>
                </table>
                
                <form action="index.html" method="GET">
                    <input type="submit" id="sub" class="submit" value="המשך">
                </form>    
                    <button id="print" class="back float-right">שלח להדפסה</button>
            </div>
        </main>
    </body>
</html>