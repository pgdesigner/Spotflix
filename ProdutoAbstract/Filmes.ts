import { Videos } from './Videos';

export class Filme extends Videos{
    private duracao: number;
    
    public constructor(anoLancamento: number, faixaEtaria: number,
            codigo: string, nome: string, genero: string, 
            preco: number,duracao: number){
        
        super(codigo, nome, genero, preco, 
                anoLancamento, faixaEtaria)
        this.duracao = duracao;
    }

    public getDuracao(): number{
        return this.duracao;
    }
    public setDuracao(duracao: number): void{
        this.duracao = duracao;
    }

    public executar(){

    }
}