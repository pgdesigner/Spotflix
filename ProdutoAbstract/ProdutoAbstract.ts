export abstract class ProdutoAbstract{
    protected codigo: string;
    protected nome: string;
    protected genero: string;
    protected preco: number;

    public constructor(codigo: string, nome: string,
                        genero: string, preco: number){
    this.codigo == codigo;
    this.nome == nome;
    this.genero == genero;
    this.preco == preco;

    }
    public getCodigo(): string{
        return this.codigo;
    }
    public setCodigo(codigo: string): void{
        this.codigo = codigo;
    }
}