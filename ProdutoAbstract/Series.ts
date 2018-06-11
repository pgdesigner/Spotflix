import { Videos } from './Videos';

export class Series extends Videos{
    numeroDeEp: number;
    duracaoMediaDeEp: number;

    public constructor(anoLancamento: number, faixaEtaria: number,
            codigo: string, nome: string, genero: string, 
            preco: number, numeroDeEp: number, duracaoMediaDeEp: number){
        
        super(codigo, nome, genero, preco, 
                anoLancamento, faixaEtaria)
        this.numeroDeEp = numeroDeEp;
        this.duracaoMediaDeEp = duracaoMediaDeEp;
    }

    public getNumeroDeEp(): number{
        return this.numeroDeEp;
    }
    public setNumeroDeEp(numeroDeEp: number): void{
        this.numeroDeEp = numeroDeEp;
    }

    public getDuracaoMediaDeEp(): number{
        return this.duracaoMediaDeEp;
    }
    public setDuracaoMediaDeEp(duracaoMediaDeEp: number): void{
        this.duracaoMediaDeEp = duracaoMediaDeEp;
    }

    public executar(){

    }

}