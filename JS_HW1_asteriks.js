// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

function checkAge1(age) {
    if (age < 18) {
        console.log("You don’t have access cause your age is " + age + " It’s less then 18");
    } else if (age >= 18 && age < 60) {
        console.log("Welcome !");
    } else if (age > 60) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
}
checkAge1(17);
checkAge1(18);
checkAge1(61);


// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

const checkAge2 = function (age) {
    if (typeof (age) != "number") {
        return console.log("Error");
    }
    if (age < 18) {
        console.log("You don’t have access cause your age is " + age + " It’s less then 18");
    } else if (age >= 18 && age < 60) {
        console.log("Welcome !");
    } else if (age > 60) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
}


checkAge2('61');
checkAge2(10);


// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

function checkAge3(age) {
    if(typeof age ==='boolean' || age === '' || age ==='Infiniry')  {
        return console.log("Error");
    }
    age = Number(age);
    if(isNaN(age)){
        return console.log("Error");
    }

    if (age < 18) {
        console.log("You don’t have access cause your age is " + age + " It’s less then 18");
    } else if (age >= 18 && age < 60) {
        console.log("Welcome !");
    } else if (age > 60) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
}

checkAge3('2');
checkAge3(0);
checkAge3(19);
checkAge3('0jjjj');
checkAge3('false');
checkAge3('');
checkAge3(false);
checkAge3(true);
checkAge3(' 4');



