function login() {
    var body = document.getElementById("body");
    var form = document.getElementById("loginForm");
    var input = document.getElementById("loginInput");
    if (input.value = 'IzAsh1') {
        form.classList.add("hidden")
        body.style.overflow = auto;
    } else {
        alert("Incorrect Password")
    }
}