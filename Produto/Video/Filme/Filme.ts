import { VideoAbstract } from '../VideoAbstract'
export class Filme extends VideoAbstract{
    private duracao: number;//minutos
    
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