<?php

namespace UMSS\BACKEND\Database;

abstract class database {
    protected $conexion;
    protected $response = [];

    // Constructor para establecer la conexión a la base de datos
    public function __construct($db,$user,$pass) {
        $this->conexion = new \mysqli('localhost', 'root', '12345678a', 'umss');
        if ($this->conexion->connect_error) {
            die("Connection failed: " . $this->conexion->connect_error);
        }
    }

    // Método para obtener la respuesta como un JSON
    public function getData() {
        return json_encode($this->response, JSON_PRETTY_PRINT);
    }

    // Método para cerrar la conexión
    public function closeConnection() {
        $this->conexion->close();
    }
}