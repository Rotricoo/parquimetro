class ParkingMeter {
  constructor(value = 0, time = 0, change = 0) {
    this.value = value;
    this.time = time;
    this.change = change;
  }

  validateValue(paidAmount) {
    if (isNaN(paidAmount) || paidAmount <= 0) {
      alert("Please enter a valid value greater than zero");
      this.clearResults();
      return false;
    }

    if (paidAmount < 1) {
      alert("Invalid value! You need AUD $" + (1 - paidAmount).toFixed(2) + " more for the minimum");
      this.clearResults();
      return false;
    }

    return true;
  }

  clearResults() {
    document.getElementById("timeResult").textContent = " ";
    document.getElementById("changeResult").textContent = " ";
  }

  calculateTime(paidAmount) {
    this.change = 0;

    if (paidAmount >= 1 && paidAmount < 1.75) {
      const extraValue = paidAmount - 1;
      const extraTime = (extraValue / 0.75) * 30;
      this.time = 30 + extraTime;
    } else if (paidAmount >= 1.75 && paidAmount < 3) {
      const extraValue = paidAmount - 1.75;
      const extraTime = (extraValue / 1.25) * 60;
      this.time = 60 + extraTime;
    } else if (paidAmount >= 3) {
      this.time = 120;
    }

    if (paidAmount > 3) {
      this.change = paidAmount - 3;
    }
  }

  showResults() {
    document.getElementById("timeResult").textContent = "You have " + Math.floor(this.time) + " minutes.";

    if (this.change > 0) {
      document.getElementById("changeResult").textContent = "Your change is AUD $" + this.change.toFixed(2);
    } else {
      document.getElementById("changeResult").textContent = "";
    }
  }

  process(paidAmount) {
    this.time = 0;
    this.change = 0;

    if (!this.validateValue(paidAmount)) {
      return;
    }

    this.calculateTime(paidAmount);

    this.showResults();
  }
}

const myParkingMeter = new ParkingMeter();

const button = document.getElementById("calculateBtn");

button.addEventListener("click", function () {
  let typedValue = document.getElementById("paidValue").value;

  typedValue = typedValue.replace(",", ".");

  const paidAmount = parseFloat(typedValue);

  myParkingMeter.process(paidAmount);
});
