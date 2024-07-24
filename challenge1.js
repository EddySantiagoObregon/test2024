function processList(arr, S) {
    // Filtra y procesa cada número en la lista
    let processedArr = arr.filter(num => num < S); // Elimina los valores null
    
    let reversedArr = [];
    for (let i = processedArr.length - 1; i >= 0; i--) {
        reversedArr.push(processedArr[i]);
    }

    console.log(reversedArr);
}

function processListStr(arr, S) {
    // Filtra y procesa cada número en la lista
    let processedArr = arr.map(num => {
        // Convierte el número a una cadena para procesar cada dígito
        let strNum = num.toString();
        // Filtra los dígitos mayores o iguales a S
        let filteredNum = '';
        for (let char of strNum) {
            console.log("char:", char)
            if (parseInt(char) < S) {
                filteredNum += char;
            }
        }
        // Devuelve el número filtrado como entero o null si está vacío
        return filteredNum ? parseInt(filteredNum) : null;
    }).filter(num => num !== null); // Elimina los valores null

    // Invierte el array procesado
    let reversedArr = [];
    for (let i = processedArr.length - 1; i >= 0; i--) {
        reversedArr.push(processedArr[i]);
    }

    // Imprime el resultado
    console.log(reversedArr);
}


processListStr([1, 2, 3, 4, 5, 6], 8)
processList([10, 20, 30, 40], 8)
processList([6], 8)
processList([66], 8)
processList([65], 8)
processList([6, 2, 1], 8)
processList([60, 6, 5, 4, 3, 2, 7, 7, 29, 1], 8)

