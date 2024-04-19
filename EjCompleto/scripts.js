function comprobarNumeroPerfecto() {
    const numero = parseInt(document.getElementById("numeroPerfectoInput").value);
    if (isNaN(numero) || numero <= 0) {
        document.getElementById("resultadoNumeroPerfecto").innerHTML = '<div class="alert alert-danger" role="alert">Por favor ingrese un número válido mayor que cero.</div>';
        return;
    }

    if (esNumeroPerfecto(numero)) {
        document.getElementById("resultadoNumeroPerfecto").innerHTML = '<div class="alert alert-success" role="alert">¡El número es perfecto!</div>';
    } else {
        document.getElementById("resultadoNumeroPerfecto").innerHTML = '<div class="alert alert-danger" role="alert">El número no es perfecto.</div>';
    }
}

function esNumeroPerfecto(numero) {
    let sumaDivisores = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    return sumaDivisores === numero;
}

function mostrarNumerosCatalan() {
    const cantidad = parseInt(document.getElementById("cantidadCatalanInput").value);
    if (isNaN(cantidad) || cantidad <= 0) {
        document.getElementById("resultadoCatalan").innerHTML = '<div class="alert alert-danger" role="alert">Por favor ingrese un número válido mayor que cero.</div>';
        return;
    }

    let numerosCatalan = [];
    for (let i = 0; i < cantidad; i++) {
        numerosCatalan.push(numeroCatalan(i));
    }

    document.getElementById("resultadoCatalan").innerHTML = `
      <div class="alert alert-success" role="alert">
        Los primeros ${cantidad} números de Catalan son: ${numerosCatalan.join(', ')}
      </div>
    `;
}

function numeroCatalan(n) {
    return calcularFactorial(2 * n) / (calcularFactorial(n + 1) * calcularFactorial(n));
}

function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

function calcularSumaComprobacion() {
    const palabra = document.getElementById("palabraInput").value.toUpperCase();
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let suma = 0;

    for (let i = 0; i < palabra.length; i++) {
        const letra = palabra[i];
        const indice = letras.indexOf(letra);
        if (indice !== -1) {
            suma += (indice + 1) * (i + 1);
        }
    }

    document.getElementById("resultadoSumaComprobacion").innerHTML = `
      <div class="alert alert-success" role="alert">
        La suma de comprobación de la palabra "${palabra}" es: ${suma}
      </div>
    `;
}
