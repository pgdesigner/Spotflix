"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UsuarioAbstract_1 = require("../UsuarioAbstract");
class ClienteAbstract extends UsuarioAbstract_1.UsuarioAbstract {
    constructor(nome, email, senha, endereco, dataDeNascimento, listaDeProduto, cartaoDeCredito) {
        super(nome, email, senha);
        this.endereco = endereco;
        this.dadaDeNascimento = dataDeNascimento;
        this.listaDeProduto = listaDeProduto;
        this.cartaoDeCredito = cartaoDeCredito;
    }
    getEndereco() {
        return this.endereco;
    }
}
exports.ClienteAbstract = ClienteAbstract;
