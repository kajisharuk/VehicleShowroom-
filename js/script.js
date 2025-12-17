function checkAge() {
    let age = document.getElementById("age").value;
    let msg = document.getElementById("msg");

    if (age >= 18) {
        window.location.href = "login.html";
    } else {
        msg.innerHTML = "Sorry! You must be 18 or above.";
        msg.style.color = "red";
    }
}
