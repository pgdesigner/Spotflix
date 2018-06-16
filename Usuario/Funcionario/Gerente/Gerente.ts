import {FuncionarioAbstract} from'../FuncionarioAbstract';
import {RepositorioUsuario} from '../../../Repositorios/RepositorioUsuario';
import { OperadorDeSistema } from '../OperadorDeSistema/OperadorDeSistema';
export class Gerente extends FuncionarioAbstract{
    public constructor(matricula: string, salario: number, nome: string, email: string, senha: string){
        super(matricula,salario,nome,email,senha);
    }
}