<?php
    include('db.php');

        $serial = $_POST['serial'];
        $name  = $_POST['name'];
        $currentStock  = $_POST['currentStock'];

        $query = "insert into tb_Users_210_Hisunim(serial,name,currentStock,recommendedStock) values ('$serial','$name','$currentStock',350)";
		$result = mysqli_query($connection, $query);		

?>