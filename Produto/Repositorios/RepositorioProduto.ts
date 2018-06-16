import { ProdutoAbstract } from "../ProdutoAbstract";

export class RepositorioProduto{
    private repositorioP : Map<string,ProdutoAbstract>;

    public constructor(){
        this.repositorioP = new Map<string,ProdutoAbstract>;
    }

    
}