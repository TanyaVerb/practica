//Метод Math.random
//Метод Math.random возвращает случайное дробное число от 0 до 1

function getRandomArbitary(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomArbitary(3, 10)); //3.1815599049649252

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(3, 10)); //9

//Метод Math.ceil
//Метод Math.ceil производит округление дробного числа до целого всегда в большую сторону

//Округлим число 3.00001 в большую сторону:

console.log(Math.ceil(3.00001)); //4

//Метод Math.round
//Метод Math.round выполняет округление до ближайшего целого числа по правилам математического округления.

//Округлим до целых число :

console.log(Math.round(6.4)); //6
console.log(Math.round(6.6)); //7
console.log(Math.round(6.5)); //7
console.log(Math.round(6.49999)); //6

//Метод Math.flor
//Метод Math.floor производит округление числа до целых всегда в меньшую сторону.

//Округлим число 2.9999 в меньшую сторону:

console.log(Math.floor(2.9999)); //2

//Метод toFixed
//производит округление числа до указанного знака в дробной части. Количество знаков указывается параметром. Если число знаков не указано, то по умолчанию берется 0 знаков, то есть округление до целого числа.
let num = 1.1111;
console.log(num.toFixed(3)); //1.111

let num1 = 1.1119;
console.log(num.toFixed(3)); //1.112

let num2 = 1.111;
console.log(num.toFixed()); //1

let num3 = 1.1111;
console.log(num.toFixed(6)); //1.111100

//Метод Math.pow
//возводит число в заданную степень. Первым параметром передается число, вторым - в какую степень его возвести.

//Math.pow(число, степень);
console.log(Math.pow(3, 4)); //81

console.log(Math.pow(2, -5)); //0.03125

console.log(3 ** 4); //81

//Метод Math.max возвращает максимальное число из группы чисел, переданных в функцию. Если в функцию ничего не передано, то будет возращено -Infinity.

//Math.max(число, число, число...);
console.log(Math.max(1, 5, 10, 34, 100)); //100

console.log(Math.max(-1, 0, -20, -56, -100)); //0

console.log(Math.max()); //-Infinity

let arr = [1, 5, 10, 34, 100];
let max = Math.max(...arr);

console.log(max); //100

//Метод Math.min возвращает минимальное число из группы чисел, переданных параметрами. Если параметрами ничего не передано, то будет возращено Infinity.

console.log(Math.min(40, 20, 42, 100, 67)); //20

console.log(Math.min(-1, -100, -30, -25, 40)); //-100
console.log(Math.min()); //Infinity

let arr2 = [1, 2, 3, 4, 5];
let max2 = Math.max(...arr2);
console.log(max2); //5
let arr3 = [1, 2, 3, 4, 5, 6, 7, 10];
let max3 = Math.min(...arr3);
console.log(max3); //1

//Конструкция Array создает массив из указанных в параметре элементов, которые перечисляются через запятую.
//let массив = new Array(элементы массива через запятую);
//let массив = [элементы массива через запятую];

let arr_ = new Array(1, 2, 3, 4);
console.log(arr_); //[1,2,3,4]

let arr__ = new Array("a", "b", "c", "d");
console.log(arr__); //(4) ['a', 'b', 'c', 'd']

let arrayS = "hhhh";
let arrayS1 = new Array(arrayS);
console.log(arrayS1);

let obj = {
  name: "jjj",
  age: 22,
};
let obj2 = {
  name: "jjj",
  age: 22,
};
let arrayS2 = new Array(obj, obj2);
console.log(arrayS2);

let str = "ab cd cd cd ef";
let res = str.indexOf("cd");

console.log(res);

let str_ = "ab cd cd cd ef";
let res_ = str.indexOf("CD");

console.log(res_); //-1

//Метод padEnd дополняет конец текущей строки до достижения длины, заданной в первом параметре. Вторым необязательным параметром указывается строка, которой мы хотим заполнить текущую.

let res1 = "abc".padEnd(5, "defg");
console.log(res1); //'abcde'

let res3 = "abcde".padEnd(1);
console.log(res3); //'abcde'-вернется вся строка

//Метод padStart дополняет начало текущей строки другой строкой (при необходимости несколько раз) до заданной длины. Первым параметром в методе указываем желаемую длину строки, а вторым необязательным - строку, которой она будет заполнена.
//строка.padStart(длина строки, [строка для заполнения]);

