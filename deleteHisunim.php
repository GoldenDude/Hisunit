<?php
    include('db.php');

        $toDelete = $_POST['toDelete'];

        //SET: insert new data to DB
        // $query = "insert into tb_Users_210_Hisunim(serial,name,currentStock,recommendedStock) values ('$toDelete','test',330,350)";

        $query  = "DELETE FROM tb_Users_210_Hisunim WHERE name IN ('$toDelete')";
		$result = mysqli_query($connection, $query);		

?>