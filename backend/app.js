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

class app {
    constructor() {
        this.setupEventListeners();
        this.hideErrors();
    }

    hideErrors() {
        $('#curp-error, #edad-error, #estado-error, #problemasSalud-error, #mejorServicio-error, #consultasPublicas-error, #consultasPrivadas-error, #saludPublica-error, #saludPrivada-error, #gastoPublico-error, #gastoPrivado-error, #clinicasPublicas-error, #clinicasPrivadas-error, #serviciosUsados-error, #satisfaccionPublica-error, #satisfaccionPrivada-error, #accesibilidadDistancia-error, #chequeosAnuales-error, #consultasOnline-error, #razonNoVisita-error, #afiliacionSalud-error, #seguroGastos-error, #medicamentosDificultad-error, #mejoras-error').hide();
    }

    setupEventListeners() {
        //Eventos especiales
        $('#curp').on('keyup', () => this.convertirMayusculas());
        $('#curp').on('click', () => this.convertirMayusculas());
        $('#data-form').on('submit', (e) => this.submitForm(e));

        //Agregar evento blur para validación en tiempo real
        //DATOS PERSONALES
        $('#curp').on('blur', () => this.validateCURP());
        $('#edad').on('blur', () => this.validateEdad());
        $('#estado').on('blur', () => this.validateSelector('#estado', '#estado-error'));

        //USO Y PREFERENCIA DE SERVICIOS DE SALUD
        $('#consultasPublicas').on('blur', () => this.validateNumber365('#consultasPublicas', '#consultasPublicas-error'));
        $('#consultasPrivadas').on('blur', () => this.validateNumber365('#consultasPrivadas', '#consultasPrivadas-error'));
        $('#saludPublica').on('blur', () => this.validateCheckBoxGroup('.saludPublicaCheckbox', '#saludPublica-error'));
        $('#saludPrivada').on('blur', () => this.validateCheckBoxGroup('.saludPrivadaCheckbox', '#saludPrivada-error'));

        //TRANSPORTE Y CERCANIA
        $('#gastoPublico').on('blur', () => this.validateNumberFloat('#gastoPublico', '#gastoPublico-error'));
        $('#gastoPrivado').on('blur', () => this.validateNumberFloat('#gastoPrivado', '#gastoPrivado-error'));
        $('#clinicasPublicas').on('blur', () => this.validateNumberInt('#clinicasPublicas', '#clinicasPublicas-error'));
        $('#clinicasPrivadas').on('blur', () => this.validateNumberInt('#clinicasPrivadas', '#clinicasPrivadas-error'));

        //USO Y PERCEPCIÓN DE SERVICIOS
        $('#serviciosUsados').on('blur', () => this.validateCheckBoxGroup('.serviciosUsados', '#serviciosUsados-error'));
        $('#satisfaccionPublica').on('blur', () => this.validateSelector('#satisfaccionPublica', '#satisfaccionPublica-error'));
        $('#satisfaccionPrivada').on('blur', () => this.validateSelector('#satisfaccionPrivada', '#satisfaccionPrivada-error'));

        //ACCESIBILIDAD Y HABITOS
        $('#accesibilidadDistancia').on('blur', () => this.validateSelector('#accesibilidadDistancia', '#accesibilidadDistancia-error'));
        $('#chequeosAnuales').on('blur', () => this.validateSelector('#chequeosAnuales', '#chequeosAnuales-error'));
        $('#consultasOnline').on('blur', () => this.validateSelector('#consultasOnline', '#consultasOnline-error'));

        //DIFICULTADES Y MEJORAS
        $('#razonNoVisita').on('blur', () => this.validateSelector('#razonNoVisita', '#razonNoVisita-error'));
        $('#afiliacionSalud').on('blur', () => this.validateRadioButtonGroup('input[name="afiliacion"]', '#afiliacionSalud-error'));
        $('#seguroGastos').on('blur', () => this.validateRadioButtonGroup('input[name="seguro"]', '#seguroGastos-error'));
        $('#medicamentosDificultad').on('blur', () => this.validateRadioButtonGroup('input[name="medicamentos"]', '#medicamentosDificultad-error'));
        $('#mejoras').on('blur', () => this.validateCheckBoxGroup('.mejorasCheckbox', '#mejoras-error'));

    }

    async convertirMayusculas() {
        const curpInput = document.getElementById('curp');

        curpInput.addEventListener('input', (event) => {
            event.target.value = event.target.value.toUpperCase();
        });
    }

