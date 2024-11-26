<?php

namespace UMSS\BACKEND\Create;

require_once __DIR__ . "/../Database.php";

use UMSS\BACKEND\Database\Database;

class Create extends Database
{
    public function __construct($db, $user = 'root', $pass = '12345678a')
    {
        parent::__construct($db, $user, $pass);
    }

    // Métodos como add, delete, edit, etc.
    public function add($peopleData)
    {
        // Verificar si ya existe un registro con la misma CURP
        $curp = $peopleData->curp;
        $sqlCheck = "SELECT COUNT(*) AS total FROM `datosformulario` WHERE `curp` = '$curp'";
        $result = $this->conexion->query($sqlCheck);

        if ($result) {
            $data = $result->fetch_assoc();
            if ($data['total'] > 0) {
                $this->response = [
                    'status' => 'error',
                    'message' => 'Ya existe un registro con esta CURP.'
                ];
                return $this->response;
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
            header("Location: ./dashboard.php");
        } else {
            $this->response = [
                'status' => 'error',
                'message' => 'No se pudieron agregar los datos: ' . mysqli_error($this->conexion)
            ];
        }

        return $this->response;
    }
}
