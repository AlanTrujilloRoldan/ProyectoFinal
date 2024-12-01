const estados = {
    "Aguascalientes": 1,
    "Baja California": 2,
    "Baja California Sur": 3,
    "Campeche": 4,
    "Chiapas": 5,
    "Chihuahua": 6,
    "Ciudad de México": 7,
    "Coahuila": 8,
    "Colima": 9,
    "Durango": 10,
    "Estado de México": 11,
    "Guanajuato": 12,
    "Guerrero": 13,
    "Hidalgo": 14,
    "Jalisco": 15,
    "Michoacán": 16,
    "Morelos": 17,
    "Nayarit": 18,
    "Nuevo León": 19,
    "Oaxaca": 20,
    "Puebla": 21,
    "Querétaro": 22,
    "Quintana Roo": 23,
    "San Luis Potosí": 24,
    "Sinaloa": 25,
    "Sonora": 26,
    "Tabasco": 27,
    "Tamaulipas": 28,
    "Tlaxcala": 29,
    "Veracruz": 30,
    "Yucatán": 31,
    "Zacatecas": 32
};

class graficos {

    static grafico1; //grafico de barras de las edades
    static grafico2; //grafico de pastel de los problemas de salud
    static grafico3; //grafico de pastel de los servicios de salud
    static grafico4; //grafico de pastel de la afiliacion a servicios de salud
    static grafico5; //grafico de pastel de los seguros de gastos mayores
    static grafico6; //grafico de pastel de la dificultad de obtencion de medicamentos
    static grafico7; //grafico de barras dobles de los usos de servicios de salud
    static grafico8; //grafico de barras dobles de los usos de servicios de salud
    static grafico9; //grafico de pastel con mas de dos opciones, de las razones para consultas publicas
    static grafico10; //grafico de pastel con mas de dos opciones, de las razones para consultas privadas
    static grafico11; //grafico de barras dobles de los gastos de servicios de salud publica
    static grafico12; //grafico de barras dobles de los gastos de servicios de salud privada

    static graf1Param = {
        "labels": [],
        "data": []
    }
    static graf2Param = {
        "labels": [],
        "data": []
    }

    static graf3Param = {
        "labels": [],
        "data": []
    }

    static graf4Param = {
        "labels": [],
        "data": []
    }

    static graf5Param = {
        "labels": [],
        "data": []
    }

    static graf6Param = {
        "labels": [],
        "data": []
    }

    static graf7Param = {
        "labels": [],
        "data": []
    }

    static graf7Param = {
        "labels": [],
        "data": []
    }

    static graf8Param = {
        "labels": [],
        "data": []
    }
    static graf9Param = {
        "labels": [],
        "data": []
    }
    static graf10Param = {
        "labels": [],
        "data": []
    }

    static graf11Param = {
        "labels": [],
        "data": []
    }

    static graf12Param = {
        "labels": [],
        "data": []
    }

    constructor() {
        this.setupEventListeners(); //Se inicializan los metodos que detectan los eventos de los componentes especificados
    }

    setupEventListeners() {
        $('#nacionales').on('click',() => this.getNacional());

        // Escuchar clics en los enlaces del dropdown
        $('#submitButton').on('click', () => {
            const estado = $('#estadosSelect').val();
            this.datosEstadoEspecifico(estado);
        });
    }

