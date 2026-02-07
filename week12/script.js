let email = document.getElementById("email");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", function () {
    let emailValue = email.value.trim();
    if (emailValue.includes("@") && emailValue.includes(".") && emailValue.length > 3) {
        result.textContent = "Email правильний";
        result.style.color = "green";
        email.style.borderColor = "green";
    } else {
        result.textContent = "Email неправильний";
        result.style.color = "red";
        email.style.borderColor = "red";


        email.addEventListener("input", function () {
            email.style.borderColor = "#ccc";
            result.textContent = "";
        });
    }
});