"use strict";
exports.__esModule = true;
var RepositorioUsuario = /** @class */ (function () {
    function RepositorioUsuario() {
        this.repositorio = new Map();
    }
    RepositorioUsuario.prototype.adicionarUsuario = function (email, usuario) {
        if (this.repositorio.has(email)) {
            throw "Usuário de email: " + email + "já existe";
        }
        this.repositorio.set(email, usuario);
        return true;
    };
    RepositorioUsuario.prototype.removerUsuario = function (email) {
        if (!this.repositorio["delete"](email))
            throw "Usuário de email: " + email + "não existe";
    };
    RepositorioUsuario.prototype.retornarUsuario = function (email) {
        var usuario = this.repositorio.get(email);
        if (!usuario)
            throw "Usuário de email: " + email + "não existe";
        return usuario;
    };
    return RepositorioUsuario;
}());
exports.RepositorioUsuario = RepositorioUsuario;
