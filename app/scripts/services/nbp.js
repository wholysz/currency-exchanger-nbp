import request from "request";

const HOST = "http://api.nbp.pl/api/";
/**
 * Route to get currency mid-exchange rate. Uses 'B' table as default.
 * @type {string}
 */
const CURRENCY_ROUTE = "exchangerates/rates/B/";

/**
 * simple client for NBP API. For details about API usage, refer to:
 * http://api.nbp.pl/
 */
const getCurrencyExchangeRate = (currencyCode) => {
    return new Promise((resolve, reject) => {
        request({
            url: HOST + CURRENCY_ROUTE + currencyCode,
            headers: {
                "Accept": "application/json"
            }
        }, (error, res, body) => {
            if (!error && res.statusCode === 200) {
                resolve(JSON.parse(body));
            }
            else {
                reject(error);
            }
        });
    });
};

export {
    HOST,
    CURRENCY_ROUTE,
    getCurrencyExchangeRate
}
