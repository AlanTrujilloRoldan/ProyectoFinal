<?php
require_once 'vendor/autoload.php';

use myapi\Read;

// Crear una instancia de la clase Data
$dataApp = new Read('umss');
// Llamar al método add para agregar el 
$dataApp->list();
// Devolver la respuesta en formato JSON
echo $dataApp->getData();
?>