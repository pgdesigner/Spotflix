import { UsuarioAbstract } from "../../Usuario/UsuarioAbstract";

export class RepositorioUsuario {
    private repositorio : Map<string,UsuarioAbstract>;

    public constructor(repositorio: Map<string, UsuarioAbstract>){
        this.repositorio = new Map<string,UsuarioAbstract>()
    }
    public adicionarUsuario(email:string, usuario: UsuarioAbstract) : boolean{
        if (this.repositorio.has(email)){
            throw "Usuário de email: " + email + "já existe"
        }
        this.repositorio.set(email, usuario);
        return true; 
    }
    public removerUsuario(email:string){
        if (!this.repositorio.delete(email))
            throw "Usuário de email: " + email + "não existe"
    }
    public retornarUsuario(email:string) : UsuarioAbstract{
        let usuario = this.repositorio.get(email);
        if (!usuario)
            throw "Usuário de email: " + email + "não existe"
        return usuario;
    }

}