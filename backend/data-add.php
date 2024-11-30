<?php
require_once 'vendor/autoload.php';

use myapi\Create;

// Crear una instancia de la clase Data
$dataApp = new Create('umss');
// Llamar al método add para agregar el 
$dataApp->add(json_decode(file_get_contents('php://input')));
// Devolver la respuesta en formato JSON
echo $dataApp->getData();