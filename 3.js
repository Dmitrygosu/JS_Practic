/* Объекты и Массивы
Задание 1 Преобразование массива в объект
function convertArrToObj(arr) {
  const obj = {};
  arr.forEach((value, index) => {
    obj[index] = value;
  });
  return obj;
}

const arr = [1, null, 'test', undefined];
const obj = convertArrToObj(arr);
console.log(obj);  // { 0: 1, 1: null, 2: 'test', 3: undefined }


/*
Задание 2
Подсчет значений массива

function countOccurrences(arr) {
  const occurrences = {};
  arr.forEach((value) => {
    occurrences[value] = (occurrences[value] || 0) + 1;
  });
  return occurrences;
}

const arr = [1, 1, 1, 'test', 'test'];
const result = countOccurrences(arr);
console.log(result);  // { 1: 3, test: 2 }

*/

/*
Задание 3 Подсчет значений массива

function countFromArr(arr) {
  const countObj = {};
  arr.forEach((value) => {
    countObj[value] = (countObj[value] || 0) + 1;
  });
  return countObj;
}
const arr = [1, 1, 1, 'test', 'test'];
const res = countFromArr(arr);
console.log(res);  // { 1: 3, test: 2 }

ожидаемый результат { 1: 3, test: 2 } 
    🤪
