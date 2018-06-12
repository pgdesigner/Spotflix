"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProdutoAbstract_1 = require("../ProdutoAbstract");
class VideoAbstract extends ProdutoAbstract_1.ProdutoAbstract {
    constructor(codigo, nome, genero, preco, anoLancamento, faixaEtaria) {
        super(codigo, nome, genero, preco);
        this.anoLancamento = anoLancamento;
        this.faixaEtaria = faixaEtaria;
    }
    getAnoLancamento() {
        return this.anoLancamento;
    }
    setAnoLancamento(anoLancamento) {
        this.anoLancamento = anoLancamento;
    }
    getFaixaEtaria() {
        return this.faixaEtaria;
    }
    setFaixaEtaria(faixaEtaria) {
        this.faixaEtaria = faixaEtaria;
    }
}
exports.VideoAbstract = VideoAbstract;
