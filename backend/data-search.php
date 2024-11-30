<?php

    require_once 'vendor/autoload.php';

    use myapi\Read;

    // Crear una instancia de la clase Data
    $dataApp = new Read('umss');
    // Llamar al método add para agregar el 

    if(isset($_GET['estado'])) {
        $dataApp->listarEstado($_GET['estado']);
    }

    echo $dataApp->getData();
?>