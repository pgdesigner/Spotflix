"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VideoAbstract_1 = require("../VideoAbstract");
class Filme extends VideoAbstract_1.VideoAbstract {
    constructor(anoLancamento, faixaEtaria, codigo, nome, genero, preco, duracao) {
        super(codigo, nome, genero, preco, anoLancamento, faixaEtaria);
        this.duracao = duracao;
    }
    getDuracao() {
        return this.duracao;
    }
    setDuracao(duracao) {
        this.duracao = duracao;
    }
    executar() {
    }
}
exports.Filme = Filme;
