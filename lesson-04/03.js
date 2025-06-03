/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
function includesElement(array, element) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === element) return true
    }
    return false
}

function findCommonElements(array1, array2) {
    let commonArray = []
    for (let element of array1) {
        if (includesElement(array2, element) && !includesElement(commonArray, element)) commonArray.push(element)
        else continue
    }
    return commonArray
}

console.log(findCommonElements(['apple', 'banana', 'cherry'], ['banana']))