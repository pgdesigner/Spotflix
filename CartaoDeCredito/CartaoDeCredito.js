"use strict";
exports.__esModule = true;
var CartaoDeCredito = /** @class */ (function () {
    function CartaoDeCredito(numero, validade, codigoCVV, limite) {
        this.numero = numero;
        this.validade = validade;
        this.codigoCVV = codigoCVV;
        this.limite = limite;
    }
    CartaoDeCredito.prototype.getNumero = function () {
        return this.numero;
    };
    CartaoDeCredito.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    CartaoDeCredito.prototype.getValidade = function () {
        return this.validade;
    };
    CartaoDeCredito.prototype.setValidade = function (validade) {
        this.validade = validade;
    };
    CartaoDeCredito.prototype.getCodigoCVV = function () {
        return this.codigoCVV;
    };
    CartaoDeCredito.prototype.setCodigoCVV = function (codigoCVV) {
        this.codigoCVV = codigoCVV;
    };
    CartaoDeCredito.prototype.getLimite = function () {
        return this.limite;
    };
    CartaoDeCredito.prototype.setLimite = function (limite) {
        this.limite = limite;
    };
    return CartaoDeCredito;
}());
exports.CartaoDeCredito = CartaoDeCredito;
