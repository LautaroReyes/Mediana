function calcularMediana(numeros) {
    numeros.sort(function (a, b) {
        return a - b;
    });

    let mediana;
    if (numeros.length % 2 != 0) {
        mediana = Math.floor(numeros.length / 2);
        mediana = numeros[mediana] * 2;
    } else if (numeros.length % 2 == 0) {
        mediana = Math.floor(numeros.length / 2);
        mediana = ((numeros[mediana] + numeros[mediana - 1]) / 2) * 2;
    }

    return mediana;
}

let numerosInput = prompt("Ingrese los números separados por espacios");
let numeros = numerosInput.split(" ").map(function (numero) {
    return parseInt(numero);
});

let medianaFinal = calcularMediana(numeros);

document.write("La mediana es: " + medianaFinal);
