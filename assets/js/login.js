function login() {
    var body = document.getElementById("body");
    var form = document.getElementById("loginForm");
    var input = document.getElementById("loginInput");
    if(CryptoJS.MD5(input.value) == 'f4e25339f2fa05aed2074c3182a11c96') {
        form.classList.add("hidden")
        body.style.overflow = "auto";
		body.oncontextmenu = null;
    } else {
        alert("Incorrect Password")
    }
}
