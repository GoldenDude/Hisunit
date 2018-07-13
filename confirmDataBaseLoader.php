<?php

	include('db.php');	
	$toOrder = $_POST["toOrder"];
	$length = $_POST["length"];
	$selectedString = "";
	if ($length)
		$selectedString .= "'".$toOrder[0] . "'";
	
	$count = 1;
	
	while ($count < $length) {
		$selectedString .= "," . "'" . $toOrder[$count] . "'";
		++$count;
	}

	$counter = 0;
	$totalSum = 0;
	
	echo '<tbody>';
	$query  = "SELECT * FROM tb_Users_210_Hisunim WHERE name IN (" . $selectedString. ")";
	$result = mysqli_query($connection, $query);
	if(!$result) { 
		die("DB query failed.");
	}

	while($row = mysqli_fetch_assoc($result)) {
		
		$sum = $row["recommendedStock"] - $row["currentStock"];

		/* checks if stock is already full */
		if (!$sum){
			++$counter;
			continue;
		}

		$totalSum = $totalSum + $sum;
		
		if($counter % 2){
			echo '<tr class = "marked"><td scrope = "row">' .$sum . '</td>' . '<td>' . $row["serial"]. '</td>'.
				'<td>'. $row["name"]. '</tr>';
		}

		else {
			echo '<tr><td scrope = "row">' .$sum . '</td>' . '<td scrope = "row">' . $row["serial"]. '</td>'.
			'<td scrope = "row">'. $row["name"]. '</tr>';
		}


		
		++$counter;
		
	}
	
	$query2 = "UPDATE tb_Users_210_Hisunim SET currentStock = recommendedStock WHERE name IN (" . $selectedString . ")";
	mysqli_query($connection, $query2);

	echo '</tbody>'.'<h2>'.$totalSum.'</h2>';
	echo '<h3>.סך הכל:' . $totalSum . 'מנות</h3>';


	// release returned data
	mysqli_free_result($result);	

	//close DB connection
	mysqli_close($connection);
?>