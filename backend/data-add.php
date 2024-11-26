<?php
require_once __DIR__ . '/myapi/database.php';
require_once __DIR__ . '/../backend/myapi/Create/Create.php';

use UMSS\BACKEND\Create\Create;

// Crear una instancia de la clase Data
$dataApp = new Create('umss');
// Llamar al método add para agregar el 
$dataApp->add(json_decode(file_get_contents('php://input')));
// Devolver la respuesta en formato JSON
echo $dataApp->getData();