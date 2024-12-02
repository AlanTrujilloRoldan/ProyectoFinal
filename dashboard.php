<!DOCTYPE html>
<html lang="es">

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

        .grafico {

            width: 99% !important; 
            height: auto !important;
            min-height: 170px; /* Establece una altura mínima */
            max-width: 100%; /* Ensure the width does not exceed the container */
        }

        .btna {
            border: none; 
            color: white; 
            padding: 14px 28px; 
            cursor: pointer; 
            border-radius: 5px; 
            display: inline-block;
            margin: 5px;
            transition: box-shadow 0.1s ease-in-out; /* Transición suave del efecto de sombra */
        }

        .fondoOpciones{
            background-color: #393551;
        }

        .fondoEstadisticas{
            background-color: #9e6389
        }

        .fondoGraficas{
            background-color: #f8c1cd;
        }

        .shadow-effect:hover {
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3); /* Aumenta el desplazamiento y la opacidad de la sombra */
        }

        .success {background-image: linear-gradient(to right, #28a745, #56c150);} 
        .success:hover {background-image: linear-gradient(to right, #34b556, #56c150);}

        .primary {background-image: linear-gradient(to right, #007bff, #4ab2e2);} 
        .primary:hover {background-image: linear-gradient(to right, #0b7dda, #4ab2e2);}
        
    </style>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css" rel="stylesheet" />
    
</head>

<body>

    <!-- BARRA DE NAVEGACIÓN -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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

    <div class="container-fluid" style="margin-top:30px;">
        <div class="row">
            <div class="col-12 d-flex align-items-center justify-content-center">
                <div class="container fondoOpciones rounded mt-5 text-center">
                <ul class="nav d-flex justify-content-center">
                    <li class=" mt-2 mb-3 col-12">
                        <button type="button" class="btna success shadow-effect" fdprocessedid="megrkk" id="nacionales">Datos Nacionales</button>
                    </li>

                    <li class="nav-item col-12">
                        <div class="form-group ">
                            <label class="badge-pill badge-secondary" for="estadosSelect">Selecciona un Estado:</label>
                            <select class="form-control form-select" id="estadosSelect">
                                <option value="" selected disabled>Seleccionar</option>
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
                            <button class="btna primary shadow-effect mt-3" id="submitButton">Seleccionar Estado</button>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
            <div class="col-12 ">
                <div class="container fondoEstadisticas rounded pt-3 mt-5">
                    <div class="row">
                        <div class="col-12 text-center ">
                            <h1 class="badge-secondary rounded" id="titulo">Estadísticas</h1>
                            <h2 class="badge-primary rounded" id="tipoEstadisticas">Hola</h2>
                        </div>
                    </div>
                    
                    <div class="row d-flex align-items-center justify-content-around"> <!-- Contenedor de fila para los gráficos -->
                        <!-- Gráfico 1 barras -->
                        <div class="col-12  col-md-6 mb-3 d-flex align-items-center justify-content-center">
                            <div class="grafico fondoGraficas rounded pt-3 ">
                                <h4 class="text-center" >Edad personas encuestadas</h4> <!-- Seguramente sea mejor poner los titulos de esta forma -->
                                <canvas id="grafico1" class=""></canvas>
                            </div>
                        </div>
                        <!-- Gráfico 7 barras doble -->
                        <div class="col-12 col-md-6 mb-3 d-flex align-items-center justify-content-center">
                            <div class="grafico bg-light rounded pt-3 ">
                                <h4 class="text-center">Usos servicios de salud</h4>
                                <canvas id="grafico7" class=""></canvas>
                            </div>
                        </div>
                        <!-- Gráfico 2 pastel -->
                        <div class="col-8 col-md-5 mb-3 d-flex justify-content-center">
                            <div class="grafico bg-light rounded pt-3">
                                <h4 class="text-center">Servicio al que acude</h4>
                                <canvas id="grafico2" class=""></canvas>
                            </div>
                        </div>
                        <!-- Gráfico 3 pastel -->
                        <div class="col-8 col-md-5 mb-3 d-flex justify-content-center">
                            <div class="grafico bg-light rounded pt-3">
                                <h4 class="text-center">Mejor servicio</h4>
                                <canvas id="grafico3" class=""></canvas>
                            </div>
                        </div>
                        <!-- Gráfico 4 pastel -->
                        <div class="col-8 col-md-5 mb-3 d-flex justify-content-center">                          
                            <div class="grafico bg-light rounded pt-3">
                                <h4 class="text-center">¿Afiliación a un servicio de salud?</h4>
                                <canvas id="grafico4" class=""></canvas>
                            </div>
                        </div>
                        <!-- Gráfico 5 pastel -->
                        <div class="col-8 col-md-5 mb-3 d-flex justify-content-center">                          
                            <div class="grafico bg-light rounded pt-3">
                                <h4 class="text-center">¿Cuenta con seguro de gastos mayores?</h4>
                                <canvas id="grafico5" class=""></canvas>
                            </div>
                        </div>

                        <!-- Gráfico 6 pastel -->
                        <div class="col-8 col-md-5 mb-3 d-flex justify-content-center">                          
                            <div class="grafico bg-light rounded pt-3">
                                <h4 class="text-center">¿Difícil obtención de medicamentos?</h4>
                                <canvas id="grafico6" class=""></canvas>
                            </div>
                        </div>

                        <!-- Forzar salto de línea -->
                        <div class="w-100"></div>

                        <!-- Gráfico 9 pastel mas de dos opciones -->
                        <div class="col-10 col-md-6 mb-3 d-flex justify-content-center">                          
                            <div class="grafico bg-light rounded pt-3">
                                <h4 class="text-center">Razones para consultas públicas</h4>
                                <canvas id="grafico9" class=""></canvas>
                            </div>
                        </div>

                        <!-- Gráfico 10 pastel mas de dos opciones -->
                        <div class="col-10 col-md-6 mb-3 d-flex justify-content-center">                          
                            <div class="grafico bg-light rounded pt-3">
                                <h4 class="text-center">Razones para consultas privadas</h4>
                                <canvas id="grafico10" class=""></canvas>
                            </div>
                        </div>

                        <!-- Gráfico 11 Barras doble -->
                        <div class="col-12 col-md-6 mb-3 d-flex justify-content-center">                          
                            <div class="grafico bg-light rounded pt-3">
                                <h4 class="text-center">Gasto aproximado en servicios de salud</h4>
                                <canvas id="grafico11" class=""></canvas>
                            </div>
                        </div>

                        <!-- Gráfico 13 Barras doble -->
                        <div class="col-12 col-md-6 mb-3 d-flex justify-content-center">                          
                            <div class="grafico bg-light rounded pt-3">
                                <h4 class="text-center">Establecimientos de salud en la localidad</h4>
                                <canvas id="grafico13" class=""></canvas>
                            </div>
                        </div>

                        <!-- Gráfico 15 pastel mas de dos opciones -->
                        <div class="col-10 col-md-6 mb-3 d-flex justify-content-center">                          
                            <div class="grafico bg-light rounded pt-3">
                                <h4 class="text-center">Servicios usados</h4>
                                <canvas id="grafico15" class=""></canvas>
                            </div>
                        </div>

                        <!-- Gráfico 18 pastel mas de dos opciones, de un select --> <!-- El orden desfasado es porque estuve acomodando los graficos con los que tenian
                        un tamaño similar-->
                        <div class="col-10 col-md-6 mb-3 d-flex justify-content-center">                          
                            <div class="grafico bg-light rounded pt-3">
                                <h4 class="text-center">Accesibilidad distancia</h4>
                                <canvas id="grafico18" class=""></canvas>
                            </div>
                        </div>

                        <!-- Gráfico 16 pastel mas de dos opciones, de un select -->
                        <div class="col-10 col-md-6 mb-3 d-flex justify-content-center">                          
                            <div class="grafico bg-light rounded pt-3">
                                <h4 class="text-center">Satisfaccion en serv. públicos</h4>
                                <canvas id="grafico16" class=""></canvas>
                            </div>
                        </div>

                        <!-- Gráfico 17 pastel mas de dos opciones, de un select -->
                        <div class="col-10 col-md-6 mb-3 d-flex justify-content-center">                          
                            <div class="grafico bg-light rounded pt-3">
                                <h4 class="text-center">Satisfaccion en serv. privados</h4>
                                <canvas id="grafico17" class=""></canvas>
                            </div>
                        </div>

                        <!-- Gráfico 19 pastel mas de dos opciones, de un select -->
                        <div class="col-10 col-md-6 mb-3 d-flex justify-content-center">                          
                            <div class="grafico bg-light rounded pt-3">
                                <h4 class="text-center">Chequeos rutinarios</h4>
                                <canvas id="grafico19" class=""></canvas>
                            </div>
                        </div>

                        <!-- Gráfico 20 pastel mas de dos opciones, de un select -->
                        <div class="col-10 col-md-6 mb-3 d-flex justify-content-center">                          
                            <div class="grafico bg-light rounded pt-3">
                                <h4 class="text-center">Consultas en línea</h4>
                                <canvas id="grafico20" class=""></canvas>
                            </div>
                        </div>

                        <!-- Gráfico 21 pastel mas de dos opciones, de un select -->
                        <div class="col-10 col-md-6 mb-3 d-flex justify-content-center">                          
                            <div class="grafico bg-light rounded pt-3">
                                <h4 class="text-center">Razones no ir al médico</h4>
                                <canvas id="grafico21" class=""></canvas>
                            </div>
                        </div>

                        <!-- Gráfico 202 pastel mas de dos opciones, de un checkbox -->
                        <div class="col-10 col-md-6 mb-3 d-flex justify-content-center">                          
                            <div class="grafico bg-light rounded pt-3">
                                <h4 class="text-center">Cosas que deben mejorar</h4>
                                <canvas id="grafico22" class=""></canvas>
                            </div>
                        </div>
                    </div>
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
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

</body>

</html>