declare function require(nome : string) : any;
var readline = require('readline-sync');
export function input(name : string) : string {
    return readline.question(name);
}

import { Gerente } from "../Usuario/Funcionario/Gerente/Gerente";
import { RepositorioUsuario } from "../Repositorios/RepositorioUsuario";
import { RepositorioProduto } from "../Repositorios/RepositorioProduto";
import { Data } from "../Data/Data";

let op: number = 1;
let log: number = 1;
let logout: number = "sim";
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
    }
    else if (op == 2){
        console.log("Vamos criar o seu cadastro");
        console.log("Preencha as informaçoes com seus dados pessoais");
        let nome: string= input("Digite seu nome: <ENTER>");
        let endereco: string = input("Informe seu endereco: <ENTER>");
        console.log("Para efetuar seu cadastro precisamos de seus dados de pagamento";)
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