let res4 = "ab".padStart(4);
console.log(res4);
("  ab");

// в первый параметр метода зададим число, которое меньше длины строки:В результате выполнения кода вернется вся строка:
let res5 = "ab".padStart("1");
console.log(res5); //("ab");

//Метод replace осуществляет поиск и замену частей строки. Первым параметром принимается регулярное выражение, а вторым - подстрока, на которую заменяем.
let str6 = "bababa";
let res6 = str6.replace(/a/g, "!");

console.log(res6); //'b!b!b!'
//___________________________________________________________
const words = [
  "apple",
  "banananananana",
  "kiwi",
  "орех",
  "абрикосина",
  "груша",
];

function findMinWord(words) {
  return words.reduce((min, word) =>
    min.localeCompare(word) < 0 ? min : word
  );
}

function findMaxWord(words) {
  return words.reduce((max, word) =>
    max.localeCompare(word) > 0 ? max : word
  );
}

//Если результат сравнения строки "max" с строкой "word" с использованием метода localeCompare() больше нуля, то вернуть строку "max", иначе вернуть строку "word".

console.log(findMinWord(words)); // абрикос
console.log(findMaxWord(words)); // kiwi
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const words = ["apple", "banana", "kiwi", "орех", "абрикос", "груша"];

// function findMinWord(words) {
//   return words.reduce((min, word) => {
//     if (min.localeCompare(word) < 0) {
//       return min;
//     } else {
//       return word;
//     }
//   });
// }

// function findMaxWord(words) {
//   return words.reduce((max, word) => {
//     if (max.localeCompare(word) > 0) {
//       return max;
//     } else {
//       return word;
//     }
//   });
// }

// console.log(findMinWord(words)); // абрикос
// console.log(findMaxWord(words)); // kiwi

//__________________________________________________________
function findMinWord(words) {
  return words.reduce(
    (min, word) => (word.localeCompare(min) < 0 ? word : min),
    words[0]
  );
}

function findMaxWord(words) {
  return words.reduce(
    (max, word) => (word.localeCompare(max) > 0 ? word : max),
    words[0]
  );
}

const words1 = ["яблоко", "груша", "апельсин", "абрикос", "банан"];

const animals = ["elephant", "Dog", "CAT", "cow", "horse", "Bird"];
const animals2 = ["elephant", "Собака", "CAT", "cow", "horse", "Bird"];

console.log(findMinWord(words1)); // абрикос
console.log(findMaxWord(words1)); // груша
console.log(findMinWord(animals)); // Bird
console.log(findMaxWord(animals)); // horse
console.log(findMinWord(animals2)); // Собака
console.log(findMaxWord(animals2)); // horse

///неверное решение+++++++++++++++++++++++++++++++++++
// function findMaxWord(words) {
//   const sorted = words.sort((a, b) => a.localeCompare(b));
//   console.log(sorted);
//   return sorted.at(-1);
// }

// console.log(findMaxWord(animals));
// console.log(findMaxWord(animals2));

// function findMinWord(words) {
//   const sorted = words.sort((a, b) => b.localeCompare(a));
//   console.log(sorted);
//   return sorted.at(-1);
// }

// console.log(findMinWord(animals));
// console.log(findMinWord(animals2));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let dog = "Собака";
let bird = "Bird";
let elephant = "elephant";
let horse = "horse";
let cow = "cow";

console.log(dog.localeCompare(bird));
console.log(elephant.localeCompare(dog));
console.log(horse.localeCompare(elephant));
console.log(dog.localeCompare(cow));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let num10 = 5.565;
console.log(num10.toFixed(2));

//Задача (если число, то добавить в массив)

let arrayNum = ["11", 11, "22", 22, "33", 33, 33];

function addNumber(arr) {
  let numArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Number.isFinite(arr[i])) {
      numArray.push(arr[i]);
    }
  }
  return numArray;
}
let result = addNumber(arrayNum);
console.log(result); //(3) [11, 22, 33, 33]
//+++++++++++++++++++++++++++++++++++++++++++

function filterNumbers(arr) {
  let numbersArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Number.isFinite(arr[i]) && !numbersArray.includes(arr[i])) {
      numbersArray.push(arr[i]);
    }
  }

  return numbersArray;
}

