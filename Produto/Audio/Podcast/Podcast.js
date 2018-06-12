"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AudioAbstract_1 = require("../AudioAbstract");
class Podcasts extends AudioAbstract_1.AudioAbstract {
    constructor(codigo, nome, genero, preco, autor, duracao, tematica) {
        super(codigo, nome, genero, preco, autor, duracao);
        this.tematica = tematica;
    }
    getTematica() {
        return this.tematica;
    }
    setTemtica(tematica) {
        this.tematica = tematica;
    }
    executar() {
    }
}
exports.Podcasts = Podcasts;
