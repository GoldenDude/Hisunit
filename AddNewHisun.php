<?php
    include('db.php');

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