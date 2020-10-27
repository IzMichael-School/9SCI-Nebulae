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

function showTexts1() {
    showText('line1a', 2);
    showText('line1b', 4);
    showText('line1c', 6);
    showText('line1d', 8);
    showText('line1e', 9);
    showText('line1f', 10);
}

function showTexts3() {
    showText('line3a', 2);
    showText('line3b', 4);
    showText('line3c', 5);
    showText('line3d', 6);
    showText('line3e', 7);
    showText('line3f', 8);
    showText('line3g', 9);
}

function showTexts4() {
    showText('line4a', 2);
    showText('line4b', 4);
    showText('line4c', 5);
    showText('line4d', 6);
    showText('line4e', 7);
    showText('line4f', 8);
    showText('line4g', 9);
}

function showTexts5() {
    showText('line5a', 2);
    showText('line5b', 4);
    showText('line5c', 5);
    showText('line5d', 6);
    showText('line5e', 7);
    showText('line5f', 8);
    showText('line5g', 9);
}

function showTexts6() {
    showText('line6a', 2);
    showText('line6b', 6);
    showText('line6c', 8);
    showText('line6d', 10);
    showText('line6e', 12);
    showText('line6f', 14);
    showText('line6g', 16);
}

function showTexts7() {
    showText('line7a', 2);
    showText('line7b', 6);
    showText('line7c', 8);
    showText('line7d', 10);
    showText('line7e', 12);
    showText('line7f', 14);
    showText('line7g', 16);
}