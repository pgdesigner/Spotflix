import {UsuarioAbstract} from'../UsuarioAbstract';
import {Data} from '../../Data/Data';
import {ProdutoAbstract} from'../../Produto/ProdutoAbstract';
import{CartaoDeCredito} from'../../CartaoDeCredito/CartaoDeCredito';

export abstract class ClienteAbstract extends UsuarioAbstract{
    protected endereco: string
    protected dadaDeNascimento: Data;
    protected listaDeProduto: Array<ProdutoAbstract>;
    protected cartaoDeCredito: CartaoDeCredito;
    public constructor(nome: string, email: string, senha: string, endereco: string, dataDeNascimento: Data, listaDeProduto: Array<ProdutoAbstract>, cartaoDeCredito: CartaoDeCredito){
        super(nome,email,senha);
        this.endereco = endereco;
        this.dadaDeNascimento = dataDeNascimento;
        this.listaDeProduto = listaDeProduto;
        this.cartaoDeCredito = cartaoDeCredito;
    }
    public getEndereco(): string{
        return this.endereco;
    }
    public setEndereco(endereco: string): void
}