let array = [1, "hello", 5, "world", 10, 10, true, 12.5];
let result2 = filterNumbers(array);
console.log(result2); // [1, 5, 10, 12.5]
//_____________________________________________________

const price = "1000$";
console.log(parseInt(price)); //1000
const price2 = "1000.075$";
console.log(parseFloat(price2)); //1000.075

//_____________________________________________________

let array_ = ["Стол", "Стул", "Шкаф"];

console.log(array_[0]);

array_[0] = "Стул";
array_[3] = "Стол";
console.log(array_); //(4) ['Стул', 'Стул', 'Шкаф', 'Стол']
console.log(array_.length);
console.log(array_[array_.length - 1]); //Стол
console.log(array_.at(-2)); //Шкаф

let array_a = ["Стол", "Стул", "Шкаф"];
array_a.push("Кресло", "Стол");
array_a.unshift("Кресло", "Стол");
console.log(array_a.pop()); //Стол- удаляет последний элемент массива
console.log(array_a);
let result_ = array_a.shift(); //удаляет первый элемент и возвращает его
console.log(result_); //Кресло
// _____________________________________________
let array_b = ["Стол", "Стул", "Шкаф"];

//Первый вариант перебора массива
for (let i = 0; i < array_b.length; i++) {
  console.log(array_b[i]); // получаем значение каждого элемента
  console.log(array_b[i] + "nnnnn"); //Столnnnnn  Стулnnnnn  Шкафnnnnn
}

// Второй вариант перебора массива (нет доступа к индексу элемента массива)
for (let arrayItem of array_b) {
  console.log(arrayItem); // Стол   Стул  Шкаф
}

array_b[100] = "Текст";
console.log(array_b); //(101) ['Стол', 'Стул', 'Шкаф', empty × 97, 'Текст']
console.log(array_b.length); //101

let a = [];
let b = [];

console.log(a === b); //false
console.log(Object.is(a, b)); //false - два пустых массива (объекта) имеют разные ячейки памяти

let e = a; //в переменной лежит ссылка на один и тот же объект
console.log(a === e); //true

//массивы-это объекты. Все правила, которые работают с объектами также работают с массивами
let c = {
  0: "Стол",
  1: "Стул",
  2: "Шкаф",
};

let d = ["Стол", "Стул", "Шкаф"];
console.log(d[0]); //Стол
console.log(c[0]); //Стол

d.length = 1; //обрезаем массив
console.log(d); //['Стол']

let f = ["Яблоко", true, ["Яблоко 2", "nnn"]];
console.log(f[2][1]); //nnn
//______________________________________________
let l = ["Яблоко", "Груша"];
console.log(String(l)); //Яблоко,Груша- получается строка

//array.push()-добавляем элемент в конец списка
//array.unshift()-добавляем элемент в начало списка
//array.pop()- Удаляем последний элемент списка
//array.shift()-Удаляем первый элемент списка

const arrB = [1, 2, 3, 4, 5];
// delete arrB[2];
console.log(arrB); //(5) [1, 2, empty, 4, 5]- элемент удалится, но длина массива останется неизменной

//Метод splice-удаление элемента(индекс элемента, количество элементов,кот.надо удалить,элементы кот.хотим добавить вместо удаленных),может работать с отрицательными значениями
// console.log(arrB.splice(2, 1)); //[3]
// console.log(arrB); //(4) [1, 2, 4, 5]

console.log(arrB.splice(2, 1, 10, 11)); //[3]
console.log(arrB); //(6) [1, 2, 10, 11, 4, 5]

console.log(arrB.splice(2, 0, 10, 11)); //добавляем элементы без удаления, после 2ой позиции

const arrC = [1, 2, 3, 4, 5];
console.log(arrC.splice(-1, 1, 10, 11));
[5];
console.log(arrC); //(6) [1, 2, 3, 4, 10, 11]

// метод slice при удалении возвращает новый массив на основе старого

const newArray = arrC.slice();
console.log(newArray); //вернет новый массив на основе старого
console.log(newArray === arrC); //false
const newArray2 = arrC.slice(1, 4);
console.log(newArray2); //(3) [2, 3, 4]
const newArray3 = arrC.slice(-2);
console.log(newArray3); //(2) [10, 11]- скопированы два последних элемента
//_______________________________________________________________
//Метод concat сливает указанные массивы в один общий массив. Метод применяется к одному из массивов, а в параметрах метода передаются остальные массивы для слияния. При этом метод не изменяет исходный массив, а возвращает новый.
const arr1 = [1, 2, 3, 4, 5];
const arr_2 = [6, 7];
const arr_3 = [8, 9];

