/*
Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. 
для дальнейшего использования в функции, описанной в задании
*/

let fs = require('fs');

function saveUniqueData() {
    let dataset = JSON.parse(fs.readFileSync("JS_HW3/data_for_task2_fs.json", "utf8"));

    let new_dataset = [];
    dataset.forEach((data) => {
        new_dataset.push(JSON.stringify(data));
    })
    let uniqueArray = new_dataset.filter((val, ind, arr) => arr.indexOf(val) === ind);
    let x = [];
    uniqueArray.forEach((arr) => {
        x.push(JSON.parse(arr));
    })
    console.log(x);
}

//console.log(dataset)
saveUniqueData();