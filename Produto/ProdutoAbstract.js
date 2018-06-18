"use strict";
exports.__esModule = true;
var ProdutoAbstract = /** @class */ (function () {
    function ProdutoAbstract(codigo, nome, genero, preco) {
        this.codigo = codigo;
        this.nome = nome;
        this.genero = genero;
        this.preco = preco;
    }
    ProdutoAbstract.prototype.getCodigo = function () {
        return this.codigo;
    };
    ProdutoAbstract.prototype.setCodigo = function (codigo) {
        this.codigo = codigo;
    };
    ProdutoAbstract.prototype.getNome = function () {
        return this.nome;
    };
    ProdutoAbstract.prototype.setNome = function (Nome) {
        this.nome = Nome;
    };
    ProdutoAbstract.prototype.getGenero = function () {
        return this.genero;
    };
    ProdutoAbstract.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    ProdutoAbstract.prototype.getPreco = function () {
        return this.preco;
    };
    ProdutoAbstract.prototype.setPreco = function (preco) {
        this.preco = preco;
    };
    return ProdutoAbstract;
}());
exports.ProdutoAbstract = ProdutoAbstract;
