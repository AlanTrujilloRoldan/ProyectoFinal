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
            url: './backend/data-list.php',
            type: 'GET',
            success: function(response) {
                // SE OBTIENE EL OBJETO DE DATOS A PARTIR DE UN STRING JSON
                const datos = JSON.parse(response);
            
                console.log(datos);
                console.log(graficos.obtenerEdades(datos));
                graficos.graficoEdades();
            }
        });
    }

    datosEstadoEspecifico(value) {
        if (value === null) {
            console.log("No se ha seleccionado ningún valor");
            return;
        }
        $.ajax({
            url: './backend/data-search.php',
            data: {estado: value},
            type: 'GET',
            success: function (response) {
                const datos = JSON.parse(response);
                console.log(datos);
            }
        });
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
        return edades;
    }

    static graficoEdades(edades){
        const ctx = document.getElementById('grafico1');
        if (graficos.grafico1) {
            graficos.grafico1.destroy();
        }
        graficos.grafico1 = new Chart(ctx, {
            type: 'bar',
            data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true, // Mantiene la relación de aspecto
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
            type: 'bar',
            data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true, // Mantiene la relación de aspecto
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
            type: 'bar',
            data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true, // Mantiene la relación de aspecto
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
            type: 'bar',
            data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true, // Mantiene la relación de aspecto
            scales: {
                y: {
                beginAtZero: true
                }
            }
            }
        });
    }

}

// Inicializar app
$(document).ready(() => {
    const ob =new graficos();
    graficos.graficoEdades();
});