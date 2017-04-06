jest.mock("request");
import {successResponse} from "../../../../__mocks__/__constants";
import {failureError} from "../../../../__mocks__/__constants";
import * as nbpAPI from "../nbp";

test("should have variables defined", () => {
    expect(nbpAPI.HOST).toBeDefined();
    expect(nbpAPI.CURRENCY_ROUTE).toBeDefined();
});

test("should return body if request for currency succeeded", (done) => {
    nbpAPI.getCurrencyExchangeRate("success").then(res => {
        expect(res).toEqual(successResponse);
        done();
    });
});

test("should return error if request for currency failed", done => {
    nbpAPI.getCurrencyExchangeRate("failure").then(undefined, (e) => {
        expect(e).toEqual(failureError);
        done();
    });
});
