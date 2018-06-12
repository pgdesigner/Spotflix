"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VideoAbstract_1 = require("../VideoAbstract");
class Series extends VideoAbstract_1.VideoAbstract {
    constructor(anoLancamento, faixaEtaria, codigo, nome, genero, preco, numeroDeEp, duracaoMediaDeEp) {
        super(codigo, nome, genero, preco, anoLancamento, faixaEtaria);
        this.numeroDeEp = numeroDeEp;
        this.duracaoMediaDeEp = duracaoMediaDeEp;
    }
    getNumeroDeEp() {
        return this.numeroDeEp;
    }
    setNumeroDeEp(numeroDeEp) {
        this.numeroDeEp = numeroDeEp;
    }
    getDuracaoMediaDeEp() {
        return this.duracaoMediaDeEp;
    }
    setDuracaoMediaDeEp(duracaoMediaDeEp) {
        this.duracaoMediaDeEp = duracaoMediaDeEp;
    }
    executar() {
    }
}
exports.Series = Series;
