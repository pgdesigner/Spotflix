import {FuncionarioAbstract} from'../FuncionarioAbstract';
import {RepositorioUsuario} from '../../../Repositorios/RepositorioUsuario':
export class Gerente extends FuncionarioAbstract{
    public constructor(matricula: string, salario: number, nome: string, email: string, senha: string){
        super(matricula,salario,nome,email,senha);
    }
    public AdicionarOperadores(){

    }
    public RemoverOperadores(){

    }
    public ListarosClienteseProdutoseOperadores(){

    }
    public ProcurarClienteeProdutoeOperadoresporemailoucodigo(){
        
    }
}