    //probando la conexion con la base de datos
    getNacional() {
        
        $.ajax({
            url: './backend/list',
            type: 'GET',
            success: function(response) {
                // SE OBTIENE EL OBJETO DE DATOS A PARTIR DE UN STRING JSON
                const datos = JSON.parse(response);
            
                console.log(datos);
                console.log(graficos.obtenerGruposConLimite(datos, "edad",graficos.graf1Param, 75, 6, 15));
                console.log(graficos.obtenerSiONo(datos, "problemasSalud", graficos.graf2Param));
                console.log(graficos.obtenerSiONo(datos, "mejorServicio", graficos.graf3Param));
                console.log(graficos.obtenerSiONo(datos, "afiliacionSalud", graficos.graf4Param));
                console.log(graficos.obtenerSiONo(datos, "seguroGastos", graficos.graf5Param));
                console.log(graficos.obtenerSiONo(datos, "medicamentoDificultad", graficos.graf6Param));
                console.log(graficos.obtenerGruposConLimite(datos, "consultasPublicas",graficos.graf7Param, 50, 6, 10));
                console.log(graficos.obtenerGruposConLimite(datos, "consultasPrivadas",graficos.graf8Param, 50, 6, 10));
                console.log(graficos.obtenerGruposCheckBox(datos, ["publicoMB", "publicoOQ", "publicoEV", "publicoEC", "publicoC", "publicoTD", "publicoO"], graficos.graf9Param, ["Malestares básicos","Op. quirúrgicas","Enf. venéreas","Enf. crónicas","Chequeos","Trat. dentales","Otros"]));
                console.log(graficos.obtenerGruposCheckBox(datos, ["privadoMB", "privadoOQ", "privadoEV", "privadoEC", "privadoC", "privadoTD", "privadoO"], graficos.graf10Param, ["Malestares básicos","Op. quirúrgicas","Enf. venéreas","Enf. crónicas","Chequeos","Trat. dentales","Otros"]));
                console.log(graficos.obtenerGruposConLimite(datos, "gastoPublico",graficos.graf11Param, 20000, 5, 5000));
                console.log(graficos.obtenerGruposConLimite(datos, "gastoPrivado",graficos.graf12Param, 20000, 5, 5000));
                graficos.graficoEdades();
                $('#tipoEstadisticas').text('Estadísticas nacionales');
            }
        });
    }

    datosEstadoEspecifico(value) {
        if (value === null) {
            console.log("No se ha seleccionado ningún valor");
            return;
        }
        $.ajax({
            url: './backend/listarEstado',
            data: {estado: value},
            type: 'GET',
            success: function (response) { //Si se quisiera dejar de usar los metodos estaticos, entonces esta funcion tiene que estar declarada como una funcion de flecha
                //ya que al usar las llaves no se puede usar el this para referirse a la clase, no lo cambio porque se les tendria que quitar el static a todas las funciones
                // ademas de que tecnicamente no hay problema, pero creo que se veria un poco mejor si ni usara los metodos estaticos
                const datos = JSON.parse(response);
                console.log(datos);
                console.log(graficos.obtenerGruposConLimite(datos, "edad",graficos.graf1Param, 75, 6, 15));
                console.log(graficos.obtenerSiONo(datos, "problemasSalud", graficos.graf2Param));
                console.log(graficos.obtenerSiONo(datos, "mejorServicio", graficos.graf3Param));
                console.log(graficos.obtenerSiONo(datos, "afiliacionSalud", graficos.graf4Param));
                console.log(graficos.obtenerSiONo(datos, "seguroGastos", graficos.graf5Param));
                console.log(graficos.obtenerSiONo(datos, "medicamentoDificultad", graficos.graf6Param));
                console.log(graficos.obtenerGruposConLimite(datos, "consultasPublicas",graficos.graf7Param, 50, 6, 10));
                console.log(graficos.obtenerGruposConLimite(datos, "consultasPrivadas",graficos.graf8Param, 50, 6, 10));
                console.log(graficos.obtenerGruposCheckBox(datos, ["publicoMB", "publicoOQ"], graficos.graf9Param));
                graficos.graficoEdades();
            }
        });
        let estado = getEstadoPorValor(Number(value));    
        $('#tipoEstadisticas').text(`Estadísticas de ${estado}`); // Cambiar el titulo de las estadísticas que se muestran
        $('#estadosSelect').val('').trigger('change'); // Restablecer a la opción por defecto
    }

    static obtenerGruposCheckBox( objeto, labels, grafico, etiquetas ) {
        let recuento = [];
        let lista = [];
        
        // Recorrer el objeto y obtener los datos especificos de cada registro
        const totalRegistros = 0;
        for(let i = 0; i < labels.length; i++){
            for (const key in objeto) {
                if (objeto.hasOwnProperty(key) && !isNaN(key)) { // Verificar que sea un índice numérico
                    lista.push(Number(objeto[key][labels[i]])); // Acceder a la propiedad deseada
                }
            }
            recuento[i] = lista.reduce((a, b) => a + b, 0);
            lista = [];
        }
        // Convertir el objeto a arreglos para Chart.js
        grafico.labels = etiquetas;
        grafico.data = recuento;
        console.log(grafico.data + ' CHECK ' + labels + " metodo de checkbox" + recuento);
        return recuento;
    }

