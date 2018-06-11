export class Data{
    private dia : number;
    private mes : number;
    private ano : number;

    public constructor(dia:number, mes:number, ano:number){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    public getDia() : number{
        return this.dia;
    }
    public setDia(dia:number) : void{
        this.dia = dia;
    }

    public getMes() : number{
        return this.mes;
    }
    public setMes(mes:number) : void{
        this.mes = mes;
    }

    public getAno() : number{
        return this.ano;
    }
    public setAno(ano:number){
        this.ano = ano;
    }

    public toString() : string{
        let res : string = this.dia + "/" + this.mes + "/" + this.ano;
        return res
    }
}