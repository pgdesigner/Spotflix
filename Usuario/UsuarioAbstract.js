"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioAbstract {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    getnome() {
        return this.nome;
    }
    setnome(nome) {
        this.nome = nome;
    }
    getemail() {
        return this.email;
    }
    setemail(email) {
        this.email = email;
    }
    getsenha() {
        return this.senha;
    }
    setsenha(senha) {
        this.senha = senha;
    }
}
exports.UsuarioAbstract = UsuarioAbstract;
