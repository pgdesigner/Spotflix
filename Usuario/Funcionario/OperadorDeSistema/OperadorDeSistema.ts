import {FuncionarioAbstract} from'../FuncionarioAbstract';
export class OperadorDeSistema extends FuncionarioAbstract{
    public constructor(matricula: string, salario: number, nome: string, email: string, senha: string){
        super(matricula,salario,nome,email,senha);
    }
    public AdicionarProdutos(){

    }
    public RemoverProdutos(){

    }
    public ListarosClienteseProdutos(){

    }
    public ProcurarClienteeProdutoporemailoucodigo(){
        
    }
}