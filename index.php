<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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


    <div class="container-fluid text-white p-5" style="position: relative; background-image: url('./backend/src/bannerUMSS.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.5); z-index: 1;"></div>
        <div style="position: relative; z-index: 2;">
            <h1>UMSS</h1>
            <p class="lead">Un Mejor Sistema de Salud</p>
        </div>
    </div>

    <div class="container">
        <div class="row p-4">
            <!-- FORMULARIO PARA AGREGAR DATOS -->
            <div class="col-12">
                <h2 class="mt-4">Información de la Página</h2>
                <div class="card">
                    <div class="card-body">
                        <p class="card-text">
                        Nuestra aplicación web está diseñada para centralizar y difundir información detallada sobre los servicios de salud públicos y privados disponibles en las 32 entidades federativas de México. 
                        A través de esta plataforma, los usuarios pueden acceder fácilmente a datos actualizados sobre los diferentes servicios de salud, incluyendo costos y características específicas de cada entidad.
                            <br><br>
                            Además, la aplicación busca generar un censo estatal que permita identificar áreas de oportunidad dentro del sistema de salud. 
                            Este censo facilitará la implementación de campañas de prevención de enfermedades y fortalecerá la resiliencia comunitaria mediante la difusión de información relevante.
                            <br><br>
                            Para las autoridades y responsables de la planificación sanitaria, nuestra herramienta ofrece capacidades de análisis avanzadas que facilitan la optimización de recursos y la toma de decisiones informadas. El objetivo final es reducir las desigualdades en el acceso a la salud y mejorar el bienestar general de la población mexicana.

                        </p>
                    </div>
                </div>
                <h2 class="mt-4">Información de la ODS</h2>
                <div class="card">
                    <div class="card-body">
                        <p class="card-text">
                        El <strong>Objetivo de Desarrollo Sostenible (ODS) 3: Salud y Bienestar</strong> busca garantizar una vida saludable y promover el bienestar para todos en todas las edades. 
                        Este objetivo se fundamenta en el derecho humano a la salud, que implica alcanzar el nivel más alto posible de bienestar físico y mental, independientemente del género, estatus socioeconómico u otras características individuales.
                            <br><br>
                            Aunque este derecho está consagrado en la Constitución de muchos países, incluyendo México, las disparidades en el acceso a servicios de salud esenciales son evidentes. 
                            Estas desigualdades afectan tanto a individuos como a familias y comunidades enteras. Por ello, la salud y el bienestar figuran entre los 17 objetivos de desarrollo sostenible adoptados por 193 países miembros de la ONU.
                            <br><br>
                            Para alcanzar este objetivo, se han establecido los siguientes hitos clave:
                            <ul>
                                <li>Mayor inversión en los sistemas sanitarios.</li>
                                <li>Disminución de la mortalidad infantil en países en desarrollo.</li>
                                <li>Erradicación de pandemias como el VIH/SIDA, tuberculosis y malaria.</li>
                                <li>Fortalecimiento de la resiliencia ante futuras amenazas a la salud.</li>
                                <li>Inmunización contra enfermedades prevenibles.</li>
                                <li>Cobertura universal de salud, incluyendo acceso a medicamentos, vacunas y seguros médicos asequibles.</li>
                            </ul>
                        </p>
                    </div>
                </div>

                <h2 class="mt-4">Aprender más al respecto</h2>
                <div class="card">
                     <iframe width="100%" height="400" src="https://www.youtube.com/embed/wW-uXU9w8fo" title="Salus como derecho en México" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
    <script src="./backend/app.js"></script>

    <!-- PIE DE PÁGINA -->
<footer class="bg-dark text-white text-center py-3">
    <div class="container">
        <!-- Logo pequeño -->
        <img src="backend/src/UMSS_minilogo.png" alt="Logo Pequeño UMSS" style="height: 30px; margin-bottom: 5px;">
        <p class="mb-0">UMSS - Un Mejor Sistema de Salud © 2024. Todos los derechos reservados.</p>
    </div>
</footer>
</body>

</html>