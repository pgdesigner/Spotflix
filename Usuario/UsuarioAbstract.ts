export abstract class UsuarioAbstract{
    protected nome: string;
    protected email: string;
    protected senha: string;
    
    public constructor(nome: string, email: string, senha: string){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    public getnome(): string{
        return this.nome;
    }
    public setnome(nome: string): void{
        this.nome = nome;
    }
    public getemail(): string{
        return this.email;
    }
    public setemail(email: string): void{
        this.email = email;
    }
    public getsenha(): string{
        return this.senha;
    }
    public setsenha(senha: string): void{
        this.senha = senha;
    }
}