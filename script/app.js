const UILoanCalculate = document.querySelector("#loan-calculate");
const UILoanResult = document.querySelector("#loan-result");
const UILoadingBar = document.querySelector(".loading-bar");

const UILoanAmount = document.querySelector("#loan-amount");
const UILoanInterest = document.querySelector("#loan-interest");
const UILoanYear = document.querySelector("#loan-year");

const UILoanCalculateSubmit = document.querySelector("#loan-submit");

// event listener

UILoanCalculateSubmit.addEventListener("click", calculateLoan);

// function
function calculateLoan(e) {
  e.preventDefault();
  // loading bar for 5 seconds
  if (isValidInput()) {
    loadingBar();
    setTimeout(showResult, 2500);
  } else {
    console.log("need to enter value correctly");
    failedInput();
  }
}

function failedInput() {
  UILoanCalculate.style.color = "red";
  setTimeout(function () {
    window.location.reload(false);
  }, 1000);
}
function isValidInput() {
  if (UILoanAmount.value < 1 || isNaN(UILoanAmount.value)) return false;
  if (UILoanInterest.value < 1 || isNaN(UILoanInterest.value)) return false;
  if (UILoanYear.value < 1 || isNaN(UILoanYear.value)) return false;

  return true;
}

function loadingBar() {
  UILoadingBar.style.display = "block";
  UILoanResult.style.display = "none";
}

function showResult() {
  UILoadingBar.style.display = "none";
  UILoanResult.style.display = "block";

  calculateResult();
}

function calculateResult() {
  let p = parseFloat(document.querySelector("#loan-amount").value);
  let r = parseFloat(document.querySelector("#loan-interest").value);
  let t = parseFloat(document.querySelector("#loan-year").value);
  //
  const UILoanMonthly = document.querySelector("#loan-monthly");
  const UILoanTotalPayment = document.querySelector("#loan-payment-total");
  const UILoanTotalInterest = document.querySelector("#loan-interest-total");

  UILoanAmount.value = "";
  UILoanInterest.value = "";
  UILoanYear.value = "";

  r = r / 100 / 12;
  t = t * 12;

  const x = Math.pow(1 + r, t);
  const monthly = (p * x * r) / (x - 1);

  if (isFinite(monthly)) {
    UILoanMonthly.value = `${monthly.toFixed(2)}`;
    UILoanTotalPayment.value = `${(monthly * t).toFixed(2)}`;
    UILoanTotalInterest.value = `${(monthly * t - p).toFixed(2)}`;
  } else {
    console.log("somthing is wrong");
  }
}

function outputResult(result) {
  const UILoanMonthly = document.querySelector("#loan-monthly");
  const UILoanInterestTotal = document.querySelector("#loan-interest-total");
  const UILoanPaymentTotal = document.querySelector("#loan-payment-total");
}

// main
UILoanResult.style.display = "none";
