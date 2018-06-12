"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProdutoAbstract_1 = require("../ProdutoAbstract");
class AudioAbstract extends ProdutoAbstract_1.ProdutoAbstract {
    constructor(codigo, nome, genero, preco, autor, duracao) {
        super(codigo, nome, genero, preco);
        this.autor = autor;
        this.duracao = duracao;
    }
    getAutor() {
        return this.autor;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    getDuracao() {
        return this.duracao;
    }
    setDuracao(duracao) {
        this.duracao = duracao;
    }
}
exports.AudioAbstract = AudioAbstract;