const newArray_1 = arr1.concat(arr_2, arr_3, 10, 11);
console.log(newArray_1); //(11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// ____________________________________________________________
//Метод перебора массива "ForEach"
//Метод forEach позволяет последовательно перебрать все элементы массива. Метод в параметре получает функцию, которая выполнится для каждого элемента массива. Возвращать из этого метода перебора массива мы не можем.

//В эту функцию можно передавать три параметра. Если эти параметры есть (они не обязательны), то в первый автоматически попадет элемент массива, во второй попадет его номер в массиве (индекс), а в третий - сам массив.

const arr11 = ["a", "b", "c", "d", "e", "c"];
arr11.forEach((item, index, ar) => {
  console.log(item, index, ar);
});
//вывод в консоль:
//a 0 (5) ['a', 'b', 'c', 'd', 'e']
//b 1 (5) ['a', 'b', 'c', 'd', 'e']
//c 2 (5) ['a', 'b', 'c', 'd', 'e']
//d 3 (5) ['a', 'b', 'c', 'd', 'e']
//e 4 (5) ['a', 'b', 'c', 'd', 'e']
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

const resultA = arr11.indexOf("c");
console.log(resultA); //2 - выводит только первое совпадение
const resultA2 = arr11.indexOf("c");
console.log(resultA); //-1- элемента не существует

if (resultA !== -1) {
  console.log(arr11[resultA]); //c
}

const resultA3 = arr11.lastIndexOf("c");
console.log(resultA3); //5

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Метод includes
//Метод includes проверяет наличие элемента в массиве. Параметром принимает значение для поиска. Если такой элемент есть в массиве, то метод возвращает true, а если нет, то false.

const resultA4 = arr11.includes("c");
console.log(resultA4); //true
const resultA5 = arr11.includes("gc");
console.log(resultA5); //false

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const arr12 = [
  { name: "Vasia", id: 1 },
  { name: "Kolya", id: 2 },
  { name: "Vitalik", id: 3 },
];

const result12 = arr12.findIndex((item) => item.id === 3);
console.log(result12); //2 -получаем индекс элемента
console.log(arr12[result12]); //{name: 'Vitalik', id: 3}получаем объект

//если укажем значение, которого нет(item.id === 5), то получим -1
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Метод find
//  помогает найти ПЕРВЫЙ элемент в массиве согласно переданному в параметре коллбэку. Если элемента нет, то возвращается undefined.

const result13 = arr12.find((item) => item.id === 3);
console.log(result13); //{name: 'Vitalik', id: 3}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Метод filter позволяется отфильтровать элементы массива, оставив только подходящие под определенное условие элементы. Метод в параметре получает функцию, которая выполнится для каждого элемента массива. Своим результатом метод возвращает новый массив, в который войдут только те элементы, для которых переданная функции вернет true.

// В функцию можно передавать три параметра. Если эти параметры есть (они не обязательны), то в первый автоматически попадет элемент массива, во второй попадет его номер в массиве (индекс), а в третий - сам массив.
const arr13 = [
  { name: "Vasia", id: 1 },
  { name: "Kolya", id: 2 },
  { name: "Vitalik", id: 3 },
];

const result14 = arr13.filter((item) => item.id > 1);
console.log(result14); //- получился новый массив с выбранными элементами :{name: 'Kolya', id: 2}
//           {name: 'Vitalik', id: 3}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Изменение (преобразование) элементов массива

// Метод map позволяет применить заданную функцию для каждого элемента массива. При этом метод не изменяет исходный массив, а возвращает измененный.

//Метод в параметре получает функцию, которая выполнится для каждого элемента массива. То, что вернет эта функция через return для элемента массива, станет новым значением этого элемента.

//В функцию можно передавать 3 параметра. Если эти параметры есть (они не обязательны), то в первый автоматически попадет элемент массива, во второй попадет его номер в массиве (индекс), а в третий - сам массив.

const arr14 = [1, 2, 3, 4, 5, 6, 7];
const result15 = arr14.map((item) => item * 2);
console.log(result15); //(7) [2, 4, 6, 8, 10, 12, 14]
// _____________________________________________________

