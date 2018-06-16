import { UsuarioAbstract } from "../../Usuario/UsuarioAbstract";
import { Gerente } from "../../Usuario/Funcionario/Gerente/Gerente";

export class RepositorioUsuario {
    private repositorio : Map<string,UsuarioAbstract>;

    public constructor(){
        this.repositorio = new Map<string,UsuarioAbstract>()
    }
    public adicionarUsuario(usuario: UsuarioAbstract) : boolean{
        this.repositorio.set(usuario.getemail(), usuario);
        return true; 
    }
    public removerUsuario(email:string) : boolean{
        return this.repositorio.delete(email);
    }
    public retornarUsuario(email:string) : UsuarioAbstract|undefined{
        return this.repositorio.get(email)
    }

    public adicionarGerente(gerente: Gerente) : boolean{
        this.repositorio.set(gerente.getemail(), gerente);
        return true;
    }
    public removerGerente(email:string) : boolean{
        return this.repositorio.delete(email);
    }
}