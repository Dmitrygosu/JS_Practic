/*Задание 3: Функция суммирования аргументов*/
function count(num) {
    let sum = num || 0;

    function innerCount(nextNum) {
        if (typeof nextNum === "number") {
            sum += nextNum;
        }
        return innerCount;
    }

    innerCount.valueOf = function () {
        return sum;
    };

    return innerCount;
}



/*Пример использования:*/
console.log(count(3)(2)(1)(5)(7).toString()); // 18
console.log(count(3)(null)(1)('asad')().toString()) // 4
