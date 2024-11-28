<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UMSS</title>
    <!-- BOOTSTRAP 4 -->
    <link rel="stylesheet" href="https://bootswatch.com/4/lumen/bootstrap.min.css">
    <style>

        .nav-fixed {
            position: fixed; /* Fijo en la ventana */
            width: 120px; /* Ancho fijo para evitar cambios de tamaño */
            z-index: 1000; /* Asegúrate de que esté por encima de otros elementos */
        }

        .content {
            margin-left: 220px; /* Margen para el contenido principal */
        }
    </style>
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
                    <a class="nav-link" href="./formulario.php" id="formulario">Formulario</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="./dashboard.php" id="dashboard">Dashboard</a>
                </li>
            </ul>
        </div>
    </nav>

    <div class="container-fluid bg-primary">
        <div class="row ">
            <div class="col-12 col-sm-3">
                <div class="container bg-danger  mt-5 text-center pb-5">
                <ul class="nav flex-column ">
                    <li class="nav-item mb-3">
                        <button type="button" class="btn btn-success" fdprocessedid="megrkk">Datos Nacionales</button>
                    </li>
                    <li class="nav-item mb-3">
                        <button type="button" class="btn btn-primary" fdprocessedid="megrkk">Más necesitados</button>
                    </li>
                    <li class="nav-item mb-3">
                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" class="btn btn-secondary" fdprocessedid="niy6c2" id="entidades">Ent. Federativas</button>
                            <div class="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" fdprocessedid="qwnm8f"></button>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a class="dropdown-item" href="#">Dropdown link</a>
                                <a class="dropdown-item" href="#">Dropdown link</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item mb-3">
                        <button type="button" class="btn btn-danger" fdprocessedid="megrkk">Button</button>
                    </li>
                    <li class="nav-item ">
                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" class="btn btn-primary" fdprocessedid="niy6c2">Primary</button>
                            <div class="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" fdprocessedid="qwnm8f"></button>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a class="dropdown-item" href="#">Dropdown link</a>
                                <a class="dropdown-item" href="#">Dropdown link</a>
                                </div>
                            </div>
                        </div>
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