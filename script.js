



const password = document.getElementById("input");
const submit = document.getElementById("button");



submit.addEventListener("click", function (event) {
    const passwordValue = password.value;

    alert(checker(passwordValue));
});

function checker(password) {
    if (password.length < 8) {
        return "Weak password";
    }
    else if (password.length >= 8 && password.length <= 12) {
        return "Medium password";
    }
    else if (password.length > 12) {
        if (/[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
            return "Strong password";
        } else {
            return "Medium password";
        }
    }
}