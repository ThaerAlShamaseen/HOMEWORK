const kmInput = document.getElementById("kmInput");
const convertBtn = document.getElementById("convertBtn");
const clearBtn = document.getElementById("clearBtn");
const result = document.getElementById("result");

const KM_TO_MILES = 0.621371;

convertBtn.addEventListener("click", () => {
  const km = parseFloat(kmInput.value);

  if (isNaN(km) || km < 0) {
    result.textContent = "⚠️ Please enter a valid non-negative number.";
    result.style.color = "red";
    return;
  }

  const miles = km * KM_TO_MILES;
  result.style.color = "#333";
  result.textContent = `${km.toFixed(2)} kilometers = ${miles.toFixed(2)} miles`;
});

clearBtn.addEventListener("click", () => {
  kmInput.value = "";
  result.textContent = "";
  kmInput.focus();
});
