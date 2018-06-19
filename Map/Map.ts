class Par<K,V>{
	public chave : K;
	public valor : V;
	public constructor(chave : K, valor : V){
		this.chave = chave;
		this.valor = valor;
	}
}


export class Map<K,V> {

	private array : Array<Array<Par<string,V>>>;
	private fator : number;
	private tamanho : number;
	public size : number;

	public constructor() {
		this.array = [];
		this.fator = 2;
		this.tamanho = 3;
		this.size = 0;
		for(let k=0;k<this.tamanho;k++){
			this.array.push([]);
		}
	}

	public has(chave : string) : boolean {
		let h : number = this.hash(chave);
		for(let p of this.array[h]){
			if(p.chave == chave) return true;
		}
		return false;
	}

	public get(chave : string) : V {
		let h : number = this.hash(chave);
		for(let p of this.array[h]){
			if(p.chave == chave) return p.valor;
		}
		return null;
	}

	public delete(chave : string) : boolean {
		let h : number = this.hash(chave);
		let i : number = -1;
		for(let k=0;k<this.array[h].length;k++){
			if(this.array[h][k].chave == chave){
				i = k;
				break;
			}
		}
		if(i==-1) return false;
		this.array[h][i] = this.array[h][0];
		this.array[h].shift();
		this.size--;
		return true;
	}

	public set(chave : string, valor : V) : Map<K,V> {
		let par : Par<string,V> = null;
		let h : number = this.hash(chave);
		for(let p of this.array[h]){
			if(p.chave == chave) {
				par = p;
				break;
			}
		}
		if(par==null){
			while(this.array[h].length >= this.fator) {
				this.reorganizar();
				h = this.hash(chave);
			}
			this.array[h].push(new Par<string,V>(chave, valor));
			this.size++;
		} else {
			par.valor = valor;
		}
		return this;
	}

	public clear() : void {
		this.size = 0;
		this.array = [];
		for(let k=0;k<this.tamanho;k++) this.array[k] = [];
	}
	
	public entries() : Array<[string,V]> {
		let res : Array<[string,V]> = [];
		for(let l of this.array){
			for(let p of l) res.push([p.chave,p.valor]);
		}
		return res;
	}

	public values() : Array<V> {
		let res : Array<V> = [];
		for(let l of this.array){
			for(let p of l) res.push(p.valor);
		}
		return res;
	}

	public keys() : Array<string> {
		let res : Array<string> = [];
		for(let l of this.array){
			for(let p of l) res.push(p.chave);
		}
		return res;
	}

	private reorganizar() : void {
		this.tamanho *= 2;
		let a : Array<Array<Par<string,V>>> = [];
		for(let k=0;k<this.tamanho;k++) a.push([]);
		for(let l of this.array){
			for(let p of l){
				a[this.hash(p.chave)].push(p);
			}
		}
		this.array = a;
	}

	private hash(str : string) : number {
		let soma : number = 0;
		for(let k=0,t=str.length;k<t;k++) soma += str.charCodeAt(k);
		return (soma%this.tamanho);
	}

	public print() : void {
		let s : string = "Mapa [ \n";
		for(let k=0;k<this.tamanho;k++){
			s += "\t Lista "+k+": [";
			if(this.array[k].length > 0){
				s += "(" + this.array[k][0].chave + ", " + this.array[k][0].valor + ")";
				for(let i=1;i<this.array[k].length;i++){
					s += ", " + "(" + this.array[k][i].chave + ", " + this.array[k][i].valor + ")";
				}
			}
			s+="]\n";
		}
		s+="]\n"
		console.log(s);
	}
}