<?php
	include('db.php');		

    $query1  = "SELECT * FROM tb_Users_210_Hisunim order by currentStock asc";
	$result = mysqli_query($connection, $query1);
    if(!$result) { 
		die("DB query failed.");
	}

	echo '<tbody>';

	$counter = 0;

   	while($row = mysqli_fetch_assoc($result)) {
	   
	   $stockDiff = $row['recommendedStock'] - $row['currentStock'];

	   if($counter % 2){
		echo "<tr class = 'marked'><td class = 'toHide'></td><td><input type = 'checkbox' name = 'toOrder[]' value = '{$row['name']}' stock = '$stockDiff'></td>   
		<td> {$row['recommendedStock']}</td><td class = 'currentStock' data-color = '{$row['currentStock']}'>{$row['currentStock']}</td>
		<td>{$row['name']}</td><td>{$row['serial']}</td></tr>";
	   }

	   else {
		echo "<tr><td class = 'toHide'></td><td><input type = 'checkbox' name = 'toOrder[]' value = '{$row['name']}' stock = '$stockDiff'></td>   
		<td> {$row['recommendedStock']}</td><td class = 'currentStock' data-color = '{$row['currentStock']}'>{$row['currentStock']}</td>
		<td>{$row['name']}</td><td>{$row['serial']}</td></tr>";
	   }
		 
		++$counter;

	}

	echo '</tbody>';

	//release returned data
	mysqli_free_result($result);	

	//close DB connection
	mysqli_close($connection);
?>