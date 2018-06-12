import {UsuarioAbstract} from '../UsuarioAbstract'

export abstract class FuncionarioAbstract extends UsuarioAbstract{
    protected matricula: string;
    protected salario: number;
    public constructor(matricula: string, salario: number, nome: string, email: string, senha: string){
        super(nome,email,senha)
        this.matricula = matricula;
        this.salario = salario;
    }
    public getmatricula(): string{
        return this.matricula;
    }
    public setmatricula(matricula: string): void{
        this.matricula = matricula;
    }
    public getsalario(): number{
        return this.salario;
    }
    public setsalario(salario: number): void{
        this.salario = salario;
    }
}