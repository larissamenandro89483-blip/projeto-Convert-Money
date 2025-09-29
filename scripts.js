const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const dolarToday = 5.36
    const euroToday = 6.25
    const libraToday = 7.16
    const bitcoinToday = 597013.75



    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-BT", {
            style: "currency",
            currency: "BCT",
        }).format(inputCurrencyValue / libraToday)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "dolar americano"
        currencyImage.src = "./assets/DOLAR.png"

    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "EURO"
        currencyImage.src = "./assets/EURO.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "LIBRA"
        currencyImage.src = "./assets/LIBRA.png"
    }

 if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "BITCOIN"
        currencyImage.src = "./assets/BITCOIN.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)