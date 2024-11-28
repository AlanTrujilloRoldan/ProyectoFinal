<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UMSS</title>
    <!-- BOOTSTRAP 4 -->
    <link rel="stylesheet" href="https://bootswatch.com/4/lumen/bootstrap.min.css">
    <style>

        /* Estilo para ajustar el ancho del select */
        .form-select {
            max-width: 220px; /* Cambia este valor al ancho deseado */
            margin:auto;
        }

        /* Estilo para limitar la altura del dropdown y permitir el desplazamiento */
        .select2-results {
            max-height: 80px; /* Ajusta la altura máxima según tus necesidades */
            overflow-y: auto; /* Agrega una barra de desplazamiento vertical */
        }
    </style>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"></script>
</head>

<body>

    <!-- BARRA DE NAVEGACIÓN -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a class="navbar-brand" href=".">UMSS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto ">
                <li class="nav-item active">
                    <a class="nav-link" href="./index.php" id="formulario">Página principal</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="./formulario.php" id="formulario">Formulario</a>
                </li>
            </ul>
        </div>
    </nav>

    <div class="container-fluid bg-primary">
        <div class="row ">
            <div class="col-12 col-sm-3">
                <div class="container bg-danger  mt-5 text-center pb-5">
                <ul class="nav flex-column ">
                    <li class="nav-item mb-4">
                        <button type="button" class="btn btn-success" fdprocessedid="megrkk">Datos Nacionales</button>
                    </li>
                    <li class="nav-item mb-4">
                        <button type="button" class="btn btn-primary" fdprocessedid="megrkk">Más necesitados</button>
                    </li>
                    <li class="nav-item mb-4">

                        <div class="form-group ">
                            <label class="badge-pill badge-secondary" for="estadosSelect">Selecciona un Estado:</label>
                            <select class="form-control form-select" id="estadosSelect">
                                <option value="" selected disabled>Selecciona un estado</option>
                                <option value="1">Aguascalientes</option>
                                <option value="2">Baja California</option>
                                <option value="3">Baja California Sur</option>
                                <option value="4">Campeche</option>
                                <option value="5">Chiapas</option>
                                <option value="6">Chihuahua</option>
                                <option value="7">Ciudad de México</option>
                                <option value="8">Coahuila</option>
                                <option value="9">Colima</option>
                                <option value="10">Durango</option>
                                <option value="11">Estado de México</option>
                                <option value="12">Guanajuato</option>
                                <option value="13">Guerrero</option>
                                <option value="14">Hidalgo</option>
                                <option value="15">Jalisco</option>
                                <option value="16">Michoacán</option>
                                <option value="17">Morelos</option>
                                <option value="18">Nayarit</option>
                                <option value="19">Nuevo León</option>
                                <option value="20">Oaxaca</option>
                                <option value="21">Puebla</option>
                                <option value="22">Querétaro</option>
                                <option value="23">Quintana Roo</option>
                                <option value="24">San Luis Potosí</option>
                                <option value="25">Sinaloa</option>
                                <option value="26">Sonora</option>
                                <option value="27">Tabasco</option>
                                <option value="28">Tamaulipas</option>
                                <option value="29">Tlaxcala</option>
                                <option value="30">Veracruz</option>
                                <option value="31">Yucatán</option>
                                <option value="32">Zacatecas</option>
                            </select>
                            <!-- Botón para enviar -->
                            <button class="btn btn-primary mt-2" id="submitButton">Seleccionar Estado</button>
                        </div>
                    </li>
                    <li class="nav-item mb-4">
                        <button type="button" class="btn btn-warning" fdprocessedid="megrkk">Estadísticas</button>
                    </li>
                </ul>
                </div>
            </div>
            <div class="col-12 col-sm-9">
                <div class="container bg-success pt-3">
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                </div>               
            </div>
        </div>
    </div>

    <!-- Scripts de jQuery -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>

    <!-- Lógica del Frontend -->
    <script src="./backend/graficos.js"></script>

</body>

</html>