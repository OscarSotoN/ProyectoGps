<?php
	$pdo = new PDO("mysql:dbname=tutorias;host=localhost", "root", "");
	$statement = $pdo->prepare('DELETE FROM tutores WHERE Nombre= "rrrrrr" ');
	$statement->execute();
?>