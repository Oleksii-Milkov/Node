// v1
/* const baseCurrencyUSD = 26.53;

//helper
function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}

module.exports.convertToUa = function (currency) {
    return roundTwoDecimals(currency * baseCurrencyUSD);
}

module.exports.convertToUSD = function (currency) {
    return roundTwoDecimals(currency / baseCurrencyUSD);
} */

// v2
function Convertor(baseCurrencyUSD) {
    this.baseCurrencyUSD = baseCurrencyUSD;

    this.roundTwoDecimals = function (amount) {
        return Math.round(amount * 100) / 100;
    }

    this.convertToUa = function (currency) {
        return this.roundTwoDecimals(currency * this.baseCurrencyUSD);
    }

    this.convertToUSD = function (currency) {
        return this.roundTwoDecimals(currency / this.baseCurrencyUSD);
    }
}

module.exports = Convertor;