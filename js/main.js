var elForm  = document.querySelector(".form");
var elInput  = document.querySelector(".form__input");
var elSelect  = document.querySelector(".form__select");
var elResult  = document.querySelector(".form__result");


elForm.addEventListener("submit", function(eve){
    eve.preventDefault()

    var elInputVal = elInput.value;
    var elSelectVal = elSelect.value;
    var convertCurrency = elInputVal * elSelectVal

    elResult.textContent = (`${convertCurrency}`)
})