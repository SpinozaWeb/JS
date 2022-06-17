/*1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1*/

for (var i = 1; i <= 10; i++) {
    console.log(Math.pow(2, i));
}

/*1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2*/

function mathPow1(m) {
    console.log(Math.pow(2, m));
}

function mathPow2(m) {
    for (var i = 1; i <= m; i++) {
        console.log(Math.pow(2, i));
    }
}

/*2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)*/
let str = "";
for (var i = 1; i <= 5; i++) {
    console.log(str += ":)");
}


/*2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows)*/
function printSmile(stroka, numberOfRows) {
    let str = "";
    for (var i = 1; i <= numberOfRows; i++) {
        console.log(str += stroka);
    }
}


/*3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных,
 и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв

Проверки: 'case', 'Case', 'Check-list'*/

function getWordStructure(word) {
    word = word.replace('-','');
    word = word.replace("'",'');  // знаю что можно обойтись 1 регуляркой - не дружу я с ними ночью)

    let vowel_list = 'aeiouAEIOU';
    let vcount = 0;
    let hcount = 0;

    for (var x = 0; x < word.length; x++) {
        if (vowel_list.indexOf(word[x]) !== -1) {
            vcount += 1;
        } else {
            hcount += 1;

        }

    }
    console.log("слово " + word + " состоит из " + vcount + " гласных и " + hcount + " согласных букв");
}

getWordStructure("Check-list's");

/*4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)

Проверки: 'abba', 'Abba'*/

function isPalindrom(word) {
    if (word == word.split('').reverse().join('')) {
        console.log(word + ' is palindrome.');
    }
    else {
        console.log(word + ' is not palindrome.');
    }
}