    static obtenerGruposConLimite( objeto, label, grafico, limite, cantidadGrupos, divisionGrupos ) {
        //se deben especificar la cantidad de los grupos, dependiendo de los rangos "especificos" que se quieran representar, es decir, los grupos
        //que se desean mostrar con el rango de 0-10,10-20 y asi, pero se debe declarar un grupo adicional para los valores que superen el limite
        //entonces es la cantidad de grupos deseados + 1, ya que el ultimo grupo es para los valores que superen el limite
        //El valor de la division es el rango que puede abarcar cada grupo, y el ultimo sera un valor con un signo + para indicar que es el grupo
        //que abarca a los que rebasan el limite establecido, otro aspecto es que la funcion sirve para numeros enteros, no para decimales, pero eso 
        //se puede arreglar en la parte de grupos.map, como esta el +1 es para enteros, pero para decimales seria +0.1
        let lista = [];

        // Recorrer el objeto y obtener los datos especificos de cada registro
        for (const key in objeto) {
            if (objeto.hasOwnProperty(key) && !isNaN(key)) { // Verificar que sea un índice numérico
                lista.push(Number(objeto[key][label])); // Acceder a la propiedad deseada
            }
        }

        const grupos = Array(cantidadGrupos).fill(0); // Se crea un arreglo con la cantidad de grupos especificada

        // Agrupar las edades
        lista.forEach(valor => {
            
                if(valor >= limite){
                    grupos[cantidadGrupos - 1]++; //En caso de que haya un valor que sea mayor o igual al limite establecido, se coloca al final, que ese grupo expresa
                    //los valores superiores a este limite, siendo por ejemplo 1000+ o 5000+ etc.
                    return;
                }

                const grupoIndex = Math.floor(valor / divisionGrupos);
                grupos[grupoIndex]++;
        });

        // Se crean los labels para el gráfico, indicando los rangos de los grupos dependiendo de como se hayan hecho las divisiones
        let labelsGrafico = grupos.map((_, index) => `${index * divisionGrupos}-${index * divisionGrupos + (divisionGrupos - 1)}`); 
        labelsGrafico[labelsGrafico.length - 1] = `${(cantidadGrupos - 1) * divisionGrupos}+`;
        grafico.labels= labelsGrafico;

        grafico.data = grupos;
        console.log(grafico.data + ' aqui ' + label);
        console.log(labelsGrafico + ' aqui grupos de mi funcion ' + grupos);

        return lista;

    }


    static obtenerSiONo(objeto, label, grafico){
        let lista = [];

        // Recorrer el objeto y obtener los datos especificos de cada registro
        for (const key in objeto) {
            if (objeto.hasOwnProperty(key) && !isNaN(key)) { // Verificar que sea un índice numérico
                lista.push(Number(objeto[key][label])); // Acceder a la propiedad deseada
            }
        }

        const conteo = {
            'Ceros': 0,
            'Unos': 0
        };

        lista.forEach(valor => {
            if (valor == 0) {
                conteo['Ceros']++;
            } else if (valor == 1) {
                conteo['Unos']++;
            }
        });

        console.log(conteo + ' aqui conteo ' + label);

        grafico.labels= Object.keys(conteo);
        grafico.data = Object.values(conteo);
        console.log(grafico.data + ' aqui ' + label);

        return lista;
    }

