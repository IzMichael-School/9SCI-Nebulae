function login() {
    var body = document.getElementById("body");
    var form = document.getElementById("loginForm");
    var input = document.getElementById("loginInput");
    if (CryptoJS.MD5(input.value) == '7857b7dae4dfb4772f2be1c76b6ffa98') {
        window.location.href = "/student.html"
    } else {
        alert("Incorrect Password")
    }
}

function load() {
    document.body.style.opacity = '1';
}