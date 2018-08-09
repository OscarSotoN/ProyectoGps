<?php 
$nombreT = $_POST["nombreT"];
$apellidoT = $_POST["apellidoT"];
$disponibilidad = $_POST["disponibilidad"];
$ubicacion = $_POST["ubicacion"];
$telefono = $_POST["telefono"];
$metodo = $_POST["metodo"];
$especialidad = $_POST["especialidad"];
$disponibilidad_d = $_POST["disponibilidad_d"];
//$foto = $_POST["foto"];

$upload_image=$_FILES["foto"]["name"];
$folder="/xampp/htdocs/images/".$_FILES["foto"]["name"];
move_uploaded_file($_FILES["foto"]["tmp_name"],$folder);


    $pdo = new PDO("mysql:dbname=tutorias;host=localhost", "root", "");
    $pdo->query("INSERT INTO tutores VALUES ('$nombreT','$apellidoT','$disponibilidad','$ubicacion','$telefono','$metodo','$especialidad','$folder','$disponibilidad_d')");
	$statement = $pdo->prepare("SELECT foto_perfil FROM tutores");
	$statement->execute();
	$results = $statement->fetch(PDO::FETCH_ASSOC);	
?>




