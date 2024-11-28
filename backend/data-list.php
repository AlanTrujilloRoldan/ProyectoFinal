<?php
require_once __DIR__ . '/myapi/database.php';
require_once __DIR__ . '/../backend/myapi/Read.php';

use UMSS\BACKEND\Read;

// Crear una instancia de la clase Data
$dataApp = new Read('umss');
// Llamar al método add para agregar el 
$dataApp->list();
// Devolver la respuesta en formato JSON
echo $dataApp->getData();
?>