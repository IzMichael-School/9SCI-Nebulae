function runStage() {
    var stage = 5; // Only stage 4 has a 2nd digit (41 - 45)
    var other = document.getElementById("stageOther")
    var stage1 = document.getElementById("stage1")
    var stage2 = document.getElementById("stage2")
    var stage3 = document.getElementById("stage3")
    var stage41 = document.getElementById("stage4.1")
    var stage42 = document.getElementById("stage4.2")
    var stage43 = document.getElementById("stage4.3")
    var stage44 = document.getElementById("stage4.4")
    var stage45 = document.getElementById("stage4.5")
    var stage5 = document.getElementById("stage5")
    var stage6 = document.getElementById("stage6")
    var stage7 = document.getElementById("stage7")
    if (stage == 1) {
        hideAllStages();
        stage1.classList.remove("hidden");
    } else if (stage == 2) {
        hideAllStages();
        stage2.classList.remove("hidden");
    } else if (stage == 3) {
        hideAllStages();
        stage3.classList.remove("hidden");
    } else if (stage == 41) {
        hideAllStages();
        stage4.classList.remove("hidden");
        stage41.classList.remove("hidden");
    } else if (stage == 42) {
        hideAllStages();
        stage4.classList.remove("hidden");
        stage42.classList.remove("hidden");
    } else if (stage == 43) {
        hideAllStages();
        stage4.classList.remove("hidden");
        stage43.classList.remove("hidden");
    } else if (stage == 44) {
        hideAllStages();
        stage4.classList.remove("hidden");
        stage44.classList.remove("hidden");
    } else if (stage == 45) {
        hideAllStages();
        stage4.classList.remove("hidden");
        stage45.classList.remove("hidden");
    } else if (stage == 5) {
        hideAllStages();
        stage5.classList.remove("hidden");
    } else if (stage == 6) {
        hideAllStages();
        stage6.classList.remove("hidden");
    } else if (stage == 7) {
        hideAllStages();
        stage7.classList.remove("hidden");
    } else {
        hideAllStages();
        other.classList.remove("hidden");
    }
}

function hideAllStages() {
    var other = document.getElementById("stageOther")
    var stage1 = document.getElementById("stage1")
    var stage2 = document.getElementById("stage2")
    var stage3 = document.getElementById("stage3")
    var stage4 = document.getElementById("stage4")
    var stage41 = document.getElementById("stage4.1")
    var stage42 = document.getElementById("stage4.2")
    var stage43 = document.getElementById("stage4.3")
    var stage44 = document.getElementById("stage4.4")
    var stage45 = document.getElementById("stage4.5")
    var stage5 = document.getElementById("stage5")
    var stage6 = document.getElementById("stage6")
    var stage7 = document.getElementById("stage7")
    other.classList.add("hidden")
    stage1.classList.add("hidden")
    stage2.classList.add("hidden")
    stage3.classList.add("hidden")
    stage4.classList.add("hidden")
    stage41.classList.add("hidden")
    stage42.classList.add("hidden")
    stage43.classList.add("hidden")
    stage44.classList.add("hidden")
    stage45.classList.add("hidden")
    stage5.classList.add("hidden")
    stage6.classList.add("hidden")
    stage7.classList.add("hidden")
}

function load() {
    hideAllStages();
    runStage();
    showTexts();
    document.body.style.opacity = '1';
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
    showText('line2a', 2);
    showText('line2b', 4);
    showText('line3a', 2);
    showText('line3b', 4);
    showText('line3c', 6);
    showText('line3d', 8);
    showText('line3e', 10);
    showText('line3f', 11);
    showText('line3g', 12);
    showText('line4a', 2);
    showText('line4b', 4);
    showText('line4c', 6);
    showText('line5a', 2);
    showText('line5b', 4);
    showText('line5c', 6);
    showText('line6a', 2);
    showText('line6b', 4);
    showText('line6c', 6);
}

function toHome() {
    window.location.href = "/"
}