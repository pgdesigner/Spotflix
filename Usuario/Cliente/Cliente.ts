import {UsuarioAbstract} from'../UsuarioAbstract';
import {Data} from '../../Data/Data';
import {ProdutoAbstract} from'../../Produto/ProdutoAbstract';
import{CartaoDeCredito} from'../../CartaoDeCredito/CartaoDeCredito';

export class Cliente extends UsuarioAbstract{
    private endereco: string
    private dataDeNascimento: Data;
    private listaDeProduto: Array<ProdutoAbstract>;
    private cartaoDeCredito: CartaoDeCredito;
    public constructor(nome: string, email: string, senha: string, endereco: string, dataDeNascimento: Data, cartaoDeCredito: CartaoDeCredito){
        super(nome,email,senha);
        this.endereco = endereco;
        this.dataDeNascimento = dataDeNascimento;
        this.listaDeProduto = [];
        this.cartaoDeCredito = cartaoDeCredito;
    }
    public getEndereco(): string{
        return this.endereco;
    }
    public setEndereco(endereco: string): void{
        this.endereco = endereco;
    }
    public getDataDeNascimento(): Data{
        return this.dataDeNascimento;
    }
    public setDataDeNascimento(dataDeNascimento: Data): void{
        this.dataDeNascimento = dataDeNascimento
    }
    public getListaDeProduto(): Array<ProdutoAbstract>{// A lista que contem os produtos comprados
        return this.listaDeProduto;
    }
    public setListaDeProduto(listaDeProduto: Array<ProdutoAbstract>): void{
        this.listaDeProduto = listaDeProduto;
    }
    public getCartaoDeCredito(): CartaoDeCredito {
        return this.cartaoDeCredito;
    }
    public setCartaoDeCredito(cartaoDeCredito: CartaoDeCredito): void{
        this.cartaoDeCredito = cartaoDeCredito;
    }
}
