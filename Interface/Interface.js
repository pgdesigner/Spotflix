"use strict";
exports.__esModule = true;
var readline = require('readline-sync');
function input(name) {
    return readline.question(name);
}
exports.input = input;
var Gerente_1 = require("../Usuario/Funcionario/Gerente/Gerente");
var RepositorioUsuario_1 = require("../Repositorios/RepositorioUsuario");
var RepositorioProduto_1 = require("../Repositorios/RepositorioProduto");
var Cliente_1 = require("../Usuario/Cliente/Cliente");
var op = 1;
var log = 1;
var logout = "sim";
var fechar = "não";
var senha;
var login;
var g = new Gerente_1.Gerente("000000", 12, "admin", "gerente@admin.com", "admin");
var a = new Gerente_1.Gerente("000067876800", 12, "1admin", "gere4nte@admin.com", "admin");
var b = new Gerente_1.Gerente("0122300", 12, "a2dmin", "ge3rente@admin.com", "admin");
var repositoriodeusuarios = new RepositorioUsuario_1.RepositorioUsuario;
var repositoriodeprodutos = new RepositorioProduto_1.RepositorioProduto;
repositoriodeusuarios.adicionarUsuario(g.getemail(), g);
repositoriodeusuarios.adicionarUsuario(b.getemail(), b);
repositoriodeusuarios.adicionarUsuario(a.getemail(), a);
for (var _i = 0, _a = repositoriodeusuarios.get().values(); _i < _a.length; _i++) {
    var x = _a[_i];
    if (x instanceof Cliente_1.Cliente) {
        console.log(x);
    }
}
/*
while (fechar != "sim"){
    console.log("****Bem Vindo****");
    console.log("1 - Logar");
    console.log("2 - Cadastrar-se como cliente");
    console.log("3 - sair")
    op = parseInt (input ("Digite a opção: <ENTER>"));
    if (op == 1){
        console.log("Faça seu Login")
        login = input("Digite seu login(emai-l): <ENTER>");
        senha = input("Digite sua senha: <ENTER>");
        try{repositoriodeusuarios.retornarUsuario(login)
            let a = repositoriodeusuarios.retornarUsuario(login).getsenha;
            if ((a as any) !== (senha as any)){
                console.log("A senha errada");
            }
            if (repositoriodeusuarios.retornarUsuario(login) instanceof Cliente){
                log = 1;
            }
            else if (repositoriodeusuarios.retornarUsuario(login) instanceof OperadorDeSistema){
                log = 2;
            }
            else if (repositoriodeusuarios.retornarUsuario(login) instanceof Gerente){
                log = 3;
            }
        }catch (ex){
            console.log(ex);
        }
    }
    else if (op == 2){
        console.log("Vamos criar o seu cadastro");
        console.log("Preencha as informaçoes com seus dados pessoais");
        let nome: string= input("Digite seu nome: <ENTER>");
        let datanascimento: Data = new Data(parseInt(input("informe a o dia")),
                                    parseInt(input("informe a o mes")),
                                    parseInt(input("informe a o ano")) );
        let endereco: string = input("Informe seu endereco: <ENTER>");
        console.log("Para efetuar seu cadastro precisamos de seus dados de pagamento");
        let cartao: CartaoDeCredito = new CartaoDeCredito(input("Informe o numero de seu cartão"),
                                                             new Data(parseInt(input("informe a o dia")),
                                                            parseInt(input("informe a o mes")),
                                                            parseInt(input("informe a o ano")) ),
                                                            parseInt(input("Informe o codigo CVV: <ENTER>")),
                                                            parseInt(input("Informe o limite de seu cartão: <ENTER>")));
        console.log("Agora é só informar um email e uma senha");
        let email: string = input("Informe seu email: <ENTER>");
        let senha: string = input("Informe uma senha: <ENTER>");
        let cliente : Cliente = new Cliente(nome, email, senha, endereco, datanascimento, cartao);
        repositoriodeusuarios.adicionarUsuario(email, cliente);
        op = 1;



    }
    else if (op == 3){
        console.log("voce deseja mesmo sair?");
        console.log("   sim          nao");
        fechar = input("Digite sua opção: <ENTER>");

    }
}*/ 
