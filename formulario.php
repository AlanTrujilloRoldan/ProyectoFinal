<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>UMSS</title>
    <!-- BOOTSTRAP 4 -->
    <link rel="stylesheet" href="https://bootswatch.com/4/lumen/bootstrap.min.css">
</head>

<body>
    <!-- BARRA DE NAVEGACIÓN -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href=".">UMSS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" role="group" aria-label="NavBar">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="btn btn-secondary mr-2" href="./formulario.php" id="formulario">Formulario</a>
                </li>
                <li class="nav-item active">
                    <a class="btn btn-secondary" href="./dashboard.php" id="dashboard">Dashboard</a>
                </li>
            </ul>
        </div>
    </nav>

    <div class="container">
        <div class="row p-4 justify-content-center">
            <!-- FORMULARIO PARA Datos Personales -->
            <div class="col-12">
                <form id="data-form">
                    <input type="hidden" id="personaId">
                    <div class="card">
                        <div class="card-header">
                            <h2 class="card-title">Datos Personales</h2>
                        </div>
                        <div class="card-body">


                            <div class="form-group">
                                <label for="curp" class="col-sm-2 col-form-label">CURP</label>
                                <input class="form-control" type="text" id="curp" placeholder="CURP" maxlength="18" minlength="18">
                                <p id="curp-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>
                            <div class="form-group">
                                <label for="edad" class="col-sm-2 col-form-label">Edad</label>
                                <input class="form-control" type="number" id="edad" placeholder="Edad" min="0" max="99">
                                <p id="edad-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>
                            <div class="form-group">
                                <label for="estado">Selecciona un estado</label>
                                <select class="form-control" id="estado">
                                    <option value="" disabled selected>--Selecciona--</option>
                                    <option value="Aguascalientes">Aguascalientes</option>
                                    <option value="Baja California">Baja California</option>
                                    <option value="Baja California Sur">Baja California Sur</option>
                                    <option value="Campeche">Campeche</option>
                                    <option value="Chiapas">Chiapas</option>
                                    <option value="Chihuahua">Chihuahua</option>
                                    <option value="Ciudad de México">Ciudad de México</option>
                                    <option value="Coahuila">Coahuila</option>
                                    <option value="Colima">Colima</option>
                                    <option value="Durango">Durango</option>
                                    <option value="Estado de México">Estado de México</option>
                                    <option value="Guanajuato">Guanajuato</option>
                                    <option value="Guerrero">Guerrero</option>
                                    <option value="Hidalgo">Hidalgo</option>
                                    <option value="Jalisco">Jalisco</option>
                                    <option value="Michoacán">Michoacán</option>
                                    <option value="Morelos">Morelos</option>
                                    <option value="Nayarit">Nayarit</option>
                                    <option value="Nuevo León">Nuevo León</option>
                                    <option value="Oaxaca">Oaxaca</option>
                                    <option value="Puebla">Puebla</option>
                                    <option value="Querétaro">Querétaro</option>
                                    <option value="Quintana Roo">Quintana Roo</option>
                                    <option value="San Luis Potosí">San Luis Potosí</option>
                                    <option value="Sinaloa">Sinaloa</option>
                                    <option value="Sonora">Sonora</option>
                                    <option value="Tabasco">Tabasco</option>
                                    <option value="Tamaulipas">Tamaulipas</option>
                                    <option value="Tlaxcala">Tlaxcala</option>
                                    <option value="Veracruz">Veracruz</option>
                                    <option value="Yucatán">Yucatán</option>
                                    <option value="Zacatecas">Zacatecas</option>
                                </select>
                                <p id="estado-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h2 class="card-title">Uso y Preferencia de Servicios de Salud</h2>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="problemasSalud">¿Qué sistema de salud es al primero que acude al presentar problemas de salud?</label><br>
                                <div class="form-check">
                                    <input checked class="form-check-input" type="radio" name="problemasSalud" id="publico" value="publico" chec>
                                    <label class="form-check-label" for="publico">Público</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="problemasSalud" id="privado" value="privado">
                                    <label class="form-check-label" for="privado">Privado</label>
                                </div>
                                <p id="problemasSalud-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>

                            <div class="form-group">
                                <label for="mejorServicio">¿Qué sistema de salud le ha dado mejor servicio?</label><br>
                                <div class="form-check">
                                    <input checked class="form-check-input" type="radio" name="mejorServicio" id="publicoServicio" value="publico">
                                    <label class="form-check-label" for="publicoServicio">Público</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="mejorServicio" id="privadoServicio" value="privado">
                                    <label class="form-check-label" for="privadoServicio">Privado</label>
                                </div>
                                <p id="mejorServicio-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>

                            <div class="form-group">
                                <label for="consultasPublicas" class="col-form-label">Número de veces en que ha requerido del servicio de salud pública este año</label>
                                <input class="form-control" type="number" id="consultasPublicas" placeholder="Ingrese un número" min="0">
                                <p id="consultasPublicas-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>

                            <div class="form-group">
                                <label for="consultasPrivadas" class="col-form-label">Número de veces en que ha requerido del servicio de salud privada este año</label>
                                <input class="form-control" type="number" id="consultasPrivadas" placeholder="Ingrese un número" min="0">
                                <p id="consultasPrivadas-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>

                            <div class="form-group" id="saludPublica">
                                <label for="saludPublica">Razones por las que acude al servicio de salud pública</label>
                                <div class="form-check">
                                    <input class="form-check-input saludPublicaCheckbox" type="checkbox" id="publicoMalestares" value="Malestares básicos">
                                    <label class="form-check-label" for="publicoMalestares">Malestares básicos</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input saludPublicaCheckbox" type="checkbox" id="publicoOperaciones" value="Operaciones quirúrgicas">
                                    <label class="form-check-label" for="publicoOperaciones">Operaciones quirúrgicas</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input saludPublicaCheckbox" type="checkbox" id="publicoVeneras" value="Enfermedades venéreas">
                                    <label class="form-check-label" for="publicoVeneras">Enfermedades venéreas</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input saludPublicaCheckbox" type="checkbox" id="publicoCronicas" value="Enfermedades crónicas">
                                    <label class="form-check-label" for="publicoCronicas">Enfermedades crónicas</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input saludPublicaCheckbox" type="checkbox" id="publicoChequeos" value="Chequeos">
                                    <label class="form-check-label" for="publicoChequeos">Chequeos</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input saludPublicaCheckbox" type="checkbox" id="publicoDentales" value="Tratamientos dentales">
                                    <label class="form-check-label" for="publicoDentales">Tratamientos dentales</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input saludPublicaCheckbox" type="checkbox" id="publicoOtros" value="Otros">
                                    <label class="form-check-label" for="publicoOtros">Otros</label>
                                </div>
                                <p id="saludPublica-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>


                            <div class="form-group" id="saludPrivada">
                                <label for="saludPrivada">Razones por las que acude al servicio de salud privada</label>
                                <div class="form-check">
                                    <input class="form-check-input saludPrivadaCheckbox" type="checkbox" id="privadoMalestares" value="Malestares básicos">
                                    <label class="form-check-label" for="privadoMalestares">Malestares básicos</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input saludPrivadaCheckbox" type="checkbox" id="privadoOperaciones" value="Operaciones quirúrgicas">
                                    <label class="form-check-label" for="privadoOperaciones">Operaciones quirúrgicas</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input saludPrivadaCheckbox" type="checkbox" id="privadoVeneras" value="Enfermedades venéreas">
                                    <label class="form-check-label" for="privadoVeneras">Enfermedades venéreas</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input saludPrivadaCheckbox" type="checkbox" id="privadoCronicas" value="Enfermedades crónicas">
                                    <label class="form-check-label" for="privadoCronicas">Enfermedades crónicas</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input saludPrivadaCheckbox" type="checkbox" id="privadoChequeos" value="Chequeos">
                                    <label class="form-check-label" for="privadoChequeos">Chequeos</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input saludPrivadaCheckbox" type="checkbox" id="privadoDentales" value="Tratamientos dentales">
                                    <label class="form-check-label" for="privadoDentales">Tratamientos dentales</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input saludPrivadaCheckbox" type="checkbox" id="privadoOtros" value="Otros">
                                    <label class="form-check-label" for="privadoOtros">Otros</label>
                                </div>
                                <p id="saludPrivada-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>

                            <p id="saludPrivada-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                        </div>
                    </div>


                    <div class="card mt-4">
                        <div class="card-header">
                            <h2 class="card-title">Transporte y Cercania</h2>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="gastoPublico" class="col-form-label">¿Cuál es el gasto que implica una visita a un servicio de salud pública?</label>
                                <input class="form-control" type="number" id="gastoPublico" placeholder="Ingrese un número" min="0">
                                <p id="gastoPublico-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>
                            <div class="form-group">
                                <label for="gastoPrivado" class="col-form-label">¿Cuál es el gasto que implica una visita a un servicio de salud privada? </label>
                                <input class="form-control" type="number" id="gastoPrivado" placeholder="Ingrese un número" min="0">
                                <p id="gastoPrivado-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>
                            <div class="form-group">
                                <label for="clinicasPublicas" class="col-form-label">Número de clínicas, hospitales, consultorios, etc., pertenecientes a la Secretaría de Salud Pública que conoce en su localidad </label>
                                <input class="form-control" type="number" id="clinicasPublicas" placeholder="Ingrese un número" min="0">
                                <p id="clinicasPublicas-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>
                            <div class="form-group">
                                <label for="clinicasPrivadas" class="col-form-label">Número de clínicas, hospitales, consultorios, etc., pertenecientes al sector privado que conoce en su localidad </label>
                                <input class="form-control" type="number" id="clinicasPrivadas" placeholder="Ingrese un número" min="0">
                                <p id="clinicasPrivadas-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h2 class="card-title">Uso y Percepción de Servicios</h2>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="serviciosUsados">¿Cuáles de estos servicios ha usado?</label>
                                <div class="form-check">
                                    <input class="form-check-input serviciosUsados" type="checkbox" id="imss" value="IMSS">
                                    <label class="form-check-label" for="imss">IMSS</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input serviciosUsados" type="checkbox" id="issste" value="ISSSTE">
                                    <label class="form-check-label" for="issste">ISSSTE</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input serviciosUsados" type="checkbox" id="farmaciasSimilares" value="Farmacias Similares">
                                    <label class="form-check-label" for="farmaciasSimilares">Farmacias Similares</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input serviciosUsados" type="checkbox" id="cruzRoja" value="Cruz Roja">
                                    <label class="form-check-label" for="cruzRoja">Cruz Roja</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input serviciosUsados" type="checkbox" id="hospitalesGenerales" value="Hospitales Generales">
                                    <label class="form-check-label" for="hospitalesGenerales">Hospitales Generales</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input serviciosUsados" type="checkbox" id="hospitalesPrivados" value="Hospitales Privados">
                                    <label class="form-check-label" for="hospitalesPrivados">Hospitales Privados</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input serviciosUsados" type="checkbox" id="otrosServicios" value="Otros">
                                    <label class="form-check-label" for="otrosServicios">Otros</label>
                                </div>
                                <p id="serviciosUsados-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>

                            <div class="form-group">
                                <label for="satisfaccionPublica">¿Qué tan satisfecho está con los servicios de salud pública disponibles en su localidad?</label>
                                <select class="form-control" id="satisfaccionPublica">
                                    <option value="" disabled selected>--Selecciona--</option>
                                    <option value="Muy satisfecho">Muy satisfecho</option>
                                    <option value="Satisfecho">Satisfecho</option>
                                    <option value="Insatisfecho">Insatisfecho</option>
                                    <option value="Muy insatisfecho">Muy insatisfecho</option>
                                </select>
                                <p id="satisfaccionPublica-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>
                            <div class="form-group">
                                <label for="satisfaccionPrivada">¿Qué tan satisfecho está con los servicios de salud privada disponibles en su localidad?</label>
                                <select class="form-control" id="satisfaccionPrivada">
                                    <option value="" disabled selected>--Selecciona--</option>
                                    <option value="Muy satisfecho">Muy satisfecho</option>
                                    <option value="Satisfecho">Satisfecho</option>
                                    <option value="Insatisfecho">Insatisfecho</option>
                                    <option value="Muy insatisfecho">Muy insatisfecho</option>
                                </select>
                                <p id="satisfaccionPrivada-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h2 class="card-title">Accesibilidad y Hábitos</h2>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="accesibilidadDistancia">¿Qué tan accesibles son los servicios de salud para usted en términos de distancia?</label>
                                <select class="form-control" id="accesibilidadDistancia">
                                    <option value="" disabled selected>--Selecciona--</option>
                                    <option value="Muy accesibles">Muy accesibles</option>
                                    <option value="Moderadamente accesibles">Moderadamente accesibles</option>
                                    <option value="Poco accesibles">Poco accesibles</option>
                                    <option value="Inaccesibles">Inaccesibles</option>
                                </select>
                                <p id="accesibilidadDistancia-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>
                            <div class="form-group">
                                <label for="chequeosAnuales">¿Con qué frecuencia realiza chequeos médicos anuales?</label>
                                <select class="form-control" id="chequeosAnuales">
                                    <option value="" disabled selected>--Selecciona--</option>
                                    <option value="Nunca">Nunca</option>
                                    <option value="Una vez al año">Una vez al año</option>
                                    <option value="Más de una vez al año">Más de una vez al año</option>
                                </select>
                                <p id="chequeosAnuales-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>
                            <div class="form-group">
                                <label for="consultasOnline">¿Con qué frecuencia utiliza servicios de consultas en línea?</label>
                                <select class="form-control" id="consultasOnline">
                                    <option value="" disabled selected>--Selecciona--</option>
                                    <option value="Nunca">Nunca</option>
                                    <option value="Ocasionalmente">Ocasionalmente</option>
                                    <option value="Frecuentemente">Frecuentemente</option>
                                </select>
                                <p id="consultasOnline-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h2 class="card-title">Dificultades y Mejoras</h2>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="razonNoVisita">Principal razón por la que no acude al médico tras presentar síntomas de una enfermedad</label>
                                <select class="form-control" id="razonNoVisita">
                                    <option value="" disabled selected>--Selecciona--</option>
                                    <option value="Problema económico">Problema económico</option>
                                    <option value="Falta de tiempo">Falta de tiempo</option>
                                    <option value="Lejanía">Lejanía de su domicilio al hospital, clínica, etc.</option>
                                </select>
                                <p id="razonNoVisita-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>
                            <div class="form-group">
                                <label for="afiliacionSalud">¿Cuenta con afiliación a algún servicio de salud?</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" id="afiliacionSi" name="afiliacion" value="Sí">
                                    <label class="form-check-label" for="afiliacionSi">Sí</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" id="afiliacionNo" name="afiliacion" value="No">
                                    <label class="form-check-label" for="afiliacionNo">No</label>
                                </div>
                                <p id="afiliacionSalud-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>

                            <div class="form-group">
                                <label for="seguroGastos">¿Cuenta con seguro de gastos médicos mayores?</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" id="seguroSi" name="seguro" value="Sí">
                                    <label class="form-check-label" for="seguroSi">Sí</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" id="seguroNo" name="seguro" value="No">
                                    <label class="form-check-label" for="seguroNo">No</label>
                                </div>
                                <p id="seguroGastos-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>

                            <div class="form-group">
                                <label for="medicamentosDificultad">¿Ha tenido dificultades para obtener medicamentos recetados en servicios públicos?</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" id="medicamentosSi" name="medicamentos" value="Sí">
                                    <label class="form-check-label" for="medicamentosSi">Sí</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" id="medicamentosNo" name="medicamentos" value="No">
                                    <label class="form-check-label" for="medicamentosNo">No</label>
                                </div>
                                <p id="medicamentosDificultad-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>

                            <div class="form-group">
                                <label for="mejoras">¿Qué medidas considera importantes para mejorar los servicios de salud en su localidad?</label>
                                <div class="form-check">
                                    <input class="form-check-input mejorasCheckbox" type="checkbox" id="mejorarInfraestructura" value="Mejorar infraestructura">
                                    <label class="form-check-label" for="mejorarInfraestructura">Mejorar infraestructura</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input mejorasCheckbox" type="checkbox" id="contratarPersonal" value="Contratar más personal médico">
                                    <label class="form-check-label" for="contratarPersonal">Contratar más personal médico</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input mejorasCheckbox" type="checkbox" id="reducirCostos" value="Reducir costos">
                                    <label class="form-check-label" for="reducirCostos">Reducir costos</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input mejorasCheckbox" type="checkbox" id="aumentarMedicamentos" value="Aumentar disponibilidad de medicamentos">
                                    <label class="form-check-label" for="aumentarMedicamentos">Aumentar disponibilidad de medicamentos</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input mejorasCheckbox" type="checkbox" id="otroMejoras" value="Otro">
                                    <label class="form-check-label" for="otroMejoras">Otro</label>
                                </div>
                                <p id="mejoras-error" class="card my-4 bg-danger border border-dark rounded p-4"></p>
                            </div>

                        </div>
                    </div>

                    <button class="btn btn-lg btn-primary btn-block text-center mt-4" type="submit" id="addDataButton">
                        Enviar Datos
                    </button>
                </form>
            </div>
        </div>
    </div>


    <!-- Scripts de jQuery -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>

    <!-- Lógica del Frontend -->
    <script src="./backend/app.js"></script>

</body>

</html>