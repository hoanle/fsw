const exchangeRateUSD= 23208;
const exchangeRateAUD= 14899.58;
const exchangeRateKRW= 16.59;
const exchangeRateEUR= 24664.35;

document.addEventListener("DOMContentLoaded", function() {
    loadLogic(); 
});

function loadLogic() {
    let btnConvert = document.getElementById('btnConvert');
    let selectFromCurrency = document.getElementById('selectFromCurrency');
    let selectToCurrency = document.getElementById('selectToCurrency');
    let inputAmount = document.getElementById('inputAmount');
    let btnSwitch = document.getElementById('btnSwitch');
    let labelResult = document.getElementById('labelResult');

    btnConvert.addEventListener('click', function(){
        let amount = inputAmount.value
        let from = selectFromCurrency.value
        let to = selectToCurrency.value
        console.log(amount);
        console.log(from);
        console.log(to);
    
        let convertedValue = performConvert(parseFloat(amount), from, to);
        labelResult.textContent = formatCurrency(from, amount) + " => " + formatCurrency(to, convertedValue);
     })

    btnSwitch.addEventListener('click', function() {
        let fromValue = selectFromCurrency.value
        let toValue = selectToCurrency.value
        selectToCurrency.value = fromValue 
        selectFromCurrency.value = toValue 
    });
}

function performConvert(amount, from, to) {
    if (isNaN(amount)) {
        alert("Invalid amount");
        return;
    }

    if (from == null || from == '') {
        alert("Empty origin currency");
        return;
    }
    
    if (to == null || to == '') {
        alert("Empty destination currency");
        return;
    }

    if (from == to) {
        alert("Same currency");
        return;
    }

    let convertedValue = amount * pickExchangeRate(from) / pickExchangeRate(to);
    return convertedValue;
}

function pickExchangeRate(currency) {
    if (currency == "usd") {
        return exchangeRateUSD;
    } else if (currency == "aud") {
        return exchangeRateAUD;
    } else if (currency == "krw") {
        return exchangeRateKRW;
    } else if (currency == "eur") {
        return exchangeRateEUR;
    } else {
        return 1;
    }
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
  }