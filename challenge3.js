function nonConstructibleChange(coins) {
    // Ordena las monedas en orden ascendente
    coins.sort((a, b) => a - b);

    let currentChange = 0;

    console.log(coins)
    // Itera sobre cada moneda
    for (let coin of coins) {
        // Si la moneda actual es mayor que el cambio actual + 1, no podemos crear currentChange + 1
        if (coin > currentChange + 1) {
            return currentChange + 1;
        }
        // De lo contrario, añade la moneda al cambio actual
        currentChange += coin;
    }

    // Si hemos recorrido todas las monedas, el cambio que no podemos crear es currentChange + 1
    return currentChange + 1;
}

// Ejemplos de prueba
console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])); // 20
console.log(nonConstructibleChange([1, 1, 1, 1, 1])); // 6
console.log(nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100])); // 55