    validateForm() {
        return (
            this.validateCURP() &&
            this.validateEdad() &&
            this.validateSelector('#estado', '#estado-error') &&
            this.validateNumber365('#consultasPublicas', '#consultasPublicas-error') &&
            this.validateNumber365('#consultasPrivadas', '#consultasPrivadas-error') &&
            this.validateCheckBoxGroup('.saludPublicaCheckbox', '#saludPublica-error') &&
            this.validateCheckBoxGroup('.saludPrivadaCheckbox', '#saludPrivada-error') &&
            this.validateNumberInt('#gastoPublico', '#gastoPublico-error') &&
            this.validateNumberInt('#gastoPrivado', '#gastoPrivado-error') &&
            this.validateNumberInt('#clinicasPublicas', '#clinicasPublicas-error') &&
            this.validateNumberInt('#clinicasPrivadas', '#clinicasPrivadas-error') &&
            this.validateCheckBoxGroup('.serviciosUsados', '#serviciosUsados-error') &&
            this.validateSelector('#satisfaccionPublica', '#satisfaccionPublica-error') &&
            this.validateSelector('#satisfaccionPrivada', '#satisfaccionPrivada-error') &&
            this.validateSelector('#accesibilidadDistancia', '#accesibilidadDistancia-error') &&
            this.validateSelector('#chequeosAnuales', '#chequeosAnuales-error') &&
            this.validateSelector('#consultasOnline', '#consultasOnline-error') &&
            this.validateSelector('#razonNoVisita', '#razonNoVisita-error') &&
            this.validateRadioButtonGroup('input[name="afiliacion"]', '#afiliacionSalud-error') &&
            this.validateRadioButtonGroup('input[name="seguro"]', '#seguroGastos-error') &&
            this.validateRadioButtonGroup('input[name="medicamentos"]', '#medicamentosDificultad-error') &&
            this.validateCheckBoxGroup('.mejorasCheckbox', '#mejoras-error')
        );
    }


    submitForm(e) {
        e.preventDefault();

        if (!this.validateForm()) return;

        const peopleData = {
            curp: $('#curp').val(),
            edad: $('#edad').val(),
            estado: this.handleSelect('#estado',estados),
            problemasSalud: this.handleChecked('#publico'),
            mejorServicio: this.handleChecked('#publicoServicio'),
            consultasPublicas: $('#consultasPublicas').val(),
            consultasPrivadas: $('#consultasPrivadas').val(),
            publicoMB: this.handleNegChecked('#publicoMalestares'),
            publicoOQ: this.handleNegChecked('#publicoOperaciones'),
            publicoEV: this.handleNegChecked('#publicoVeneras'),
            publicoEC: this.handleNegChecked('#publicoCronicas'),
            publicoC: this.handleNegChecked('#publicoChequeos'),
            publicoTD: this.handleNegChecked('#publicoDentales'),
            publicoO: this.handleNegChecked('#publicoOtros'),
            privadoMB: this.handleNegChecked('#privadoMalestares'),
            privadoOQ: this.handleNegChecked('#privadoOperaciones'),
            privadoEV: this.handleNegChecked('#privadoVeneras'),
            privadoEC: this.handleNegChecked('#privadoCronicas'),
            privadoC: this.handleNegChecked('#privadoChequeos'),
            privadoTD: this.handleNegChecked('#privadoDentales'),
            privadoO: this.handleNegChecked('#privadoOtros'),
            gastoPublico: $('#gastoPublico').val(),
            gastoPrivado: $('#gastoPrivado').val(),
            clinicasPublicas: $('#clinicasPublicas').val(),
            clinicasPrivadas: $('#clinicasPrivadas').val(),
            IMSS: this.handleNegChecked('#imss'),
            ISSSTE: this.handleNegChecked('#issste'),
            farmaciasSimilares: this.handleNegChecked('#farmaciasSimilares'),
            cruzRoja: this.handleNegChecked('#cruzRoja'),
            hospitalesGenerales: this.handleNegChecked('#hospitalesGenerales'),
            hospitalesPrivados: this.handleNegChecked('#hospitalesPrivados'),
            otrosServicios: this.handleNegChecked('#otrosServicios'),
            satisfaccionPublica: this.handleSelect('#satisfaccionPublica',satisfaccion),
            satisfaccionPrivada: this.handleSelect('#satisfaccionPrivada',satisfaccion),
            accesibilidadDistancia: this.handleSelect('#accesibilidadDistancia',accesibilidad),
            chequeosAnuales: this.handleSelect('#chequeosAnuales',frecuencia),
            consultasOnline: this.handleSelect('#consultasOnline',frecuencia),
            razonNoVisita: this.handleSelect('#razonNoVisita',razones),
            afiliacionSalud: this.handleChecked('#afiliacionSi'),
            seguroGastos: this.handleChecked('#seguroSi'),
            medicamentosDificultad: this.handleChecked('#medicamentosSi'),
            infraestructura: this.handleNegChecked('#mejorarInfraestructura'),
            personal: this.handleNegChecked('#contratarPersonal'),
            costos: this.handleNegChecked('#reducirCostos'),
            disponibilidadMed: this.handleNegChecked('#aumentarMedicamentos'),
            otroMejoras:this.handleNegChecked('#otroMejoras')
        };

        this.saveProduct('./backend/data-add.php', peopleData);
    }

