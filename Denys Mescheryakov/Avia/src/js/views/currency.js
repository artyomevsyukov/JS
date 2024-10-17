class CurrencyUI {
    constructor() {
        this.currency = document.getElementById("currency");
        this.dictionary = {
            USD: "$",
            EUR: "€",
            RUB: "₽",
        };
    }

    get currncyValue() {
        return this.currency.value;
    }

    get currencySymbol() {
        return this.dictionary[this.currncyValue];
    }
}

const currencyUI = new CurrencyUI();

export default currencyUI;
