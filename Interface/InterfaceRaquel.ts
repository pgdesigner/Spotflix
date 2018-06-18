declare function require(nome : string) : any;
var readline = require('readline-sync');
export function input(name : string) : string {
    return readline.question(name);
}

import { Gerente } from "../Usuario/Funcionario/Gerente/Gerente";
import { RepositorioUsuario } from "../Repositorios/RepositorioUsuario";
import { RepositorioProduto } from "../Repositorios/RepositorioProduto";
import { Data } from "../Data/Data";
import { UsuarioAbstract } from "../Usuario/UsuarioAbstract";
import { OperadorDeSistema } from "../Usuario/Funcionario/OperadorDeSistema/OperadorDeSistema";

let op: number = 1;
let log: number = 1;
let logout: string = "sim";
let fechar: string = "não";
let senha: string;
let login: string;
let g: Gerente = new Gerente("000000",12,"admin","gerente@admin.com","admin");
let repositoriodeusuarios : RepositorioUsuario = new RepositorioUsuario;
let repositoriodeprodutos: RepositorioProduto = new RepositorioProduto;




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

        if (login  ){
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
            op = parseInt (input ("Digite a opção: <ENTER>"));
            if (op == 1){
                console.log("**Cadastro do Operador**");
                console.log("Preencha todos os dados");
                let nome:string = input("Digite o nome: <ENTER>");
                let matricula:string = input("Digite a matrícula: <ENTER>");
                let salario: number = parseInt(input("Digite o valor do salário: <ENTER>"))
                let email:string = input("Informe o email: <ENTER>");
                let senha: string = input("Informe uma senha: <ENTER>");
                let ope: UsuarioAbstract = new OperadorDeSistema(matricula,salario,nome,email,senha);
                repositoriodeusuarios.adicionarUsuario(email, ope);
                
            }
            else if (op == 2){
                let matricula:string = input("Informe a Matrícula: <ENTER>");
                repositoriodeusuarios.removerUsuario(matricula);
            }
            else if (op == 3 || 4 || 5){
                if (op == 3){
                    
                }
                else if (op == 4){
                    
                }
                else if (op == 5){
                    
                }
            }
            else if (op == 6 || 7 || 8){
                if (op == 6){
                    let codigo: string = input("Informe o código do produto: <ENTER>")
                    repositoriodeprodutos.retornarProduto(codigo);
                }
                else if (op == 7){
                    let email: string = input("Informe o email do cliente: <ENTER>")
                    repositoriodeusuarios.retornarUsuario(email);
                }
                else if (op == 8){
                    let email: string = input("Informe o email do cliente: <ENTER>")
                    repositoriodeusuarios.retornarUsuario(email);
                }
            }
            else if (op == 9){
                console.log("Voce deseja mesmo sair?")
                console.log("   sim          nao");
                fechar = input("Digite sua opção: <ENTER>");
            }
            
        }

        else if (login  ){
            console.log("****Olá Operador <Nome do Operador>****");
            console.log("1 - Cadastrar Produtos");
            console.log("2 - Remover Produtos");
            console.log("3 - Listar de Produtos");
            console.log("4 - Listar de Clientes");
            console.log("5 - Procurar Produto");
            console.log("6 - Procurar Cliente");
            console.log("7 - Sair");
            op = parseInt (input ("Digite a opção: <ENTER>"));
            if (op == 1){
                
            }
            else if(op == 2){

            }
            else if(op == 3){
                
            }
            else if(op == 4){
                
            }
            else if(op == 5){
                
            }
            else if(op == 6){
                
            }
            else if(op == 7){
                
            }
        }   
        
        else if (login  ){
            console.log("****Olá <Nome do Cliente>****");
            console.log("1 - Listar Produtos da Loja");
            console.log("2 - Listar meus Produtos");
            console.log("3 - Comprar Produto");
            console.log("4 - Play");
            console.log("5 - Sair");
            op = parseInt (input ("Digite a opção: <ENTER>"));
            if (op == 1){
                
            }
            else if(op == 2){

            }
            else if(op == 3){
                
            }
            else if(op == 4){
                
            }
            else if(op == 5){
                
            }
        } 
    }
    else if (op == 2){
        console.log("Vamos criar o seu cadastro");
        console.log("Preencha as informaçoes com seus dados pessoais");
        let nome: string= input("Digite seu nome: <ENTER>");
        let endereco: string = input("Informe seu endereco: <ENTER>");
        console.log("Para efetuar seu cadastro precisamos de seus dados de pagamento")
        let numero:string = input("Informe o numero de seu cartão");
        let validade: Data = new Data(parseInt(input("informe a o dia")),parseInt(input("informe a o mes")),parseInt(input("informe a o ano")) )        
        let codigocvv: number = parseInt(input("Informe o codigo CVV: <ENTER>"))
        let limite: number = parseInt(input("Informe o limite de seu cartão: <ENTER>"))
        console.log("Agora é só informar um email e uma senha");
        let email: string = input("Informe seu email: <ENTER>");
        let senha: string = input("Informe uma senha: <ENTER>");
        op = 1;



    }
    else if (op == 3){
        console.log("voce deseja mesmo sair?")
        console.log("   sim          nao");
        fechar = input("Digite sua opção: <ENTER>");

    }
}