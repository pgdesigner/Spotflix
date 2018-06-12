"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProdutoAbstract_1 = require("../ProdutoAbstract");
class Pacote extends ProdutoAbstract_1.ProdutoAbstract {
    constructor(codigo, nome, genero, produtos, validade) {
        super(codigo, nome, genero, 0);
        this.produtos = produtos;
        this.validade = validade;
        let p = 0;
        for (let a of this.produtos) {
            p += a.getPreco();
        }
        this.preco = p;
        this.precoMensal = this.preco * 0.15;
    }
    getProdutos() {
        return this.produtos;
    }
    setProdutos(produtos) {
        this.produtos = produtos;
    }
    getValidade() {
        return this.validade;
    }
    setValidade(validade) {
        this.validade = validade;
    }
    getPrecoMensal() {
        return this.precoMensal;
    }
    setPrecoMensal(precoMensal) {
        this.precoMensal = precoMensal;
    }
    //public somaPrecoProduto() : void{
    //    for(let i
    executar() {
    }
}
exports.Pacote = Pacote;
