import { ProdutoAbstract } from './ProdutoAbstract';

export abstract class Videos extends ProdutoAbstract{
    protected anoLancamento: number;
    protected faixaEtaria: number;

    public constructor(codigo: string, nome: string, genero: string, preco: number,
            anoLancamento: number, faixaEtaria: number){
        
        super(codigo, nome, genero, preco)
        this.anoLancamento = anoLancamento;
        this.faixaEtaria = faixaEtaria;
    }
    
    public getAnoLancamento(): number{
        return this.anoLancamento;
    } 
    public setAnoLancamento(anoLancamento: number): void{
        this.anoLancamento = anoLancamento;
    }
    
    public getFaixaEtaria(): number{
        return this.faixaEtaria;
    }
    public setFaixaEtaria(faixaEtaria): void{
        this.faixaEtaria = faixaEtaria;
    }

    abstract executar() : void;
}