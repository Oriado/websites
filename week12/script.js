let email = document.getElementById("email");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

function validateEmail(emailValue) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailValue) {
        return { valid: false, message: "Email порожній" };
    }
    if (emailValue.length > 254) {
        return { valid: false, message: "Email занадто довгий" };
    }
    if (emailValue.includes(" ")) {
        return { valid: false, message: "Не може містити пробіли" };
    }
    if (!emailValue.includes("@")) {
        return { valid: false, message: "Відсутній символ @" };
    }
    if (emailValue.split("@").length > 2) {
        return { valid: false, message: "Тільки один символ @" };
    }

    const [local, domain] = emailValue.split("@");

    if (!local || local.length > 64) {
        return { valid: false, message: "Неправильна частина до @" };
    }
    if (local.startsWith(".") || local.endsWith(".") || local.includes("..")) {
        return { valid: false, message: "Неправильне розміщення крапок" };
    }

    if (!domain || !domain.includes(".")) {
        return { valid: false, message: "Неправильний домен" };
    }
    if (domain.startsWith(".") || domain.endsWith(".")) {
        return { valid: false, message: "Неправильний домен" };
    }

    if (!emailRegex.test(emailValue)) {
        return { valid: false, message: "Невірний формат email" };
    }

    return { valid: true, message: "Email правильний" };
}

btn.addEventListener("click", function () {
    let validation = validateEmail(email.value.trim());

    result.textContent = validation.message;
    result.style.color = validation.valid ? "green" : "red";
    email.style.borderColor = validation.valid ? "green" : "red";
});

email.addEventListener("input", function () {
    email.style.borderColor = "#ccc";
    result.textContent = "";
});