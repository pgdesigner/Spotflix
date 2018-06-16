import { Gerente } from "../Usuario/Funcionario/Gerente/Gerente";
import { RepositorioUsuario } from "../Repositorios/RepositorioUsuario";
import { RepositorioProduto } from "../Repositorios/RepositorioProduto";

declare function require(name:string): any;
var readline = require('readline-sync');

class Interface{
    
}
let g: Gerente = new Gerente("000000",12,"admin","gerente@admin.com","admin");
let repositoriodeusuarios : RepositorioUsuario = new RepositorioUsuario;
let repositoriodeprodutos: RepositorioProduto = new RepositorioProduto;