// Сортировка элементов массива
//Метод sort
//производит сортировку массива в лексикографическом порядке и возвращает уже измененный массив. Необязательным параметром можно указать собственную функцию для сортировки.

const arr15 = [1, 2, 11, 4, 32, 6, 7, 44];
const result16 = arr15.sort();
console.log(result16); //(8) [1, 11, 2, 32, 4, 44, 6, 7]- сортирует как строки
const arr16 = [1, 2, 11, 4, 32, 6, 7, 44];
const result17 = arr16.sort((a, b) => a - b);
console.log(result17); //(8) [1, 2, 4, 6, 7, 11, 32, 44]
const result18 = arr16.sort((a, b) => b - a);
//если бы был объект в качестве элемента массива, то
//const result18 = arr16.sort((a, b) => b.id - a.id);
console.log(result18); //(8) [44, 32, 11, 7, 6, 4, 2, 1]

// _________________________________________________________
//Метод reverse()-создает новый массив с элементами в обратном порядке
const arr17 = [1, 2, 11, 4, 32, 6, 7, 44];
const result19 = arr17.reverse();
console.log(result19); //[44, 7, 6, 32, 4, 11, 2, 1]

//Преобразование массива в строку (и наоборот)
const stringResult = arr17.join();
console.log(stringResult); //44,7,6,32,4,11,2,1
const stringResult1 = arr17.join("+");
console.log(stringResult1); //44+7+6+32+4+11+2+1

//Метод split
// разбивает строки в массив по указанному в первом параметре разделителю. Если он не задан - вернется вся строка. Если он задан как пустые кавычки, то каждый символ строки попадет в отдельный элемент массива. Вторым необязательным параметром можно указать максимальное количество элементов в получившемся массиве.

let result20 = stringResult1
  .split("+")
  .map((item) => Number(item))
  .filter((item) => item > 10);
console.log(result20); //(8) ['44', '7', '6', '32', '4', '11', '2', '1'],
//с помощью map преобразует в массив чисел[44, 7, 6, 32, 4, 11, 2, 1]
//с помощью filter (3) [44, 32, 11]
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Метод для суммирования значений элементов массива

//Метод reduce
//сворачивает массив к одному значению (редуцирует). К примеру, с помощью этого метода можно легко найти сумму элементов массива (то есть массив сведется к одному значению - к сумме элементов).

//Первым параметром метод reduce получает функцию, которая последовательно выполнится для каждого элемента массива, начиная с первого. В эту функцию можно передавать 4 параметра. Если эти параметры есть (они не обязательны), то в первый автоматически попадет промежуточный результат, во второй попадет элемент массива, в третий - его номер в массиве (индекс), а в четвертый - сам массив.

//Промежуточный результат - это переменная, в которой будет накапливаться то значение, которое вернет метод reduce, когда переберет все элементы массива. К примеру, туда последовательно можно накапливать сумму элементов массива: сначала положить первый элемент, при следующем проходе цикла уже сумму первого элемента и второго, при следующем проходе - сумму первого, второго и третьего. И так, пока массив не закончится. Функция, которую принимает reduce, должна возвращать новое значение промежуточного результата.

//Вторым параметром метода reduce указывается начальное значение промежуточного результата. Если его не указать, то оно будет равно первому элементу массива, а обработка элементов начнется со второго элемента.

const arr18 = [1, 2, 11, 4, 32, 6, 7, 44];
const arr19 = {};

const result21 = arr18.reduce((acc, item, index, arr) => {
  return acc + item;
}, 0);
console.log(result21); //107

// ________________________________________________________
console.log(typeof arr18); //object
console.log(Array.isArray(arr18)); //true
console.log(Array.isArray(arr19)); //false
// ____________________________________________________________
//Метод some
// проверяет элементы массива в соответствии с переданной функцией. Эта функция передается параметром метода и выполняется для каждого элемента массива. Метод возвращает true, если хотя бы для одного элемента массива переданная функция вернет true, в противном случае метод возвращает false.

//В функцию можно передавать три параметра. Если эти параметры есть (они не обязательны), то в первый автоматически попадет элемент массива, во второй попадет его номер в массиве (индекс), а в третий - сам массив.

//Задача
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Alice" },
  { id: 1, name: "John" }, // Повторяющийся пользователь
  { id: 4, name: "Bob" },
];

