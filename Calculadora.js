var v1 = 0, v2 = 0, res, texto = "", impri="";
var historial = [];
var operacion = null;

const digitos = (number) => {
    const display = document.getElementById('display');
    const currentValue = display.value;

    if (currentValue === '0' && number !== '.' && !currentValue.includes('.')) {
        display.value = number;
    } else if (number === '.' && !currentValue.includes('.')) {
        display.value += number;
    } else if (number !== '.') {
        display.value += number;
    }
};

const operaciones = (op) => {
    const display = document.getElementById('display');
    const currentValue = display.value;

    if (op === '.') {
        if (!currentValue.includes('.')) {
            display.value += op;
        }
    } else if (op === 'X') {
        display.value = currentValue.slice(0, -1);
    } else if (operacion === null) {
        v1 = Number.parseFloat(currentValue);
        display.value = '';
        operacion = op;
    }
};


const calcular = () => {
    v2 = Number.parseFloat(document.getElementById('display').value);
    if (operacion !== null) {
        switch (operacion) {
            case '+':
                suma();
                break;
            case '-':
                Resta();
                break;
            case '*':
                Mult();
                break;
            case '/':
                divi();
                break;
        }
    }
    operacion = null;
    display.value = res;
};

const suma = () => {
    res = v1 + v2;
    texto = "El resultado de la suma es: " + res;
    guarhistorial(texto);
};

const Resta = () => {
    res = v1 - v2;
    texto = "El resultado de la resta es: " + res;
    guarhistorial(texto);
};

const Mult = () => {
    res = v1 * v2;
    texto = "El resultado de la multiplicacion es: " + res;
    guarhistorial(texto);
};

const divi = () => {
    if (v2 == 0) {
        texto = "No se puede dividir en 0:";
    } else {
        res = v1 / v2;
        texto = "El resultado de la divicion es: " + res;
    }
    guarhistorial(texto);
};

const limpiar = () => {
    v1 = 0;
    v2 = 0;
    res = 0;
    texto = "";
    operacion = null;
    historial = [];
    document.getElementById('historial').innerHTML = "";
    document.getElementById('display').value = '';
};

const eli = () => {
    v1 = 0;
    v2 = 0;
    res = 0;
    texto = "";
    operacion = null;
    document.getElementById('display').value = '';
};

const guarhistorial = (resultado) => {
    historial.push(resultado);
    document.getElementById('historial').innerHTML = historial.join("<br>");
};