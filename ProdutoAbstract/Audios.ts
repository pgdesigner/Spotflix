import { ProdutoAbstract } from './ProdutoAbstract';

export abstract class Audios extends ProdutoAbstract{
    protected autor: string;
    protected duracao: number;

    constructor(codigo: string, nome: string, genero: string, 
            preco: number,autor: string, duracao: number){
        
        super(codigo, nome, genero, preco)
        this.autor = autor;
        this.duracao = duracao;
        }

    public getAutor(): string{
        return this.autor;
    }
    public setAutor(autor: string): void{
        this.autor = autor;
    }  
    
    public getDuracao(): number{
        return this.duracao;
    }
    public setDuracao(duracao: number): void{
        this.duracao = duracao;
    } 

    abstract executar() : void;
}