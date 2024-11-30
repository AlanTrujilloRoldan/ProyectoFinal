<?php

namespace myapi;

abstract class database {
    protected $conexion;
    protected $data;

    // Constructor para establecer la conexión a la base de datos
    public function __construct($db,$user,$pass) {
        $this->conexion = new \mysqli('localhost', 'root', 'cursodbAPO11?', 'umss');
        if ($this->conexion->connect_error) {
            die("Connection failed: " . $this->conexion->connect_error);
        }
    }

    // Método para obtener la respuesta como un JSON
    public function getData(){
        return $this->data;
    }

    // Método para cerrar la conexión
    public function closeConnection() {
        $this->conexion->close();
    }
}