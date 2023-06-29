class MyNumber {
    constructor(value) {
        this.value = value;
    }

    plus(num) {
        return new MyNumber(this.value + num);
    }

    toString() {
        return this.value.toString();
    }
}

const num = new MyNumber(1);
const result = num.plus(2);
console.log(result.toString()); 

//Код использует класс MyNumber, представляющий число, с методом plus для сложения чисел.
//Вызов метода plus возвращает новый экземпляр MyNumber, а метод toString преобразует число в строку.

//Результат выполнения кода: 3 