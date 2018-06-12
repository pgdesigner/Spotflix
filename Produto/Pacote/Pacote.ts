import { ProdutoAbstract } from '../ProdutoAbstract';
import {Data} from '../../Data/Data';

export class Pacote extends ProdutoAbstract{
    private produtos: Array<ProdutoAbstract>;
    private validade: Data;
    private precoMensal: number;

    public constructor(codigo: string, nome: string, genero: string, produtos: Array<ProdutoAbstract>,
                validade: Data){
        
        super(codigo, nome, genero, 0);
        this.produtos = produtos;
        this.validade = validade;
        let p:number=0;
        for(let a of this.produtos){
            p+=a.getPreco();
        }
        this.preco = p;
        this.precoMensal = this.preco*0.15;
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

    public executar(): void{

    }
}

