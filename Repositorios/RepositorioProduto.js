"use strict";
exports.__esModule = true;
var Map_1 = require("../Map/Map");
var RepositorioProduto = /** @class */ (function () {
    function RepositorioProduto() {
        this.repositorioP = new Map_1.Map();
    }
    RepositorioProduto.prototype.adicionarProduto = function (codigo, produto) {
        if (this.repositorioP.has(codigo)) {
            throw "Codigo de produto: " + codigo + " já existe";
        }
        this.repositorioP.set(codigo, produto);
        return true;
    };
    RepositorioProduto.prototype.removerProduto = function (codigo) {
        if (!this.repositorioP["delete"](codigo))
            throw "Codigo de produto: " + codigo + " não existe";
    };
    RepositorioProduto.prototype.retornarProduto = function (codigo) {
        var produto = this.repositorioP.get(codigo);
        if (!produto)
            throw "Codigo de produto: " + codigo + " não existe";
        return produto;
    };
    RepositorioProduto.prototype.get = function () {
        return this.repositorioP;
    };
    return RepositorioProduto;
}());
exports.RepositorioProduto = RepositorioProduto;
