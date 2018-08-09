<?php
	$pdo = new PDO("mysql:dbname=tutorias;host=localhost", "root", "");
	$statement = $pdo->prepare('DELETE FROM user WHERE nombre=');
	$statement->execute();
?>