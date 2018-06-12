"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    getDia() {
        return this.dia;
    }
    setDia(dia) {
        this.dia = dia;
    }
    getMes() {
        return this.mes;
    }
    setMes(mes) {
        this.mes = mes;
    }
    getAno() {
        return this.ano;
    }
    setAno(ano) {
        this.ano = ano;
    }
    toString() {
        let res = this.dia + "/" + this.mes + "/" + this.ano;
        return res;
    }
}
exports.Data = Data;