    static dibujarGrafico(grafico, ctx, tipo, titulo, datos, etiquetas){ //La proxima modificacion seguro que es el tema de los colores
        if (grafico) {
            grafico.destroy();
        }
        grafico = new Chart(ctx, {
            type: tipo,
            data: datos,
            options: {
                responsive: true,
                maintainAspectRatio: true, // Mantiene la relación de aspecto
                plugins: {
                    title: {
                        display: false,
                        text: titulo, // Título del gráfico
                        font: {
                            size: 14 // Tamaño de la fuente del título
                        }
                    },
                    legend: {
                        display: etiquetas//Esto es para mostrar las etiquetas que muestran que significa cada color en el grafico, pero como solo quiero que se usen
                        //en los graficos de pastel y en los graficos dobles, entonces se debe especificar en la llamada de la funcion, true para cuando sea quiera mostrar y false cuando no
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        return grafico;
    }

    static datosGrafico(labelEjeX,label1, data1, label2, data2, opcionGrafico, pastel) {
        //opcionGrafico es para identificar que tipo de grafico se quiere dibujar, 0 es para un grafico de barras o pastel con dos opciones, 1 es para un grafico de barras dobles y 2 es
        //para un grafico de pastel con mas de dos opciones

        if(opcionGrafico == 2){
            const datos = {
                labels: labelEjeX,
                datasets: [
                    {
                        label: label1,
                        data: data1,
                        backgroundColor: [ 'rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(5, 19, 192, 0.6)' ],
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }
                ]
            };
            return datos;
        }
        
        if(opcionGrafico == 0){
            const datos = {
                labels: labelEjeX,
                datasets: [
                    {
                        label: label1,
                        data: data1,
                        backgroundColor: pastel ? [ 'rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)' ] :'rgba(255, 99, 132, 0.2)' ,
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }
                ]
            };
            return datos;
        }

        const datos = {
            labels: labelEjeX,
            datasets: [
                {
                    label: label1,
                    data: data1,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: label2,
                    data: data2,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                } 
            ]
        };
        return datos;
    }

    

    static graficoEdades(edades){
        const ctx = document.getElementById('grafico1');
        graficos.grafico1 = graficos.dibujarGrafico(graficos.grafico1, ctx, 'bar', 'Edades', graficos.datosGrafico(graficos.graf1Param.labels, 'Cantidad', graficos.graf1Param.data, '', [], 0, false), false);

        const ctx7 = document.getElementById('grafico7');
        graficos.grafico7 = graficos.dibujarGrafico(graficos.grafico7, ctx7, 'bar', 'Consultas', graficos.datosGrafico(graficos.graf7Param.labels, 'Publicas', graficos.graf7Param.data, 'Privadas',  graficos.graf8Param.data, 1, false), true);
        

        const ctx2 = document.getElementById('grafico2');
        graficos.grafico2 = graficos.dibujarGrafico(graficos.grafico2, ctx2, 'pie', 'Problemas de salud', graficos.datosGrafico(["Publico", "Privado"], 'Cantidad', graficos.graf2Param.data, '', [], 0, true), true);

        const ctx3 = document.getElementById('grafico3');
        graficos.grafico3 = graficos.dibujarGrafico(graficos.grafico3, ctx3, 'pie', ' Mejor servicio',graficos.datosGrafico(["Publico", "Privado"], 'Cantidad', graficos.graf3Param.data, '', [], 0, true), true);

        const ctx4 = document.getElementById('grafico4');
        graficos.grafico4 = graficos.dibujarGrafico(graficos.grafico4, ctx4, 'pie', '¿Afiliación a un servicio de salud?',graficos.datosGrafico(["Si", "No"], 'Cantidad', graficos.graf4Param.data, '', [], 0, true), true);

        const ctx5 = document.getElementById('grafico5');
        graficos.grafico5 = graficos.dibujarGrafico(graficos.grafico5, ctx5, 'pie', 'Personas con seguro de gastos mayores',graficos.datosGrafico(["Si", "No"], 'Cantidad', graficos.graf5Param.data, '', [], 0, true), true);

        const ctx6 = document.getElementById('grafico6');
        graficos.grafico6 = graficos.dibujarGrafico(graficos.grafico6, ctx6, 'pie', '¿Dificultad de obtención de medicamentos?',graficos.datosGrafico(["Si", "No"], 'Cantidad', graficos.graf6Param.data, '', [], 0, true), true);
        
        const ctx9 = document.getElementById('grafico9');
        graficos.grafico9 = graficos.dibujarGrafico(graficos.grafico9, ctx9, 'pie', 'Razones para consultas públicas',graficos.datosGrafico(graficos.graf9Param.labels, 'Cantidad', graficos.graf9Param.data, '', [], 2, true), true);
    
        const ctx10 = document.getElementById('grafico10');
        graficos.grafico10 = graficos.dibujarGrafico(graficos.grafico10, ctx10, 'pie', 'Razones para consultas privadas',graficos.datosGrafico(graficos.graf10Param.labels, 'Cantidad', graficos.graf10Param.data, '', [], 2, true), true);

        const ctx11 = document.getElementById('grafico11');
        graficos.grafico11 = graficos.dibujarGrafico(graficos.grafico11, ctx11, 'bar', 'Gasto total', graficos.datosGrafico(graficos.graf11Param.labels, 'Publico', graficos.graf11Param.data, 'Privado',  graficos.graf12Param.data, 1, false), true);
        

    }

}

function getEstadoPorValor(valor) {
    return Object.keys(estados).find(key => estados[key] === valor);
}

// Inicializar app
$(document).ready(() => {
    const ob =new graficos();
    ob.getNacional();
    graficos.graficoEdades();

    $(window).resize(function() {
        graficos.graficoEdades();
    });
});