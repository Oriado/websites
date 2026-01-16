function calculator() {
    while (true) {
        let num1 = prompt("Введіть перше число або натисніть скасувати:");
        if (num1 === null) break;
        num1 = Number(num1);

        let num2 = prompt("Введіть друге число або натисніть скасувати:");
        if (num2 === null) break;
        num2 = Number(num2);

        let operation = prompt("Введіть операцію (+, -, *, /)");
        if (operation === null) break;

        let result;
        if (operation === "+") {
            result = num1 + num2;
        } else if (operation === "-") {
            result = num1 - num2;
        } else if (operation === "*") {
            result = num1 * num2;
        } else if (operation === "/") {
            if (num2 === 0) {
                alert("Помилка: на 0 ділити не можна")
                continue; // повертаємось на новий цикл
            }
            result = num1 / num2;
        } else {
            alert("Невідома операція");
            continue;
        }
        alert("Результат:" + result);
    }
    alert("Завершено")
}

calculator();
