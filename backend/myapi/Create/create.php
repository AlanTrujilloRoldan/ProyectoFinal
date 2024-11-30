<?php

namespace UMSS\BACKEND\Create;

require_once __DIR__ ."../../database.php";

use UMSS\BACKEND\Database\Database;

class Create extends Database{


    public function __construct($db, $user = 'root', $pass = '12345678a'){
        parent::__construct($db, $user, $pass);
    }

    // Métodos como add, delete, edit, etc.
    public function add($peopleData){
        // SE TRANSFORMA EL POST A UN STRING EN JSON, Y LUEGO A OBJETO
        $peopleData = json_decode(json_encode($peopleData), false);

        // Verificar si ya existe un registro con la misma CURP
        $curp = $peopleData->curp;
        $sqlCheck = "SELECT COUNT(*) AS total FROM `datosformulario` WHERE `curp` = '$curp'";
        $result = $this->conexion->query($sqlCheck);

        if ($result) {
            $registros = $result->fetch_assoc();
            if ($registros['total'] > 0) {
                $this->data = [
                    'status' => 'error',
                    'message' => 'Ya existe un registro con esta CURP.'
                ];
                $this->data = json_encode($data, JSON_PRETTY_PRINT);
                return;
            }
        }

        $sql = "INSERT INTO `datosformulario` (
            `curp`, `edad`, `estado`, `problemasSalud`, `mejorServicio`, `consultasPublicas`, `consultasPrivadas`, `publicoMB`, 
            `publicoOQ`, `publicoEV`, `publicoEC`, `publicoC`, `publicoTD`, `publicoO`, 
            `privadoMB`, `privadoOQ`, `privadoEV`, `privadoEC`, `privadoC`, `privadoTD`, 
            `privadoO`, `gastoPublico`, `gastoPrivado`, `clinicasPublicas`, `clinicasPrivadas`, 
            `IMSS`, `ISSSTE`, `farmaciasSimilares`, `cruzRoja`, `hospitalesGenerales`, 
            `hospitalesPrivados`, `otrosServicios`, `satisfaccionPublica`, `satisfaccionPrivada`, 
            `accesibilidadDistancia`, `chequeosAnuales`, `consultasOnline`, `razonNoVisita`, 
            `afiliacionSalud`, `seguroGastos`, `medicamentoDificultad`, `infraestructura`, 
            `personal`, `costos`, `disponibilidadMed`, `otroMejoras`
        ) VALUES (
            '{$peopleData->curp}', {$peopleData->edad}, {$peopleData->estado}, {$peopleData->problemasSalud}, {$peopleData->mejorServicio},
            {$peopleData->consultasPublicas}, {$peopleData->consultasPrivadas},
            {$peopleData->publicoMB}, {$peopleData->publicoOQ}, {$peopleData->publicoEV}, {$peopleData->publicoEC}, {$peopleData->publicoC},
            {$peopleData->publicoTD}, {$peopleData->publicoO}, {$peopleData->privadoMB}, {$peopleData->privadoOQ}, {$peopleData->privadoEV},
            {$peopleData->privadoEC}, {$peopleData->privadoC}, {$peopleData->privadoTD}, {$peopleData->privadoO}, {$peopleData->gastoPublico},
            {$peopleData->gastoPrivado}, {$peopleData->clinicasPublicas}, {$peopleData->clinicasPrivadas}, {$peopleData->IMSS}, {$peopleData->ISSSTE},
            {$peopleData->farmaciasSimilares}, {$peopleData->cruzRoja}, {$peopleData->hospitalesGenerales}, {$peopleData->hospitalesPrivados},
            {$peopleData->otrosServicios}, {$peopleData->satisfaccionPublica}, {$peopleData->satisfaccionPrivada}, {$peopleData->accesibilidadDistancia},
            {$peopleData->chequeosAnuales}, {$peopleData->consultasOnline}, {$peopleData->razonNoVisita}, {$peopleData->afiliacionSalud},
            {$peopleData->seguroGastos}, {$peopleData->medicamentosDificultad}, {$peopleData->infraestructura}, {$peopleData->personal},
            {$peopleData->costos}, {$peopleData->disponibilidadMed}, {$peopleData->otroMejoras}
        );";

        if ($this->conexion->query($sql)) {
            $this->data = [
                'status' => 'Exito',
                'message' => 'Se pudieron agregar los datos correctamente: ' . $this->conexion->insert_id
            ];
        } else {
            $this->data = [
                'status' => 'error',
                'message' => 'No se pudieron agregar los datos: ' . mysqli_error($this->conexion)
            ];
        }

        $this->data = json_encode($this->data, JSON_PRETTY_PRINT);
    }
}
