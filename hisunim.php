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
        <script src = "includes/HisunimLoader.js"></script>
        <script src = "includes/Clock.js"></script>
        <script src = "includes/Lightbox.js"></script>
        <script src = "includes/AddHisun.js"></script>
        <script src = "includes/deleteHisun.js"></script>
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
                            <a id="selected" class="nav-link" href="#"> ניהול מלאי חיסונים<span class="sr-only">(current)</span></a>
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
                <li id = "currentPage" class = "breadcrumb-item">ניהול מלאי חיסונים</li>
            </ol>

            <div class = "clear"></div>
        </header>

        <main>
		    <div id = "hisunim" class = "container">
                <h1>ניהול מלאי חיסונים - כללית למטייל, רחובות</h1>        
                <form action = "confirm.php" name = "Order" method = "GET" onsubmit = "return ValidationEvent(this);">
                    <table class = "table">
                        <thead id = "test">
                            <tr>
                                <th class = "toHide" scope = "col">הערות</th>
                                <th scope = "col">נבחר</th>
                                <th scope = "col">מלאי מומלץ</th>
                                <th scope = "col">מלאי נוכחי</th>
                                <th scope = "col">שם החיסון</th>
                                <th scope = "col">מספר סידורי</th>
                                <th scope = "col"></th>
                            </tr>
                        </thead>
                    </table>
                    
                    <input class="send" type = "submit" value = "שלח הזמנה">
                    <button class="sendArrow" type = "submit"><i class="fas fa-arrow-left"></i></button>
                </form>           

                <form action ="hisunim.php" method = "POST">
                    <div id="lightBoxDelete" class="lightBox">   
                        <div class="lightBox-content">
                            <div class="lightBox-header alertLightBox">
                            <span class="close">&times;</span>
                            <h2 class="text-right">הודעת מערכת</h2>
                            </div>
                                <div class="lightBox-body">
                                    <p class="text-center">אישור מחיקה</p>
                                    <p class="text-center">?את עומדת לבצע מחיקה! היזהרי! האם את בטוחה</p>
                                </div>
                                <div class="lightBox-footer alertLightBox">
                                    <button  class="continue" id = "toDelete">מחיקה</button>
                                    <a href="hisunim.php" class="backMenu">ביטול</a>
                                </div>
                        </div>
                    </div>
                </form>

                <input type = "button" onsubmit="return delay(0)" id="Delete" class="float-right" value="מחיקת חיסונים">
                <button onsubmit="return delay(0)" id="Delete2" class="float-right"><i class = "fas fa-trash"></i></button>
                <input type = "button" onsubmit="return delay(0)" id="sub" class="float-right" value="הוספת חיסון חדש"> 
                <button class = "sendArrow" id="sub2" onsubmit ="return delay(0)"><i class="fas fa-plus"></i></button>
                <div id="lightBox" class="lightBox">   
                    <div class="lightBox-content">
                        <div class="lightBox-header">
                            <span class="close">&times;</span>
                            <h2 class="text-right">הודעת מערכת</h2>
                        </div>
                        <p class="text-center">:הזנת חיסון חדש למערכת</p>
                        <form class="lightBox-body" name="addVaccine" action="#" method="POST" onsubmit="return validateForm()">
                            <div class="input-group mb-3">
                                <input type="text" required class="inputSize mt-3 col-4  text-right form-control" placeholder="הכנס שם" name="name">
                                <label class="mt-4 text-right">:שם החיסון</label>
                            </div>

                            <div class="input-group mb-3">
                                <input  type="text" required class="inputSize mt-3 col-4  text-right form-control" placeholder="הכנס מספר סידורי" name="serial">
                                <label class="mt-4 text-right">:מספר סידורי</label>
                            </div>

                            <div class="input-group mb-3">
                                <input type="text" class="inputSize mt-3 col-4  text-right form-control" placeholder="הכנס כמות" name="currentStock">
                                <label class="mt-4 text-right">:מלאי</label>
                            </div>

                            <p class="text-center"></p>
                    
                            <div class="lightBox-footer">
                                <input class="continue" type = "submit" value="הוספה">
                                <a href="hisunim.php" class="backMenu">ביטול</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>    
        </main>
    </body>
</html>