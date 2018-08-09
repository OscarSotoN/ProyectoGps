<?php


	$pdo = new PDO("mysql:dbname=tutorias;host=localhost", "root", "");
	$statement = $pdo->prepare("SELECT * FROM tutores" );
	$statement->execute();
	$results = $statement->fetchAll(PDO::FETCH_ASSOC);
	$json = json_encode($results);
	echo $json;
	
	
?>