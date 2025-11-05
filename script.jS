document.getElementById("convert-btn").addEventListener("click", function() {
    const kmInput = document.getElementById("kilometers").value;
    const resultEl = document.getElementById("result");

    if (kmInput === "" || isNaN(kmInput)) {
        resultEl.textContent = "⚠️ Please enter a valid number.";
        resultEl.style.color = "red";
        return;
    }

    const miles = (kmInput * 0.621371).toFixed(2);
    resultEl.textContent = `${kmInput} km = ${miles} miles`;
    resultEl.style.color = "#333";
});

document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("kilometers").value = "";
    document.getElementById("result").textContent = "";
});

