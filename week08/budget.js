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


console.log("Загальні витрати: ", totalExpenses)
console.log("Залишок: ", savings)

if (savings > 0) {
    console.log("У вас залишилися гроші");
} else if (savings == 0) {
    console.log("Ви витратили все");
} else{
    console.log("Ви в мінусі!");
}
