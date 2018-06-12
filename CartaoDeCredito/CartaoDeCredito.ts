import {Data}  from'../Data/Data';
export class CartaoDeCredito{
    protected numero: string;
    protected validade: Data;
    protected codigoCVV: number;
    protected limite: number;

    public constructor(numero: string, validade: Data, codigoCVV: number, limite: number){
        this.numero = numero;
        this.validade = validade;
        this.codigoCVV = codigoCVV;
        this.limite = limite;
    }
    public getNumero(): string{
        return this.numero;
    }
    public setNumero(numero: string): void{
        this.numero = numero;
    }
    public getValidade(): Data{
        return this.validade;
    }
    public setValidade(validade: Data): void{
        this.validade = validade;
    }
    public getCodigoCVV(): number{
        return this.codigoCVV;
    }
    public setCodigoCVV(codigoCVV: number): void{
        this.codigoCVV = codigoCVV;
    }
    public getLimite(): number{
        return this.limite;
    }
    public setLimite(limite: number): void{
        this.limite = limite;
    }
}