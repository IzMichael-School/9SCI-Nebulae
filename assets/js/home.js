function load() {
    document.getElementById("body").style.opacity = '1'
}

function bgNebula() {
    var pageContent = document.getElementById("pageContent");
    pageContent.classList.add("nebulaImg");

}

function openStudent() {
    window.location.href = "/student.html"
}

function openTeacher() {
    window.location.href = "/teacher.html"
}