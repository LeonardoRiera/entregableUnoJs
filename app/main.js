// Entregable numero uno: ejercicio calculadora

// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}
  
// Función para restar dos números
function restar(a, b) {
    return a - b;
}
  
// Función para multiplicar dos números
function multiplicar(a, b) {
    return a * b;
}

// función para dividir dos números
function dividir(a, b) {
    return a / b;
}
  
// Función principal de la calculadora
function calculadora() {
    const operacion = prompt('Ingrese la operación a realizar (sumar, restar, multiplicar o dividir):');
    const numero1 = parseFloat(prompt('Ingrese el primer número:'));
    const numero2 = parseFloat(prompt('Ingrese el segundo número:'));
  
let resultado;
  
switch (operacion) {
    case 'sumar':
        resultado = sumar(numero1, numero2);
        break;
    case 'restar':
        resultado = restar(numero1, numero2);
        break;
    case 'multiplicar':
        resultado = multiplicar(numero1, numero2);
        break;
    case 'dividir':
        resultado = dividir(numero1, numero2);
        break;    
    default:
        resultado = 'Operación no válida';
        break;
}
  
alert(`El resultado de ${operacion} ${numero1} y ${numero2} es: ${resultado}`);
}
  
// Llamamos a la función calculadora para que inicie la operación
calculadora();