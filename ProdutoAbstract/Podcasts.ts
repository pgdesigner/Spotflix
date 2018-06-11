import {Audios} from './Audios';

export class Podcasts extends Audios{
    private tematica: string;

    public constructor(codigo: string, nome: string, genero: string,
            preco: number, autor: string, duracao: number, 
            tematica: string){
        
        super(codigo, nome, genero, preco, autor, duracao)
        this.tematica = tematica;
    }

    public getTematica(): string{
        return this.tematica;
    }
    public setTemtica(tematica: string): void{
        this.tematica = tematica;
    }

    public executar(): void{

    }
}