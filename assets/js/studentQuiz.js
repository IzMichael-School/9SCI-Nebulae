var current = 0;

function nextQ() {
	var username = document.getElementById("username");
    var Q1 = document.getElementById("Q1");
    var Q2 = document.getElementById("Q2");
    var Q3 = document.getElementById("Q3");
    var Q4 = document.getElementById("Q4");
	if(current == 0) {
		hideAllQs();
		Q1.classList.remove("hidden");
		current += 1;
	} else if (current == 1) {
        hideAllQs();
        Q2.classList.remove("hidden")
		current += 1;
    } else if (current == 2) {
        hideAllQs();
        Q3.classList.remove("hidden")
		current += 1;
    } else if (current == 3) {
        hideAllQs();
        Q4.classList.remove("hidden")
		current += 1;
    } else {
        hideAllQs();
        username.classList.remove("hidden")
		current = 0;
    }
}

function prevQ() {
	var username = document.getElementById("username");
    var Q1 = document.getElementById("Q1");
    var Q2 = document.getElementById("Q2");
    var Q3 = document.getElementById("Q3");
    var Q4 = document.getElementById("Q4");
    if (current == 4) {
        hideAllQs();
        Q3.classList.remove("hidden")
		current -= 1;
    } else if (current == 3) {
        hideAllQs();
        Q2.classList.remove("hidden")
		current -= 1;
    } else if (current == 2) {
        hideAllQs();
        Q1.classList.remove("hidden")
		current -= 1;
    }
	if (current == 1) {
		hideAllQs();
		username.classList.remove("hidden");
		current -= 1;
	} else {
        hideAllQs();
        username;.classList.remove("hidden")
		current = 0;
    }
}

function hideAllQs() {
	var username = document.getElementById("username");
    var Q1 = document.getElementById("Q1");
    var Q2 = document.getElementById("Q2");
    var Q3 = document.getElementById("Q3");
    var Q4 = document.getElementById("Q4");
	username.classList.add("hidden");
    Q1.classList.add("hidden");
    Q2.classList.add("hidden");
    Q3.classList.add("hidden");
    Q4.classList.add("hidden");
}
