"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CartaoDeCredito {
    constructor(numero, validade, codigoCVV, limite) {
        this.numero = numero;
        this.validade = validade;
        this.codigoCVV = codigoCVV;
        this.limite = limite;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getValidade() {
        return this.validade;
    }
    setValidade(validade) {
        this.validade = validade;
    }
    getCodigoCVV() {
        return this.codigoCVV;
    }
    setCodigoCVV(codigoCVV) {
        this.codigoCVV = codigoCVV;
    }
    getLimite() {
        return this.limite;
    }
    setLimite(limite) {
        this.limite = limite;
    }
}
exports.CartaoDeCredito = CartaoDeCredito;
