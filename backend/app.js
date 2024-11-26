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
            this.validateSelector('#estado','#estado-error') &&
            this.validateNumber365('#consultasPublicas','#consultasPublicas-error') &&
            this.validateNumber365('#consultasPrivadas','#consultasPrivadas-error') &&
            this.validateCheckBoxGroup('.saludPublicaCheckbox', '#saludPublica-error') &&
            this.validateCheckBoxGroup('.saludPrivadaCheckbox', '#saludPrivada-error') &&
            this.validateNumberInt('#gastoPublico','#gastoPublico-error') &&
            this.validateNumberInt('#gastoPrivado','#gastoPrivado-error') &&
            this.validateNumberInt('#clinicasPublicas','#clinicasPublicas-error') &&
            this.validateNumberInt('#clinicasPrivadas','#clinicasPrivadas-error') &&
            this.validateCheckBoxGroup('.serviciosUsados', '#serviciosUsados-error') &&
            this.validateSelector('#satisfaccionPublica','#satisfaccionPublica-error') &&
            this.validateSelector('#satisfaccionPrivada','#satisfaccionPrivada-error') &&
            this.validateSelector('#accesibilidadDistancia','#accesibilidadDistancia-error') &&
            this.validateSelector('#chequeosAnuales','#chequeosAnuales-error') &&
            this.validateSelector('#consultasOnline','#consultasOnline-error') &&
            this.validateSelector('#razonNoVisita','#razonNoVisita-error') &&
            this.validateRadioButtonGroup('input[name="afiliacion"]', '#afiliacionSalud-error') &&
            this.validateRadioButtonGroup('input[name="seguro"]', '#seguroGastos-error') &&
            this.validateRadioButtonGroup('input[name="medicamentos"]', '#medicamentosDificultad-error') &&
            this.validateCheckBoxGroup('.mejorasCheckbox', '#mejoras-error')
        );
    }

    
    submitForm(e) {
        e.preventDefault();

        if (!this.validateForm()) return;
        console.log(!this.validateForm());
        
        /*
        const peopleData = {
            id: $('#productId').val(),
            name: $('#name').val(),
            brand: $('#brand').val(),
            model: $('#model').val(),
            price: $('#price').val(),
            details: $('#details').val(),
            units: $('#units').val(),
            image: $('#image').val(),
        };

        this.saveProduct('./backend/product-add.php', peopleData);
        */
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