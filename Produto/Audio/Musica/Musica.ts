import {AudioAbstract} from '../AudioAbstract';

export class Musicas extends AudioAbstract{
    private album: string;

    public constructor(codigo: string, nome: string, genero: string, 
            preco: number, autor: string,album: string, duracao: number){
        
        super(codigo, nome, genero, preco, autor, duracao)
        this.album = album;
    }

    public getAlbum(): string{
        return this.album;
    }
    public setAlbum(album: string){
        this.album = album;
    }
    
    public executar(): void{

    }
}