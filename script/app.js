const UILoadCalculate = document.querySelector("#loan-calculate");
const UILoanResult = document.querySelector("#loan-result");
const UILoadingBar = document.querySelector(".loading-bar");

const UILoanCalculateSubmit = document.querySelector("#loan-submit");

// event listener

UILoanCalculateSubmit.addEventListener("click", calculateLoan);

// function
function calculateLoan(e) {
  e.preventDefault();
  // loading bar for 5 seconds
  loadingBar();

  setTimeout(showResult, 500);
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

  r = r / 100;
  t = t * 12;

  const loanMonthlyPayment = (
    p *
    ((Math.pow(r, t) * (r - 1)) / (Math.pow(r, t) - 1))
  ).toFixed(2);
}

function outputResult(result) {
  const UILoanMonthly = document.querySelector("#loan-monthly");
  const UILoanInterestTotal = document.querySelector("#loan-interest-total");
  const UILoanPaymentTotal = document.querySelector("#loan-payment-total");
}

// main
UILoanResult.style.display = "none";
