declare function require(nome : string) : any;
var readline = require('readline-sync');
export function input(name : string) : string {
    return readline.question(name);
}
import {Map} from '../Map/Map';
import { Gerente } from "../Usuario/Funcionario/Gerente/Gerente";
import { RepositorioUsuario } from "../Repositorios/RepositorioUsuario";
import { RepositorioProduto } from "../Repositorios/RepositorioProduto";
import { Data } from "../Data/Data";
import { UsuarioAbstract } from "../Usuario/UsuarioAbstract";
import { OperadorDeSistema } from "../Usuario/Funcionario/OperadorDeSistema/OperadorDeSistema";
import {Cliente} from "../Usuario/Cliente/Cliente";
import { ProdutoAbstract } from "../Produto/ProdutoAbstract";
import { Musica } from "../Produto/Audio/Musica/Musica";
import { Podcasts } from "../Produto/Audio/Podcast/Podcast";
import { Filme } from "../Produto/Video/Filme/Filme";
import { Series } from "../Produto/Video/Serie/Serie";
import { Pacote } from "../Produto/Pacote/Pacote";
import { CartaoDeCredito } from '../CartaoDeCredito/CartaoDeCredito';

let op: number = 1;
let log: number = 1;
let log2: number = 2;
let log3: number = 3;
let logout: string = "sim";
let fechar: string = "não";
let senha: string;
let login: string;
let repositoriodeusuarios : RepositorioUsuario = new RepositorioUsuario;
let repositoriodeprodutos: RepositorioProduto = new RepositorioProduto;
let email = "gerente@admin.com"
let senhaA = "admin"
let g: UsuarioAbstract = new Gerente("000000",12,"admin", email,senhaA);
repositoriodeusuarios.adicionarUsuario(email,g);




