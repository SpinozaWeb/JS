const enterprises = [
    {
        id: 1,
        name: "Предприятие 1",
        departments: [
            {
                id: 2,
                name: "Отдел тестирования",
                employees_count: 10,
            },
            {
                id: 3,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 4,
                name: "Администрация",
                employees_count: 15,
            },
        ]
    },
    {
        id: 5,
        name: "Предприятие 2",
        departments: [
            {
                id: 6,
                name: "Отдел разработки",
                employees_count: 50,
            },
            {
                id: 7,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 8,
                name: "Отдел охраны труда",
                employees_count: 5,
            },
        ]
    },
    {
        id: 9,
        name: "Предприятие 3",
        departments: [
            {
                id: 10,
                name: "Отдел аналитики",
                employees_count: 0,
            },
        ]
    }
]

/*Задания:
1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. 
Для предприятия посчитать сумму всех сотрудников во всех отделах.
 
**Пример:**
 
Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)*/


enterprises.forEach((enterprise) => {
    getAllEmployeesEnterprise(enterprise);

});

function getAllEmployeesEnterprise(enterprise) {
    let sum = 0;
    enterprise.departments.forEach((department) => {
        sum += department.employees_count;

    })
    if (sum !== 0) {
        console.log(enterprise.name + " (" + sum + " сотрудников)");

    } else {
        console.log(enterprise.name + " (нет сотрудников)");

    }
    enterprise.departments.forEach((department) => {
        if (department.employees_count === 0) {
            console.log("- " + department.name + " (нет сотрудников)")
        } else {
            console.log("- " + department.name + " (" + department.employees_count + " сотрудников)")
        }
        
    })

}

console.log('________________________________________________');

/*2. Написать функцию, которая будет принимать 1 аргумент (id отдела или
   название отдела и возвращать название предприятия, к которому относится).
 Пример:
getEnterpriseName(4) // Предприятие 1
getEnterpriseName("Отдел маркетинга") // Предприятие 2*/

function getEnterpriseName(id) {
    enterprises.forEach((enterprise) => {
        enterprise.departments.find((item)=>{
            if(item.id === id){
                console.log(enterprise.name);
            } 
        })    
    
    });
}
getEnterpriseName(4);

console.log('________________________________________________');


/*3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
 
Пример:
addEnterprise("Название нового предприятия")*/

function addEnterprise(str) {
    new_enterprise ={
        name:str,
    }
    enterprises.push(new_enterprise)
    console.log(enterprises);
}
addEnterprise("Название нового предприятия");
console.log('________________________________________________');

/*4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, 
в которое будет добавлен отдел и название отдела.
 
Пример:
addDepartment(1, "Название нового отдела")*/
function addDepartment(id, str) {

}
console.log('________________________________________________');
/*5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия
 и новое имя предприятия.
 
Пример:
editEnterprise(1, "Новое название предприятия")*/
function editEnterprise(id, enterpriseName) {
    enterprises.find((item) => { 
        if(item.id === id){
            enterprises.name = enterpriseName;
            enterprises.id = id;
        }  
    
    });
    console.log(enterprises);
    
}
editEnterprise(1, "Новое название предприятия")
console.log('________________________________________________');

/*6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела 
и новое имя отдела.
 
Пример:
editDepartment(7, "Новое название отдела")*/

function editDepartment(id, departmentName) {

}
console.log('________________________________________________');

/*7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
 
Пример:
deleteEnterprise(1)*/

function deleteEnterprise(id) {
    let newArray = enterprises.filter(function (f) { return f.id !== id })
    console.log(newArray)

}
deleteEnterprise(1);
console.log('________________________________________________');

/*8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. 
Удалить отдел можно только, если в нем нет сотрудников.
 
Пример:
deleteDepartment(3)*/

function deleteDepartment(id) {

}
console.log('________________________________________________');

/*9. Написать функцию для переноса сотрудников между отделами одного предприятия. 
В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники 
и id отдела, в который будут переноситься сотрудники).
 
Пример:
moveEmployees(2, 3)*/

function moveEmployees(x, y) {

}
console.log('________________________________________________');

