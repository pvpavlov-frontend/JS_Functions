// 0) Создать функцию isWorkingAgePerson, которая будет проверять, трудоспособного ли человек возраста (от 16 до 65). Функция принимает в качестве параметра возраст человека и возвращает значение булевского типа. 
// Ожидаемый вывод:
// isWorkingAgePerson(20); // true
// isWorkingAgePerson(4); // false
// isWorkingAgePerson(88); // false

// const isWorkingAgePerson = function(personAge){
//     return personAge >= 16 && personAge <=65
// }

// console.log("isWorkingAgePerson(20) = ",isWorkingAgePerson(20));
// console.log("isWorkingAgePerson(4) = ",isWorkingAgePerson(4));
// console.log("isWorkingAgePerson(88) = ",isWorkingAgePerson(88));

// 1) *Функция, которая запрашивает число и проверяет, простое ли оно (простое число делиться без остатка на себя и на единицу).


/*****  BEGIN Решето Эратосфена *****/
    // function getPrimes(num) {
    //     const seive = [];
    //     const primes = [];
        
    //     for (let i = 2; i <= num; i++) {
    //     if (!seive[i]) {
    //         primes.push(i);
    //         for (let j = i * i; j <= num; j += i) {
    //         seive[j] = true;
    //         } 
    //     }
    //     }
    //     return primes;
    // }
/*****  END Решето Эратосфена *****/

// получает число и проверяет, простое ли оно
    // function isPrime(maxNum) {

    //     for (let i = 2, max = Math.sqrt(maxNum); i <= max; i++) {
    //     if (maxNum % i === 0) {
    //         return false;
    //     }    
    //     }
    //     return maxNum > 1;
    // }

// запрашивает число у пользователя до которого вывести все простые числа, 
// в цикле проверяет чило простое ли оно, 
// если да то добавляет его в массив и возвращает результирующий массив

//   const getPrimesFor = function() {
//     const maxNum = prompt('Введите число до которого вывести все простые числа', '');
//     const primes = [];
    
//     for (let i = 2; i <= maxNum; i++) {
//       if (isPrime(i)) {
//         primes.push(i);
//       }
//     }
//     return primes;
//   }
  
//   console.log(getPrimesFor());


// 2) Создать функцию checkMultiplicity, которая принимает два числа и проверяет, делится ли первое на второе нацело:
// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

// const checkMultiplicity = function(a, b){
//     const rest = a % b;
//     if(rest === 0) {
//         console.log("Делится без остатка");
//         return true;
//     } else {
//         console.log("Делится c остатком = ", rest);
//         return false; 
//     }
// }
// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

// 3) Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true, если треугольник возможен, и false, если нет.

// const trianglePossibilities = function(a, b, c) {
//     a + b > c && a + c > b && b + c > a ? console.log("Треугольник существует") : console.log("Треугольник не существует")
// }

// trianglePossibilities( 4, 5, 8)

// 4) Написать функции расчета площадей (или поверхности) следующих фигур/тел: треугольника, прямоугольника (или конуса, параллелепипеда) в зависимости от переданных размеров фигур. Функция должна возвращать вычисленное значение.

/**
 * @param {number} x - ширина
 * @param {number} y - длина прямоугольника
 * @description Функция для нахождения площади прямоугольника
 */
const calculateRectangleArea = (x, y) => x * y ;

/**
 * @param {number} x - катет треугольника
 * @param {number} y - катет треугольника
 * @description Функция для нахождения площади прямоугольного треугольника
 */
const calculateTriangleArea = (x, y) => x * y / 2 ;

/**
 * @param {number} x - радиус круга
 * @description Функция для нахождения площади круга
 */
const calculateCircleArea = (x) => Math.round(Math.PI * x * x)  ;

console.log("Площадь прямоугольника =", calculateRectangleArea( 7, 3));
console.log("Площадь прямоугольного треугольника =", calculateTriangleArea(10, 5));
console.log("Площадь круга =", calculateCircleArea(10));


// Будет плюсом использовать JSDoc (на выбор 2 функции).

// (2 функции на выбор реализовать в формате функционального выражения)