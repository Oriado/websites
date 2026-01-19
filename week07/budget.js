// let income = 20000;
// let rent = 10000;
// let food = 6000;
// let transport = 1000;
// let entertainment = 5000;
let income = Number(prompt("Введіть ваш дохід: "));
let rent = Number(prompt("Введіть витрати на оренду: "));
let food = Number(prompt("Введіть витрати на їжу: "));
let transport = Number(prompt("Введіть витрати на транспорт: "));
let entertainment = Number(prompt("Введіть витрати на розваги: "));
let totalExpenses = rent + food + transport + entertainment
let savings = income - totalExpenses

if (savings > 0) {
    message = "У вас залишилися гроші";
} else if (savings == 0) {
    message = "Ви витратили все";
} else {
    message = "Ви в мінусі!";
}

alert("Загальні витрати: " + totalExpenses + "\nЗалишок: " + savings + "\n" + message);



// function checkPassword() {
//     let password = prompt("Введіть пароль");
//     if (password === "123456") {
//         alert("Пароль введено правильно");
//     } else {
//         alert("Пароль введено неправильно");
//     }
// }
// checkPassword();

// function checkStart() {
//     let operate = confirm("Хочеш увійти");
//     if (operate) {
//         checkPassword();
//     } else {
//         alert("Вхід скасовано")
//     }
// }
// checkStart()

// function checkPassword() {
//     let password;
//     let attempt = 3;

//     while (attempt > 0) {
//         password = prompt("Введіть пароль");
//         if (password === "123456") {
//             alert("Пароль введено правильно");
//             return;
//         } else {
//             attempt--;
//             if (attempt > 0) {
//                 alert("Пароль введено неправильно. У вас залишилось " + attempt + " спроб");
//             } else {
//                 alert("Ви використали всі спроби");
//             }
//         }
//     }
// }
// checkPassword();
