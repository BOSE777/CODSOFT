const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

/* ======================
   KEYBOARD SUPPORT
====================== */
document.addEventListener("keydown", function (event) {
    const key = event.key;

    // Numbers
    if (!isNaN(key)) {
        appendValue(key);
    }

    // Operators
    if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendValue(key);
    }

    // Decimal
    if (key === ".") {
        appendValue(".");
    }

    // Enter = Calculate
    if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    // Backspace = Delete
    if (key === "Backspace") {
        deleteLast();
    }

    // Escape = Clear
    if (key === "Escape") {
        clearDisplay();
    }
});
