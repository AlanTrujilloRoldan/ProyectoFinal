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

    constructor() {
        this.setupEventListeners(); //Se inicializan los metodos que detectan los eventos de los componentes especificados
    }

    setupEventListeners() {
        $('#entidades').on('click',() => this.getEntidades());
    }

    //probando la conexion con la base de datos
    getEntidades() {
        
        $.ajax({
            url: './backend/data-list.php',
            type: 'GET',
            success: function(response) {
                // SE OBTIENE EL OBJETO DE DATOS A PARTIR DE UN STRING JSON
                const datos = JSON.parse(response);
            
                console.log(datos);
            }
        });
    }

}

// Inicializar app
$(document).ready(() => {
    new graficos();
});