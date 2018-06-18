"use strict";
exports.__esModule = true;
var UsuarioAbstract = /** @class */ (function () {
    function UsuarioAbstract(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    UsuarioAbstract.prototype.getnome = function () {
        return this.nome;
    };
    UsuarioAbstract.prototype.setnome = function (nome) {
        this.nome = nome;
    };
    UsuarioAbstract.prototype.getemail = function () {
        return this.email;
    };
    UsuarioAbstract.prototype.setemail = function (email) {
        this.email = email;
    };
    UsuarioAbstract.prototype.getsenha = function () {
        return this.senha;
    };
    UsuarioAbstract.prototype.setsenha = function (senha) {
        this.senha = senha;
    };
    return UsuarioAbstract;
}());
exports.UsuarioAbstract = UsuarioAbstract;
