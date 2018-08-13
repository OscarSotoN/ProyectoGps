<?php
    $has_image = $_POST["has_image"];
    $nombreT = $_POST["nombreT"];
    $apellidoT = $_POST["apellidoT"];
    $disponibilidad = $_POST["disponibilidad"];
    $ubicacion = $_POST["ubicacion"];
    $telefono = $_POST["telefono"];
    $metodo = $_POST["metodo"];
    $especialidad = $_POST["especialidad"];
    $disponibilidad_d = $_POST["disponibilidad_d"];


    if($has_image=="true"){
    echo "true";
    $upload_image=$_FILES["foto"]["name"];
    $folder="/xampp/htdocs/images/".$_FILES["foto"]["name"];
    move_uploaded_file($_FILES["foto"]["tmp_name"],$folder);

	$pdo = new PDO("mysql:dbname=tutorias;host=localhost", "root", "");
	$statement = $pdo->prepare(
		"UPDATE tutores SET Nombre='$nombreT', Apellido='$apellidoT', Disponibilidad='$disponibilidad', Ubicacion='$ubicacion', Telefono='$telefono', Metodo= '$metodo', Materia='$especialidad',foto_perfil='$folder', Disponibilidad_d='$disponibilidad_d' WHERE Nombre='aaaaaaaaaaa'"
	);
    $statement->execute();

    }
    else { 
        echo "false";
        $pdo = new PDO("mysql:dbname=tutorias;host=localhost", "root", "");
        $statement = $pdo->prepare(
        "UPDATE tutores SET Nombre='$nombreT', Apellido='$apellidoT', Disponibilidad='$disponibilidad', Ubicacion='$ubicacion', Telefono='$telefono', Metodo= '$metodo', Materia='$especialidad',Disponibilidad_d='$disponibilidad_d' WHERE Nombre='aaaaaaaaaaa'"
        );
    $statement->execute();
    }
?>