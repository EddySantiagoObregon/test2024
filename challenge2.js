function sortedSquaredArray(arr, S) {
    const strMaxValue = S.toString() + S.toString();
    const maxVal = parseInt(strMaxValue);

    let squaredArray = [];
    let left = 0;
    let right = arr.length - 1;
    let index = arr.length - 1;

    // Inicializa el array de cuadrados con ceros
    for (let i = 0; i < arr.length; i++) {
        squaredArray.push(0);
    }

    // Usa dos punteros para llenar el array de cuadrados en orden descendente
    while (left <= right) {
        let leftSquared = arr[left] * arr[left];
        let rightSquared = arr[right] * arr[right];

        if (leftSquared > rightSquared) {
            squaredArray[index] = leftSquared;
            left++;
        } else {
            squaredArray[index] = rightSquared;
            right--;
        }
        index--;
    }

    // Filtra los números fuera del rango [0, SS]
    squaredArray = squaredArray.filter(num => num <= maxVal);

    // Imprime el resultado
    console.log(squaredArray);
    return squaredArray;
}

// Ejemplos de prueba
sortedSquaredArray([1, 2, 3, 5, 6, 8, 9], 8); 
sortedSquaredArray([-2, -1], 8); 
sortedSquaredArray([-6, -5, 0, 5, 6], 8); 
sortedSquaredArray([-10, 10], 8);
