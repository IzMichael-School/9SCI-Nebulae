function load() {
}

function orderSlides() {
    var main = document.getElementById('slides');

    [].map.call(main.children, Object).sort(function (a, b) {
        return +a.id.match(/\d+/) - +b.id.match(/\d+/);
    }).forEach(function (elem) {
        main.appendChild(elem);
    });
}

function showText(id, delay) {
    var elem = document.getElementById(id);
    setTimeout(function () {
        elem.style.opacity = 1;
    }, delay * 1000)
}

function showTexts() {
    showText('line1a', 2);
    showText('line1b', 4);
    showText('line1c', 6);
    showText('line2a', 8);
    showText('line2b', 9);
    showText('line2c', 10);
}