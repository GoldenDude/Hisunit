<?php
    include('db.php');

        $toDelete = $_POST['toDelete'];
        $query  = "DELETE FROM tb_Users_210_Hisunim WHERE name IN ('$toDelete')";
		$result = mysqli_query($connection, $query);		

?>