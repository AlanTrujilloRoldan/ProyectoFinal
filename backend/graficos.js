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

const satisfaccion = {
    "Muy satisfecho": 1,
    "Satisfecho": 2,
    "Insatisfecho": 3, 
    "Muy insatisfecho": 4
};

const accesibilidad = {
    "Muy accesibles": 1,
    "Moderadamente accesibles": 2,
    "Poco accesibles": 3, 
    "Inaccesibles": 4
};

const frecuencia = {
    "Nunca": 1,
    "Una vez al año": 2,
    "Más de una vez al año": 3, 
}

const razones = {
    "Problema económico": 1,
    "Falta de tiempo": 2,
    "Lejanía de su domicilio al hospital, clínica, etc.": 3, 
}

class graficos {

    static grafico1;
    static grafico2;
    static grafico3;
    static grafico4;
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
                console.log(graficos.obtenerEdades(datos));
                //console.log(graficos.obtenerProblemas(datos));
                console.log(graficos.obtenerSiONo(datos, "problemasSalud", graficos.graf2Param));
                console.log(graficos.obtenerSiONo(datos, "mejorServicio", graficos.graf3Param));
                console.log(graficos.obtenerSiONo(datos, "afiliacionSalud", graficos.graf4Param));
                console.log(graficos.obtenerSiONo(datos, "seguroGastos", graficos.graf5Param));
                console.log(graficos.obtenerSiONo(datos, "medicamentoDificultad", graficos.graf6Param));
                console.log(graficos.obtenerGruposConLimite(datos, "consultasPublicas", 50, 6, 10));
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
            success: function (response) {
                const datos = JSON.parse(response);
                console.log(graficos.obtenerEdades(datos));
                console.log(graficos.obtenerProblemas(datos));
                console.log(datos);
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

    static obtenerGruposConLimite( objeto, label, limite, cantidadGrupos, divisionGrupos ) {
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
        //grafico.labels= grupos.map((_, index) => `${index * divisionGrupos}-${index * divisionGrupos + (divisionGrupos - 1)}`); 

        //grafico.data = grupos;
        //console.log(grafico.data + ' aqui' + label);
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
            if (valor === 0) {
                conteo['Ceros']++;
            } else if (valor === 1) {
                conteo['Unos']++;
            }
        });

        grafico.labels= Object.keys(conteo);
        grafico.data = Object.values(conteo);
        console.log(grafico.data + ' aqui' + label);

        return lista;
    }

    static graficoEdades(edades){
        const ctx = document.getElementById('grafico1');
        if (graficos.grafico1) {
            graficos.grafico1.destroy();
        }
        graficos.grafico1 = new Chart(ctx, {
            type: 'bar',
            data: {
            labels:  graficos.graf1Param.labels , //edades
            datasets: [{
                label: 'Frecuencia edades',
                data:  graficos.graf1Param.data, //frecuencia
                borderWidth: 1,
                borderColor: 'rgba(255, 99, 132, 1)'
            }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true, // Mantiene la relación de aspecto
                plugins: {
                    title: {
                        display: true,
                        text: 'Edades de las personas encuestadas', // Título del gráfico
                        font: {
                            size: 14 // Tamaño de la fuente del título
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const ctx2 = document.getElementById('grafico2');
        if (graficos.grafico2) {
            graficos.grafico2.destroy();
        }
        graficos.grafico2 = new Chart(ctx2, {
            type: 'pie',
            data: {
            labels: ["Publico", "Privado"],
            datasets: [{
                label: 'Servicio al que acude',
                data: graficos.graf2Param.data, //frecuencia
                borderWidth: 1
            }]
            },
                options: {
                    responsive: true,
                    maintainAspectRatio: true, // Mantiene la relación de aspecto
                    plugins: {
                        title: {
                            display: true,
                            text: 'Servicio al que Acude', // Título del gráfico
                            font: {
                                size: 14 // Tamaño de la fuente del título
                            }
                        }
                    },
                    scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const ctx3 = document.getElementById('grafico3');
        if (graficos.grafico3) {
            graficos.grafico3.destroy();
        }
        graficos.grafico3 = new Chart(ctx3, {
            type: 'pie',
            data: {
            labels: ["Publico", "Privado"],
            datasets: [{
                label: 'Mejor servicio',
                data: graficos.graf3Param.data,
                borderWidth: 1
            }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true, // Mantiene la relación de aspecto
                plugins: {
                    title: {
                        display: true,
                        text: ' Mejor servicio', // Título del gráfico
                        font: {
                            size: 14 // Tamaño de la fuente del título
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const ctx4 = document.getElementById('grafico4');
        if (graficos.grafico4) {
            graficos.grafico4.destroy();
        }
        graficos.grafico4 = new Chart(ctx4, {
            type: 'pie',
            data: {
            labels: ["Si", "No"],
            datasets: [{
                label: 'Afiliacion',
                data: graficos.graf4Param.data,
                borderWidth: 1
            }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true, // Mantiene la relación de aspecto
                plugins: {
                    title: {
                        display: true,
                        text: '¿Afiliación a un servicio de salud?', // Título del gráfico
                        font: {
                            size: 14 // Tamaño de la fuente del título
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const ctx5 = document.getElementById('grafico5');
        if (graficos.grafico5) {
            graficos.grafico5.destroy();
        }
        graficos.grafico5 = new Chart(ctx5, {
            type: 'pie',
            data: {
            labels: ["Si", "No"],
            datasets: [{
                label: 'Afiliacion',
                data: graficos.graf5Param.data,
                borderWidth: 1
            }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true, // Mantiene la relación de aspecto
                plugins: {
                    title: {
                        display: true,
                        text: 'Personas con seguro de gastos mayores', // Título del gráfico
                        font: {
                            size: 14 // Tamaño de la fuente del título
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const ctx6 = document.getElementById('grafico6');
        if (graficos.grafico6) {
            graficos.grafico6.destroy();
        }
        graficos.grafico6 = new Chart(ctx6, {
            type: 'pie',
            data: {
            labels: ["Si", "No"],
            datasets: [{
                label: 'Afiliacion',
                data: graficos.graf6Param.data,
                borderWidth: 1
            }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true, // Mantiene la relación de aspecto
                plugins: {
                    title: {
                        display: true,
                        text: '¿Dificultad de obtención de medicamentos?', // Título del gráfico
                        font: {
                            size: 14 // Tamaño de la fuente del título
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    }

}
console.log(getEstadoPorValor(1));
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