while (fechar != "sim"){
    console.log("****Bem Vindo****");
    console.log("1 - Logar");
    console.log("2 - Cadastrar-se como cliente");
    console.log("3 - sair")
    op = parseInt (input ("Digite a opcao: <ENTER>"));
    if (op == 1){
        console.log("Faça seu Login")
        login = input("Digite seu login(emai-l): <ENTER>");
        senha = input("Digite sua senha: <ENTER>");
        
        try{let a = repositoriodeusuarios.retornarUsuario(login).getsenha; 
            if (a() != senha){
                console.log("A senha errada");
            }
            else if (repositoriodeusuarios.retornarUsuario(login) instanceof Cliente){
                log = 1;
            }
            else if (repositoriodeusuarios.retornarUsuario(login) instanceof OperadorDeSistema){
                log2 = 2;
            }
            else if (repositoriodeusuarios.retornarUsuario(login) instanceof Gerente){
                log3 = 3;
            }
        }catch (ex){
            console.log(ex);
        }
        if (log3 == 3){
            console.log("****Olá Gerente" + repositoriodeusuarios.retornarUsuario(login) + "****");
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
                    console.log("**Listagem de produtos**");
                    let a = repositoriodeprodutos.get().values
                    for( let x of a()){
                        if (x instanceof ProdutoAbstract){
                        console.log(x);
                        }
                    }
                }
                else if (op == 4){
                    console.log("**Listagem de clientes**");
                    let a = repositoriodeusuarios.get().values
                    for( let x of a()){
                        if (x instanceof Cliente){
                        console.log(x);
                        }
                    }
                }
                else if (op == 5){
                    console.log("**Listagem de operadores**");
                    let a = repositoriodeusuarios.get().values
                    for( let x of a()){
                        if (x instanceof OperadorDeSistema){
                        console.log(x);
                        }
                    }
                }
            }
            
            else if (op == 6){
                let codigo: string = input("Informe o código do produto: <ENTER>");
                console.log(repositoriodeprodutos.retornarProduto(codigo));
            }
            else if (op == 7){
                let email: string = input("Informe o email do cliente: <ENTER>");
                console.log(repositoriodeusuarios.retornarUsuario(email));
            }
            else if (op == 8){
                let email: string = input("Informe o email do operador: <ENTER>");
                console.log(repositoriodeusuarios.retornarUsuario(email));
                
            }
            else if (op == 9){
                console.log("Voce deseja mesmo sair?");
                console.log("   Sim          Não");
                fechar = input("Digite sua opção: <ENTER>");
            }   
        }
        else if (log3 == 3){
            console.log("****Olá Operador" + repositoriodeusuarios.retornarUsuario(login) +"****");
            console.log("1 - Cadastrar Produtos");
            console.log("2 - Remover Produtos");
            console.log("3 - Listar de Produtos");
            console.log("4 - Listar de Clientes");
            console.log("5 - Procurar Produto");
            console.log("6 - Procurar Cliente");
            console.log("7 - Sair");
            op = parseInt (input ("Digite a opção: <ENTER>"));
            if (op == 1){
                console.log("***Cadastro de Produto***");
                console.log("1 - Áudios");
                console.log("2 - Vídeos");
                console.log("3 - Pacotes")
                op = parseInt (input ("Digite a opção: <ENTER>"));
                if (op == 1){
                    console.log("***Cadastro de Áudios***");
                    console.log("1 - Música");
                    console.log("2 - Podcast");
                    op = parseInt (input ("Digite a opção: <ENTER>"));
                    if (op == 1){
                        console.log("***Cadastro de Música***");
                        console.log("**Preencha todos os dados**");
                        let codigo = input("Digite código do produto: <ENTER>");
                        let nome = input("Digite nome do produto: <ENTER>");
                        let genero = input("Insira o gênero do produto: <ENTER>");
                        let preco = readline.question("Insira o preço do produto: <ENTER>");
                        let autor = input("Digite o autor da música: <ENTER>");
                        let album = input("Digite o álbum: <ENTER>");
                        let duracao = readline.question("Insira a duração da música: <ENTER>");
                        let music: ProdutoAbstract = new Musica(codigo, nome, genero, preco,
                                                autor, album, duracao);
                        repositoriodeprodutos.adicionarProduto(codigo, music);
                    }
                    else if (op == 2){
                        console.log("***Cadastro de Podcast***");
                        console.log("**Preencha todos os dados**");
                        let codigo = input("Digite código do produto: <ENTER>");
                        let nome = input("Digite nome do produto: <ENTER>");
                        let genero = input("Insira o gênero do produto: <ENTER>");
                        let preco = readline.question("Insira o preço do produto: <ENTER>");
                        let autor = input("Digite o autor da música: <ENTER>");
                        let duracao = readline.question("Insira a duração da música: <ENTER>");
                        let tematica = input("Digite a temática do podcast: <ENTER>");
                        let podC: ProdutoAbstract = new Podcasts(codigo, nome, genero, preco,
                                                autor, duracao, tematica);
                        repositoriodeprodutos.adicionarProduto(codigo, podC);
                    }
                }
                else if (op == 2){
                    console.log("***Cadastro de Vídeos***");
                    console.log("1 - Filmes");
                    console.log("2 - Séries");
                    op = parseInt (input ("Digite a opção: <ENTER>"));
                    if (op == 1){
                        console.log("***Cadastro de filmes***");
                        console.log("**Preencha todos os dados**");
                        let anoDeLancamento = readline.question("Insira o ano de lançamento do filme: <ENTER>");
                        let faixaEtaria = readline.question("Insira a faixa etária do filme: <ENTER>");
                        let codigo = input("Digite código do produto: <ENTER>");
                        let nome = input("Digite nome do produto: <ENTER>");
                        let genero = input("Insira o gênero do produto: <ENTER>");
                        let preco = readline.question("Insira o preço do produto: <ENTER>");
                        let duracao = readline.question("Insira a duração do filme em minutos: <ENTER>");
                        let film: ProdutoAbstract = new Filme(anoDeLancamento, faixaEtaria, codigo,
                                            nome, genero, preco, duracao);
                        repositoriodeprodutos.adicionarProduto(codigo, film); 
                    }
                    else if (op == 2){
                        console.log("***Cadastro de séries***");
                        console.log("**Preencha todos os dados**");
                        let anoDeLancamento = readline.question("Insira o ano de lançamento da série: <ENTER>");
                        let faixaEtaria = readline.question("Insira a faixa etária da série: <ENTER>");
                        let codigo = input("Digite código do produto: <ENTER>");
                        let nome = input("Digite nome do produto: <ENTER>");
                        let genero = input("Insira o gênero do produto: <ENTER>");
                        let preco:number = readline.question("Insira o preço do produto: <ENTER>");
                        let numeroDeEp: number = readline.question("Insira a quantidades de episódios: <ENTER>");
                        let duracaoMediaEp: number = readline.question("Insira a duração media dos episódios em minutos: <ENTER>");
                        let serie: ProdutoAbstract = new Series(anoDeLancamento, faixaEtaria, codigo,
                                            nome, genero, preco, numeroDeEp, duracaoMediaEp);
                        repositoriodeprodutos.adicionarProduto(codigo, serie); 
                    }
                }
                else if (op == 3){
                    console.log("***Cadastro de Pacotes***");
                    console.log("**Preencha todos os dados**");
                    let codigo = input("Digite código do produto: <ENTER>");
                    let nome = input("Digite nome do produto: <ENTER>");
                    let genero = input("Insira o gênero do produto: <ENTER>");
                    let produtos = readline.question("Digite os produtos: <ENTER>");
                    let validade: Data = new Data(parseInt(input("informe a o dia: ")),parseInt(input("informe a o mes: ")),parseInt(input("informe a o ano: ")))
                    let pacot: ProdutoAbstract = new Pacote(codigo, nome, genero, produtos, validade);
                    repositoriodeprodutos.adicionarProduto(codigo, pacot);        
                }
            }
            else if(op == 2){
                let codigo = input("Digite código de produto: <ENTER>")
                repositoriodeprodutos.removerProduto(codigo);
            }
            else if(op == 3){
                console.log("**Listagem de produtos**");
                let a = repositoriodeprodutos.get().values
                for( let x of a()){
                    if (x instanceof ProdutoAbstract){
                    console.log(x);
                    }
                }
            }
            else if(op == 4){
                console.log("**Listagem de clientes**");
                let a = repositoriodeusuarios.get().values
                for( let x of a()){
                    if (x instanceof UsuarioAbstract){
                    console.log(x);
                    }
                }
            }
            else if(op == 5){
                let codigo = input("Digite código do produto: <ENTER>");
                console.log(repositoriodeprodutos.retornarProduto(codigo));
            }
            else if(op == 6){
                let email = input("Digite email do cliente: <ENTER>");
                console.log(repositoriodeusuarios.retornarUsuario(email));
            }
            else if(op == 7){
                console.log("Voce deseja mesmo sair?");
                console.log("   Sim          Não");
                fechar = input("Digite sua opção: <ENTER>");
            }
        }   
        else if (log == 1){
            console.log("****Olá "+ repositoriodeusuarios.retornarUsuario(login)+ "****");
            console.log("1 - Listar Produtos da Loja");
            console.log("2 - Listar meus Produtos");
            console.log("3 - Comprar Produto");
            console.log("4 - Play");
            console.log("5 - Sair");
            op = parseInt (input ("Digite a opcao: <ENTER>"));
            if (op == 1){
                console.log("**Listagem de produtos da loja**");
                let a = repositoriodeprodutos.get().values
                for( let x of a()){
                    if (x instanceof ProdutoAbstract){
                    console.log(x);
                    }
                }
            }
            else if(op == 2){
                console.log("**Listagem dos meus produtos**");
                let a = repositoriodeprodutos.get().values
                for( let x of a()){
                    if (x instanceof ProdutoAbstract){
                    console.log(x);
                    }
                }
            }
            else if(op == 3){
                
            }
            else if(op == 4){
                
            }
            else if(op == 5){
                console.log("voce deseja mesmo sair?")
                console.log("   Sim          Nao");
                fechar = input("Digite sua opçao: <ENTER>");
            }
        } 
    }
    else if (op == 2){
        console.log("Vamos criar o seu cadastro");
        console.log("Preencha as informaçoes com seus dados pessoais");
        let nome: string= input("Digite seu nome: <ENTER>");
        let endereco: string = input("Informe seu endereco: <ENTER>");
        let nacimento: Data = new Data(parseInt(input("Data de nascimento: informe a o dia")),parseInt(input("informe a o mes")),parseInt(input("informe a o ano")))
        console.log("Para efetuar seu cadastro precisamos de seus dados de pagamento")
        let numero:CartaoDeCredito = readline.question("Informe o numero de seu cartao: <ENTER>");
        let validade: Data = new Data(parseInt(input("Data de validade: informe a o dia")),parseInt(input("informe a o mes")),parseInt(input("informe a o ano")) )        
        let codigocvv: number = parseInt(input("Informe o codigo CVV: <ENTER>"))
        let limite: number = parseInt(input("Informe o limite de seu cartão: <ENTER>"))
        console.log("Agora é só informar um email e uma senha");
        let email: string = input("Informe seu email: <ENTER>");
        let senha: string = input("Informe uma senha: <ENTER>");
        let usu: UsuarioAbstract = new Cliente(nome, email, senha,endereco, validade, numero)
        op = 1;
        repositoriodeusuarios.adicionarUsuario(email, usu)
    }
    else if (op == 3){
        console.log("voce deseja mesmo sair?")
        console.log("   Sim          Nao");
        fechar = input("Digite sua opçao: <ENTER>");
    } 
}