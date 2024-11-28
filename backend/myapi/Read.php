<?php

namespace UMSS\BACKEND;

require_once  "database.php";

use UMSS\BACKEND\Database\Database;

class Read extends Database{

    private $data;

    public function __construct($db, $user = 'root', $pass = 'cursodbAPO11?'){
        parent::__construct($db, $user, $pass);
        $this->data = array();
    }

    public function list(){
        // SE CREA EL ARREGLO QUE SE VA A DEVOLVER EN FORMA DE JSON
        $data = array();

        // SE REALIZA LA QUERY DE BÚSQUEDA Y AL MISMO TIEMPO SE VALIDA SI HUBO RESULTADOS
        if ( $result = $this->conexion->query("SELECT * FROM datosFormulario") ) {
            // SE OBTIENEN LOS RESULTADOS
            $rows = $result->fetch_all(MYSQLI_ASSOC);

            if(!is_null($rows)) {
                // SE CODIFICAN A UTF-8 LOS DATOS Y SE MAPEAN AL ARREGLO DE RESPUESTA
                foreach($rows as $num => $row) {
                    foreach($row as $key => $value) {
                        $data[$num][$key] = $value;
                    }
                }
            }
            $result->free();
            $data['status'] =  "Success";
            $data['message'] =  "Datos recuperados con éxito";
        } else {
            $data['status'] =  "Error";
            $data['message'] =  "Error al recuperar los datos";
            die('Query Error: '.mysqli_error($this->conexion));
        }
        $this->conexion->close();
        
        // SE HACE LA CONVERSIÓN DE ARRAY A JSON
        $this->data = json_encode($data, JSON_PRETTY_PRINT);
    }

    public function getData(){
        return $this->data;
    }
}
