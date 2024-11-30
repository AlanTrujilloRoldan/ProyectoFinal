<?php
    //ESTE INDEX ES PARA EL SLIM, PARA CARGAR LOS METODOS DE LA API
    require_once 'vendor/autoload.php';

    use myapi\Read as Read;
    use myapi\Create as Create;
    
    $app = new Slim\App();

    $app->get('/list', function($request, $response, $args){
        $response = $response->withHeader('Content-Type', 'application/json; charset=utf-8'); //Para los acentos

        $dataApp = new Read('umss');

        $dataApp->list();

        $response->getBody()->write(json_encode($dataApp->getData()));
        return $response;
    });

    $app->post('/add', function($request, $response, $args){
        $response = $response->withHeader('Content-Type', 'application/json; charset=utf-8'); //Para los acentos

        $dataApp = new Create('umss');

        $reqPost = $request->getParsedBody();

        
        $dataApp->add($reqPost);
        

        $response->getBody()->write(json_encode($dataApp->getData()));
        return $response;
    });

    $app->get('/listarEstado', function($request, $response, $args){
        $response = $response->withHeader('Content-Type', 'application/json; charset=utf-8'); //Para los acentos

        $dataApp = new Read('umss');

        $queryParams = $request->getQueryParams();

        if(isset($queryParams['estado'])) {
            $dataApp->listarEstado($queryParams['estado']);
        }

        $response->getBody()->write(json_encode($dataApp->getData()));
        return $response;
    });

    $app->run();
?>