import { ProdutoAbstract } from '../Produto/ProdutoAbstract';

export class RepositorioProduto{
    private repositorioP : Map<string,ProdutoAbstract>;

    public constructor(repositorioP: Map<ProdutoAbstract>){
        this.repositorioP = new Map<string,ProdutoAbstract>();
    }

    public adicionarProduto(codigo:string, produto:ProdutoAbstract) : boolean{
        if (this.repositorioP.has(codigo)){
            throw "Codigo de produto: " + codigo + "já existe"
        }
        this.repositorioP.set(codigo, produto);
        return true;
    }
    public removerProduto(codigo: string){
        if (!this.repositorioP.delete(codigo))
            throw "Codigo de produto: " + codigo + "não existe"    
    }
    public retornarProduto(codigo: string): ProdutoAbstract|undefined{
        let produto = this.repositorioP.get(codigo);
        if (!produto)
            throw "Codigo de produto: " + codigo + "não existe"
        return produto;
       
    }  
}