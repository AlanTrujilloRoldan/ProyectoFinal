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

    static grafico1;
    static grafico2;
    static grafico3;
    static grafico4;
    static grafico5;
    static grafico6;
    static grafico7;
    static grafico8;
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
                graficos.graficoEdades();
            }
        });
        let estado = getEstadoPorValor(Number(value));    
        $('#tipoEstadisticas').text(`Estadísticas de ${estado}`); // Cambiar el titulo de las estadísticas que se muestran
        $('#estadosSelect').val('').trigger('change'); // Restablecer a la opción por defecto
    }

    static obtenerEdades( objeto ) {
        let edades = [];
        
        // Recorrer el objeto y obtener la edad de cada registro
        for (const key in objeto) {
            if (objeto.hasOwnProperty(key) && !isNaN(key)) { // Verificar que sea un índice numérico
                edades.push(objeto[key].edad); // Acceder a la propiedad 'edad'
            }  
        }
        const grupos = Array(10).fill(0); // Para grupos de 10 años

        // Agrupar las edades
        edades.forEach(edad => {
            if (edad >= 0 && edad <= 99) {
                const grupoIndex = Math.floor(edad / 10);
                grupos[grupoIndex]++;
            }
        });

        // Convertir el objeto a arreglos para Chart.js
        graficos.graf1Param.labels = grupos.map((_, index) => `${index * 10}-${index * 10 + 9}`);
        graficos.graf1Param.data = grupos;
        console.log(grupos.map((_, index) => `${index * 10}-${index * 10 + 9}`) + ' aqui grupos');
        return edades;
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
        console.log(grafico.data + ' aqui' + label);
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
        console.log(grafico.data + ' aqui' + label);

        return lista;
    }

    static dibujarGrafico(grafico, ctx, tipo, titulo, label, datos, pastel){ //La proxima modificacion seguro que es el tema de los colores
        if (grafico) {
            grafico.destroy();
        }
        grafico = new Chart(ctx, {
            type: tipo,
            data: {
                labels: label,
                datasets: [{
                    data: datos,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true, // Mantiene la relación de aspecto
                plugins: {
                    title: {
                        display: true,
                        text: titulo, // Título del gráfico
                        font: {
                            size: 14 // Tamaño de la fuente del título
                        }
                    },
                    legend: {
                        display: pastel//Esto es para mostrar las etiquetas que muestran que significa cada color en el grafico, pero como solo quiero que se usen
                        //en los graficos de pastel, entonces se debe especificar en la llamada de la funcion, true para cuando sea de pastel y false cuando no, para las de barras
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

    

    static graficoEdades(edades){
        const ctx = document.getElementById('grafico1');
        graficos.grafico1 = graficos.dibujarGrafico(graficos.grafico1, ctx, 'bar', 'Edades de las personas encuestadas', graficos.graf1Param.labels, graficos.graf1Param.data, false);

        const ctx7 = document.getElementById('grafico7');
        graficos.grafico7 = graficos.dibujarGrafico(graficos.grafico7, ctx7, 'bar', 'Edades de las personas encuestadas', graficos.graf7Param.labels, graficos.graf7Param.data , false);
        

        const ctx2 = document.getElementById('grafico2');
        graficos.grafico2 = graficos.dibujarGrafico(graficos.grafico2, ctx2, 'pie', 'Servicio al que acude', ["Publico", "Privado"], graficos.graf2Param.data, true);

        const ctx3 = document.getElementById('grafico3');
        graficos.grafico3 = graficos.dibujarGrafico(graficos.grafico3, ctx3, 'pie', ' Mejor servicio', ["Publico", "Privado"], graficos.graf3Param.data, true);

        const ctx4 = document.getElementById('grafico4');
        graficos.grafico4 = graficos.dibujarGrafico(graficos.grafico4, ctx4, 'pie', '¿Afiliación a un servicio de salud?', ["Si", "No"], graficos.graf4Param.data, true);

        const ctx5 = document.getElementById('grafico5');
        graficos.grafico5 = graficos.dibujarGrafico(graficos.grafico5, ctx5, 'pie', 'Personas con seguro de gastos mayores', ["Si", "No"], graficos.graf5Param.data, true);

        const ctx6 = document.getElementById('grafico6');
        graficos.grafico6 = graficos.dibujarGrafico(graficos.grafico6, ctx6, 'pie', '¿Dificultad de obtención de medicamentos?', ["Si", "No"], graficos.graf6Param.data, true);

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