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
var Data_1 = require("../Data/Data");
var OperadorDeSistema_1 = require("../Usuario/Funcionario/OperadorDeSistema/OperadorDeSistema");
var Cliente_1 = require("../Usuario/Cliente/Cliente");
var ProdutoAbstract_1 = require("../Produto/ProdutoAbstract");
var op = 1;
var log = 1;
var logout = "sim";
var fechar = "não";
var senha;
var login;
var g = new Gerente_1.Gerente("000000", 12, "admin", "gerente@admin.com", "admin");
var repositoriodeusuarios = new RepositorioUsuario_1.RepositorioUsuario;
var repositoriodeprodutos = new RepositorioProduto_1.RepositorioProduto;
while (fechar != "sim") {
    console.log("****Bem Vindo****");
    console.log("1 - Logar");
    console.log("2 - Cadastrar-se como cliente");
    console.log("3 - sair");
    op = parseInt(input("Digite a opção: <ENTER>"));
    if (op == 1) {
        console.log("Faça seu Login");
        login = input("Digite seu login(emai-l): <ENTER>");
        senha = input("Digite sua senha: <ENTER>");
        try {
            repositoriodeusuarios.retornarUsuario(login);
            var a = repositoriodeusuarios.retornarUsuario(login).getsenha;
            if (a !== senha) {
                console.log("A senha errada");
            }
            if (repositoriodeusuarios.retornarUsuario(login) instanceof Cliente_1.Cliente) {
                log = 1;
            }
            else if (repositoriodeusuarios.retornarUsuario(login) instanceof OperadorDeSistema_1.OperadorDeSistema) {
                log = 2;
            }
            else if (repositoriodeusuarios.retornarUsuario(login) instanceof Gerente_1.Gerente) {
                log = 3;
            }
        }
        catch (ex) {
            console.log(ex);
        }
        if (log == 3) {
            console.log("****Olá Gerente" + g + "****");
            console.log("1 - Cadastrar Operador");
            console.log("2 - Remover Operador");
            console.log("3 - Listar de Produtos");
            console.log("4 - Listar de Clientes");
            console.log("5 - Listar de Operadores");
            console.log("6 - Procurar Produto");
            console.log("7 - Procurar Cliente");
            console.log("8 - Procurar Operador");
            console.log("9 - Sair");
            op = parseInt(input("Digite a opção: <ENTER>"));
            if (op == 1) {
                console.log("**Cadastro do Operador**");
                console.log("Preencha todos os dados");
                var nome = input("Digite o nome: <ENTER>");
                var matricula = input("Digite a matrícula: <ENTER>");
                var salario = parseInt(input("Digite o valor do salário: <ENTER>"));
                var email = input("Informe o email: <ENTER>");
                var senha_1 = input("Informe uma senha: <ENTER>");
                var ope = new OperadorDeSistema_1.OperadorDeSistema(matricula, salario, nome, email, senha_1);
                repositoriodeusuarios.adicionarUsuario(email, ope);
            }
            else if (op == 2) {
                var matricula = input("Informe a Matrícula: <ENTER>");
                repositoriodeusuarios.removerUsuario(matricula);
            }
            else if (op == 3 || 4 || 5) {
                if (op == 3) {
                    console.log("**Listagem de produtos**");
                    var a = repositoriodeprodutos.get().values;
                    for (var _i = 0, _a = a(); _i < _a.length; _i++) {
                        var x = _a[_i];
                        if (x instanceof ProdutoAbstract_1.ProdutoAbstract) {
                            console.log(x);
                        }
                    }
                }
                else if (op == 4) {
                    console.log("**Listagem de clientes**");
                    var a = repositoriodeusuarios.get().values;
                    for (var _b = 0, _c = a(); _b < _c.length; _b++) {
                        var x = _c[_b];
                        if (x instanceof Cliente_1.Cliente) {
                            console.log(x);
                        }
                    }
                }
                else if (op == 5) {
                    console.log("**Listagem de operadores**");
                    var a = repositoriodeusuarios.get().values;
                    for (var _d = 0, _e = a(); _d < _e.length; _d++) {
                        var x = _e[_d];
                        if (x instanceof OperadorDeSistema_1.OperadorDeSistema) {
                            console.log(x);
                        }
                    }
                }
            }
            else if (op == 6 || 7 || 8) {
                if (op == 6) {
                    var codigo = input("Informe o código do produto: <ENTER>");
                    repositoriodeprodutos.retornarProduto(codigo);
                }
                else if (op == 7) {
                    var email = input("Informe o email do cliente: <ENTER>");
                    repositoriodeusuarios.retornarUsuario(email);
                }
                else if (op == 8) {
                    var email = input("Informe o email do cliente: <ENTER>");
                    repositoriodeusuarios.retornarUsuario(email);
                }
            }
            else if (op == 9) {
                console.log("Voce deseja mesmo sair?");
                console.log("   sim          nao");
                fechar = input("Digite sua opção: <ENTER>");
            }
        }
        else if (log == 2) {
            console.log("****Olá Operador <Nome do Operador>****");
            console.log("1 - Cadastrar Produtos");
            console.log("2 - Remover Produtos");
            console.log("3 - Listar de Produtos");
            console.log("4 - Listar de Clientes");
            console.log("5 - Procurar Produto");
            console.log("6 - Procurar Cliente");
            console.log("7 - Sair");
            op = parseInt(input("Digite a opção: <ENTER>"));
            if (op == 1) {
                console.log("***Cadastro de Produto***");
                console.log("**Preencha todos os dados**");
                var codigo = input("Digite código do produto: <ENTER>");
                var nome = input("Digite nome do produto: <ENTER>");
                var genero = input("Insira o gênero do produto: <ENTER>");
                var preco = input("Insira o preço do produto: <ENTER>");
                if (nome == "Audio") { }
            }
            else if (op == 2) {
            }
            else if (op == 3) {
            }
            else if (op == 4) {
            }
            else if (op == 5) {
            }
            else if (op == 6) {
            }
            else if (op == 7) {
            }
        }
        else if (log == 1) {
            console.log("****Olá <Nome do Cliente>****");
            console.log("1 - Listar Produtos da Loja");
            console.log("2 - Listar meus Produtos");
            console.log("3 - Comprar Produto");
            console.log("4 - Play");
            console.log("5 - Sair");
            op = parseInt(input("Digite a opção: <ENTER>"));
            if (op == 1) {
            }
            else if (op == 2) {
            }
            else if (op == 3) {
            }
            else if (op == 4) {
            }
            else if (op == 5) {
            }
        }
    }
    else if (op == 2) {
        console.log("Vamos criar o seu cadastro");
        console.log("Preencha as informaçoes com seus dados pessoais");
        var nome = input("Digite seu nome: <ENTER>");
        var endereco = input("Informe seu endereco: <ENTER>");
        console.log("Para efetuar seu cadastro precisamos de seus dados de pagamento");
        var numero = input("Informe o numero de seu cartão");
        var validade = new Data_1.Data(parseInt(input("informe a o dia")), parseInt(input("informe a o mes")), parseInt(input("informe a o ano")));
        var codigocvv = parseInt(input("Informe o codigo CVV: <ENTER>"));
        var limite = parseInt(input("Informe o limite de seu cartão: <ENTER>"));
        console.log("Agora é só informar um email e uma senha");
        var email = input("Informe seu email: <ENTER>");
        var senha_2 = input("Informe uma senha: <ENTER>");
        op = 1;
    }
    else if (op == 3) {
        console.log("voce deseja mesmo sair?");
        console.log("   sim          nao");
        fechar = input("Digite sua opção: <ENTER>");
    }
}
