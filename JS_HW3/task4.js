const company = [
    {
        id: 1,
        name: "Компания",
        parent: null,
        users_count: 10,
        children: [
            {
                id: 2,
                name: "Отдел тестирования",
                parent: 1,
                users_count: 7,
                children: [
                    {
                        id: 2,
                        name: "Тестирование Web",
                        parent: 2,
                        users_count: 5,
                    },
                    {
                        id: 3,
                        name: "Тестирование Mobile",
                        parent: 2,
                        users_count: 0,
                    },
                ]
            },
            {
                id: 4,
                name: "Отдел маркетинга",
                parent: 1,
                users_count: 30,
            },
            {
                id: 5,
                name: "Администрация",
                parent: 1,
                users_count: 25,
                children: [
                    {
                        id: 6,
                        name: "Бухгалтерия",
                        parent: 5,
                        users_count: 10,
                    },
                    {
                        id: 7,
                        name: "Менеджмент",
                        parent: 5,
                        users_count: 15,
                        children: [
                            {
                                id: 8,
                                name: "Подраздел менеджмента 1",
                                parent: 7,
                                users_count: 5,
                            },
                            {
                                id: 9,
                                name: "Подраздел менеджмента 2",
                                parent: 7,
                                users_count: 10,
                            }
                        ]
                    },
                    {
                        id: 10,
                        name: "HR",
                        parent: 5,
                        users_count: 1,
                    }
                ]
            },
        ]
    }
]

/* 
Написать функцию: 
 
Функция строит древовидный список компании.
При ее вызове в консоль должен выветить список подразделений компании с указанием количества сотрудников и с соблюдение вложенности подразделений.
 
Пример:
 
Компания (10)
-- Отдел тестирования (7)
---- Тестирование Web (5)
---- Тестирование Mobile (0)
-- Отдел маркетинга (30)
-- Администрация (25)
---- Бухгалтерия (10)
---- Менеджмент (15)
------ Подраздел менеджмента 1 (5)
------ Подраздел менеджмента 2 (10)
---- HR (1)
*/

/*неверное решение для общих случаев, но верное для текущего массива*/
function getCompany(company) {
    console.log(company[0].name + "(" + company[0].users_count + ")");

    company[0].children.forEach(children1 => {
        console.log("-- " + children1.name + "(" + children1.users_count + ")");

        if (children1['children']) {
            children1['children'].forEach(children2 => {
                console.log("---- " + children2.name + "(" + children2.users_count + ")");
                if (children2['children']) {
                    children2['children'].forEach(children3 => {
                        console.log("------ " + children3.name + "(" + children3.users_count + ")");
                    })
                }
            })
        }
    });

}

getCompany(company);

/*верный вариант вывода через рекурсию*/
function getCompany2(company, counter) {
    company.forEach((element) => {
        //console.log(element.name + "(" + element.users_count + ")");
        console.log(`${counter}${counter ==="" ? "" : " "}${element.name} (${element.users_count})`);
        if (element.children) {
            counter += "--";
            getCompany2(element.children, counter);
            counter = counter.slice(0,-2);
        }
    });

}
getCompany2(company, '');

