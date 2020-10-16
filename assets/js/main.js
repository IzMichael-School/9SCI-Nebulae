function load() {
    orderSlides();
}

function orderSlides() {
    var main = document.getElementById('slides');

    [].map.call(main.children, Object).sort(function (a, b) {
        return +a.id.match(/\d+/) - +b.id.match(/\d+/);
    }).forEach(function (elem) {
        main.appendChild(elem);
    });
}

// $(document).ready(function () {
//     var url = 'https://thetatools.xyz/docs/index.html';

//     $.get(url, function (data) {
//         $('#actionData').text(data);
//     }, 'text');
// });

function bgNebula() {
    var pageContent = document.getElementById("pageContent");
    pageContent.classList.add("nebulaImg");
    
}

function openTeacher() {
    window.location.href = "/teacher.html"
}