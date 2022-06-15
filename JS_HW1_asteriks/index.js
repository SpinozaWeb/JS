
// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке


function checkAge(age) {
    if (!Number(age)) {
        return console.log("Error");
        alert("Error");
    }
    age = Number(age);

    if (age < 18) {
        console.log("You don’t have access cause your age is " + age + " It’s less then 18");
        alert("You don’t have access cause your age is " + age + " It’s less then 18");
    } else if (age >= 18 && age < 60) {
        console.log("Welcome !");
        alert ("Welcome !");
    } else if (age > 60) {
        console.log("Keep calm and look Culture channel");
        alert("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
        alert("Technical work");
    }
}



let a = prompt("Please, enter your age");
checkAge(a);