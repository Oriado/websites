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
} else{
    message = "Ви в мінусі!";
}

alert("Загальні витрати: " + totalExpenses + "\nЗалишок: " + savings + "\n" + message);
