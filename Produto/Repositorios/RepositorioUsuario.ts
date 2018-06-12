import { UsuarioAbstract } from "../../Usuario/UsuarioAbstract";

export class RepositorioUsuario {
    private repositorio : Map<string,UsuarioAbstract>;

    public constructor(){
        this.repositorio = new Map<string,UsuarioAbstract>()
    }
    public adicionarUsuario(usuario: UsuarioAbstract) : boolean{
        this.repositorio.set(usuario.getemail(), usuario);
        return true 
    }
    public removerUsuario(email:string) : boolean{
        return this.repositorio.delete(email);
    }
    public retornarUsuario(email:string) : UsuarioAbstract|undefined{
        return this.repositorio.get(email)
    }
}