<?php
	include('db.php');		
	//get data from DB to display
    $query1  = "SELECT * FROM tb_Users_210_Hisunim order by currentStock asc";
	$result = mysqli_query($connection, $query1);
    if(!$result) { 
		die("DB query failed.");
	}

	echo '<tbody>';

	$counter = 0;

   	while($row = mysqli_fetch_assoc($result)) {//results are in an associative array. keys are cols names
	   //output data from each row
	   
	   if($counter % 2){
			echo '<tr class = "marked">';
			echo '<td></td><td><input type = "checkbox" value = "' . $row["name"] .'" name = "toOrder[]"></td>';   
			echo  '<td>' .$row["recommendedStock"]. '</td>' . '<td class = "currentStock" data-color = '. $row["currentStock"]. '>' . $row["currentStock"]. '</td>'.
	   		'<td>'. $row["name"] . '</td>'. '<td>'. $row["serial"]. '</td></tr>';
	   }

	   else {
			echo '<tr>';
			echo '<td></td><td><input type = "checkbox" value = "' . $row["name"] .'" name = "toOrder[]"></td>';   
			echo  '<td>' .$row["recommendedStock"]. '</td>' . '<td class = "currentStock" data-color = '. $row["currentStock"]. '>' . $row["currentStock"]. '</td>'.
			'<td>'. $row["name"] . '</td>'. '<td>'. $row["serial"]. '</td></tr>';
	   }
		 
		++$counter;

	}
	
	echo '</tbody>';

	//release returned data
	mysqli_free_result($result);	

	//close DB connection
	mysqli_close($connection);
?>