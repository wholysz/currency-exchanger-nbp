import {successResponse} from "./__constants";
import {failureError} from "./__constants";

export default (config, callback) => {
    const urlAsTable = config.url.split("/");
    const currencyId = urlAsTable[urlAsTable.length - 1];

    if (currencyId === "success") {
        callback(null, {
            statusCode: 200
        }, JSON.stringify(successResponse));
    }
    else if (currencyId === "failure") {
        callback(failureError, {
            statusCode: 400
        });
    }
    else {
        throw new Error("Not mocked!");
    }
};

export {successResponse};
