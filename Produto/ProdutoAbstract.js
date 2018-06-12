"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProdutoAbstract {
    constructor(codigo, nome, genero, preco) {
        this.codigo == codigo;
        this.nome == nome;
        this.genero == genero;
        this.preco == preco;
    }
    getCodigo() {
        return this.codigo;
    }
    setCodigo(codigo) {
        this.codigo = codigo;
    }
    getNome() {
        return this.nome;
    }
    setNome(Nome) {
        this.nome = Nome;
    }
    getGenero() {
        return this.genero;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    getPreco() {
        return this.preco;
    }
    setPreco(preco) {
        this.preco = preco;
    }
}
exports.ProdutoAbstract = ProdutoAbstract;
