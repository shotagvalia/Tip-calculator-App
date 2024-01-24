const amount = document.getElementById("bill-input");
const number_Of_People = document.getElementById("people-input");
const resetButton = document.getElementById("reset");
// let errorMesaage = document.getElementById("");
let percentButtons = Array.from(document.getElementsByClassName("button0"));
let customInput = document.getElementById("custom-input");
let tip_Amount = document.getElementById("tip-amount");
let eachPersonAmount = document.getElementById("total-amount");
let percent;
let colorChanger;

function updateInfo() {
  if (amount.value.length > 5) {
    amount.value = "";
  }
  if (number_Of_People.value.length > 3) {
    number_Of_People.value = "";
  }
  if (customInput.value.length > 3) {
    customInput.value = "";
  }

  let billAmount = Math.abs(+amount.value);

  let numberOfPeople = Math.abs(+number_Of_People.value);

  if (!percent || numberOfPeople === 0) {
    return;
  }
  let customTip = Math.abs(+customInput.value);

  let tipAmount = (billAmount * percent) / 100 / numberOfPeople;

  if (customTip) {
    tipAmount = (billAmount * customTip) / 100 / numberOfPeople;
  }

  let totalAmount =
    (billAmount + (billAmount * percent) / 100) / numberOfPeople;

  if (customTip) {
    totalAmount =
      (billAmount + (billAmount * customTip) / 100) / numberOfPeople;
  }

  tip_Amount.textContent = "$" + tipAmount.toFixed(2);
  eachPersonAmount.textContent = "$" + totalAmount.toFixed(2);
}

amount.addEventListener("input", (event) => {
  if (event.target.value < 0) {
    event.target.value = "";
  }
  updateInfo();
});

number_Of_People.addEventListener("input", (event) => {
  if (event.target.value < 0) {
    event.target.value = "";
  }
  updateInfo();
});

customInput.addEventListener("input", (event) => {
  if (event.target.value < 0) {
    event.target.value = "";
  }
  if (colorChanger != undefined) {
    colorChanger.style.backgroundColor = "#00474B";
    colorChanger.style.color = "#FFF";
  }
  event.target.style.backgroundColor = "#F3F9FA";
  event.target.style.color = "#00474B";
  updateInfo();
});

percentButtons.map((button) => {
  button.addEventListener("click", (event) => {
    if (colorChanger != undefined) {
      colorChanger.style.backgroundColor = "#00474B";
      colorChanger.style.color = "#FFF";
    }
    event.target.style.backgroundColor = "#26C2AE";
    event.target.style.color = "#00474B";
    colorChanger = event.target;
    percent = parseInt(event.target.textContent);
    updateInfo();
    customInput.value = "";
  });
});

resetButton.addEventListener("click", () => {
  amount.value = "0";
  number_Of_People.value = "0";
  customInput.value = "Custom";
  tip_Amount.textContent = "$0.00";
  eachPersonAmount.textContent = "$0.00";
  colorChanger.style.backgroundColor = "#00474B";
  colorChanger.style.color = "#FFF";
});
