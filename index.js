//eces interest calc
//tinkering #2

function calculate(){

    const totalAmount = document.getElementById("total-amount");
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");

    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value / 100);
    let years = Number(yearsInput.value);

    if(principal < 0 || isNaN(principal)){
        principal = 0;
        principalInput.value = 0;
        window.alert("🚨principal amount cannot be negative!🚨");
    }
    if(rate < 0 || isNaN(rate)){
        rate = 0;
        rateInput.value = 0;
        window.alert("🚨interest rate cannot be negative!🚨");
    }
    if(years < 0 || isNaN(years)){
        years = 0;
        yearsInput.value = 0;
        window.alert("🚨year cannot be negative!🚨");
    }

    const result = principal * Math.pow((1 + rate / 1), 1 * years)

    totalAmount.textContent = result;

    totalAmount.textContent = result.toLocaleString(undefined, {style: "currency", currency: "EUR"});
}