// Функция для удаления дубликатов по идентификатору
function removeDuplicates(users) {
  let uniqueUsers = [];
  users.forEach((user) => {
    // Проверяем, есть ли пользователь с таким же идентификатором в массиве uniqueUsers
    let duplicate = uniqueUsers.some((u) => Object.is(u.id, user.id));
    // Если пользователь уникальный, добавляем его в массив uniqueUsers
    if (!duplicate) {
      uniqueUsers.push(user);
    }
  });
  return uniqueUsers;
}

// Удаление дубликатов
let uniqueUsers = removeDuplicates(users);
// Вывод уникальных пользователей
console.log(uniqueUsers); //(4) [{…}, {…}, {…}, {…}]

//_____________________________________________________________
//Метод Object.assign
// копирует свойства и значения исходного объекта, возвращая при этом новый объект. В первом параметре метода мы задаем целевой объект, в который копируем, а во втором - указываем объекты, которые нужно скопировать.

function updateObject(obj, key, value) {
  let originalObject = Object.assign({}, obj); // Создаем копию исходного объекта
  obj[key] = value; // Обновляем объект
  // Проверяем, изменился ли объект с помощью Object.is()
  let hasChanged = !Object.is(obj, originalObject); //(obj не равен originalObject)
  return hasChanged;
}

// Исходный объект
let obj1 = { key: "value" };

// Обновляем объект
let result00 = updateObject(obj1, "key", "new value");

console.log(result00); //true- значит объект изменился
console.log(obj1); //{key: 'new value'}

// ___________________________________________________________
//Метод Object.keys
//возвращает массив из свойств объекта (ключей) в том же порядке, как и при перечислении через цикл.

let obj3 = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj3)); //['a', 'b', 'c']
// _____________________________________________________________________
//Также с помощью метода Object.keys можно получить позиции элементов массива:

let arr22 = ["a", "b", "c", "d"];
console.log(Object.keys(arr22)); //['0', '1', '2', '3']

// _________________________________________________________________________
//Метод Object.values возвращает массив из значений объекта в том же порядке, как и при перечислении через цикл.

let obj4 = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj4)); //[1, 2, 3]
// ______________________________________________________________________
//Задача
//Предположим, у вас есть два объекта person1 и person2, представляющих людей.
//Необходимо проверить, ссылаются ли они на один и тот же объект, или они содержат одинаковые данные.

// Объекты для сравнения
let person1 = { name: "Alice", age: 30 };
let person2 = { name: "Alice", age: 30 };

// Проверяем их на равенство с помощью Object.is()
let isEqual = Object.is(person1, person2);

// Выводим результат
if (isEqual) {
  console.log("Объекты равны (ссылаются на один и тот же объект)");
} else {
  console.log(
    "Объекты не равны (содержат одинаковые данные, но разные объекты)"
  );
}
//Объекты не равны (содержат одинаковые данные, но разные объекты)

let person3 = { name: "Alice", age: 30 };
let person4 = person3;

function checkIsEqual(obj1, obj2) {
  let isEqual = Object.is(obj1, obj2);
  if (isEqual) {
    console.log("Объекты равны (ссылаются на один и тот же объект)");
  } else {
    console.log(
      "Объекты не равны (содержат одинаковые данные, но разные объекты)"
    );
  }
  return isEqual;
}

console.log(checkIsEqual(person3, person4)); //true
//Объекты равны (ссылаются на один и тот же объект)

//__________________________________________________________________
//ЗАДАЧА: Анализ пользовательского ввода
//Предположим, что у вас есть форма, в которую пользователь вводит свой возраст.
//Вам нужно проверить, является ли введенное значение числом, и если да, вывести сообщение об этом

// Получаем пользовательский ввод
let userInput = prompt("Введите свой возраст:");
// Преобразуем введенное значение в число с помощью parseFloat() и parseInt()
let parsedFloat = parseFloat(userInput);
let parsedInt = parseInt(userInput);
// Проверяем, является ли введенное значение числом
if (!isNaN(parsedFloat) && !isNaN(parsedInt)) {
  // Если оба преобразования успешны, выводим сообщение об успешном вводе
  console.log("Вы ввели числовое значение: " + parsedFloat);
} else {
  // Если хотя бы одно преобразование не удалось, выводим сообщение об ошибке
  console.log("Ошибка! Введенное значение не является числом.");
}
