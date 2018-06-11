import { ProdutoAbstract } from '../ProdutoAbstract/ProdutoAbstract';
import {Data} from '../Data/Data';

export class Pacote extends ProdutoAbstract{
    private produtos: Array<ProdutoAbstract>;
    private validade: Data;
    private precoMensal: number;

    public constructor(codigo: string, nome: string, genero: string, 
                preco: number, produtos: Array<ProdutoAbstract>,
                validade: Data, precoMensal: number){
        
        super(codigo, nome, genero, preco)
        this.produtos = produtos;
        this.validade = validade;
        this.precoMensal = precoMensal;
    }

    public getProdutos(): Array<ProdutoAbstract>{
        return this.produtos;
    }
    public setProdutos(produtos: Array<ProdutoAbstract>): void{
        this.produtos = produtos;
    }

    public getValidade(): Data{
        return this.validade;
    }
    public setValidade(validade: Data): void{
        this.validade = validade;
    }

    public getPrecoMensal(): number{
        return this.precoMensal
    }
    public setPrecoMensal(precoMensal: number): void{
        this.precoMensal = precoMensal;    
    }

    //public somaPrecoProduto() : void{
    //    for(let i

    public executar(): void{

    }
}

