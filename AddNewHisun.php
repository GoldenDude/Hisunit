<?php
    include('db.php');
    
    //get data from DB to display
    $query1  = "SELECT * FROM tb_Users_210_Hisunim order by currentStock asc";
    $result = mysqli_query($connection, $query1);
    if(!$result) { 
        die("DB query failed.");
    }

	if(isset($_POST['currentStock']))
	{	
        $serial = $_POST['serial'];
        $name  = $_POST['name'];
        $currentStock  = $_POST['currentStock'];

		//SET: insert new data to DB
		$query2 = "insert into tb_Users_210_Hisunim(serial,name,currentStock,recommendedStock) values ('$serial','$name','$currentStock',350)";
		$result = mysqli_query($connection, $query2);		
	}

?>