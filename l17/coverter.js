class Converter {
    constructor(baseCurrencyUSD){
        this.baseCurrencyUSD = baseCurrencyUSD;
    }

    roundTwoDecimals = function (amount) {
        return Math.round(amount * 100) / 100;
    }

    convertToUa = function (currency) {
        return this.roundTwoDecimals(currency * this.baseCurrencyUSD);
    }

    convertToUSD = function (currency) {
        return this.roundTwoDecimals(currency / this.baseCurrencyUSD);
    }
}

module.exports = Converter;