    async saveProduct(url, data) {
        const response = await $.ajax({
          url: url,
          type: 'POST',
          data: JSON.stringify(data),
          contentType: 'application/json'
        });

        console.log(response);
        const result = JSON.parse(response);
        $('#container-r').html(`Status: ${result.status}<br />Message: ${result.message}`);
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    handleSelect(selector, lista) {
        const select = $(selector).val();
        if (select in lista) {
            const selectNumero = lista[select];
            return selectNumero;
        }
    }

    handleChecked(selector) {
        const checked = $(selector).is(':checked');
        return checked ? 0 : 1;
    }

    handleNegChecked(selector) {
        const checked = $(selector).is(':checked');
        return checked ? 1 : 0;
    }


    validateCURP() {
        const curpInput = $('#curp').val();
        const curpPattern = /^([A-Z]{4})(\d{6})([HM]{1})([A-Z]{2})([A-Z]{4})(\d{1})$/i;
        $('#curp-error').hide();
        if (!curpInput || !curpPattern.test(curpInput)) {
            $('#curp-error').text('Ingresa un CURP válido').show();
            return false;
        }
        return true;
    }

    validateEdad() {
        const edadInput = $('#edad').val();
        const edad = parseInt(edadInput, 10);
        $('#edad-error').hide();
        if (!edadInput || isNaN(edad) || edad < 0 || edad > 99) {
            $('#edad-error').text('Ingresa una edad valida').show();
            return false;
        }
        return true;
    }

    validateSelector(selector, errorSelector) {
        const value = $(selector).val();
        $(errorSelector).hide();
        if (value === null) {
            $(errorSelector).text('Selecciona una opción válida').show();
            return false;
        }
        return true;
    }

    validateRadioButtonGroup(selector, errorSelector) {
        const isSelected = $(selector).is(':checked'); // Verifica si alguna opción está seleccionada
        $(errorSelector).hide();

        console.log($(selector).val());

        if (!isSelected) {
            $(errorSelector).text('Selecciona una opción').show();
            return false;
        }
        return true;
    }

    validateNumber365(selector, errorSelector) {
        const numberInput = $(selector).val();
        const number = parseInt(numberInput, 10);
        $(errorSelector).hide();
        if (!numberInput || isNaN(number) || number < 0 || number > 365 || !Number.isInteger(number)) {
            $(errorSelector).text('Ingresa un número válido').show();
            return false;
        }
        return true
    }

    validateNumberInt(selector, errorSelector) {
        const numberInput = $(selector).val();
        const number = parseInt(numberInput, 10);

        $(errorSelector).hide();
        if (!numberInput || number < 0 || !Number.isInteger(number)) {
            $(errorSelector).text('Ingresa un número válido').show();
            return false;
        }
        return true
    }

    validateNumberFloat(selector, errorSelector) {
        let numberInput = $(selector).val();
        $(errorSelector).hide();

        if (!numberInput || isNaN(numberInput) || numberInput < 0) {
            $(errorSelector).text('Ingresa un número válido').show();
            return false;
        }
        return true
    }

    validateCheckBoxGroup(selector, errorSelector) {
        const isSelected = $(`${selector}:checked`).length > 0; // Verifica si hay al menos un checkbox marcado
        $(errorSelector).hide();

        if (!isSelected) {
            $(errorSelector).text('Selecciona al menos una opción').show();
            return false;
        }
        return true;
    }
}

// Inicializar app
$(document).ready(() => {
    new app();
});