"use strict";
exports.__esModule = true;
var Par = /** @class */ (function () {
    function Par(chave, valor) {
        this.chave = chave;
        this.valor = valor;
    }
    return Par;
}());
var Map = /** @class */ (function () {
    function Map() {
        this.array = [];
        this.fator = 2;
        this.tamanho = 3;
        this.size = 0;
        for (var k = 0; k < this.tamanho; k++) {
            this.array.push([]);
        }
    }
    Map.prototype.has = function (chave) {
        var h = this.hash(chave);
        for (var _i = 0, _a = this.array[h]; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.chave == chave)
                return true;
        }
        return false;
    };
    Map.prototype.get = function (chave) {
        var h = this.hash(chave);
        for (var _i = 0, _a = this.array[h]; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.chave == chave)
                return p.valor;
        }
        return null;
    };
    Map.prototype["delete"] = function (chave) {
        var h = this.hash(chave);
        var i = -1;
        for (var k = 0; k < this.array[h].length; k++) {
            if (this.array[h][k].chave == chave) {
                i = k;
                break;
            }
        }
        if (i == -1)
            return false;
        this.array[h][i] = this.array[h][0];
        this.array[h].shift();
        this.size--;
        return true;
    };
    Map.prototype.set = function (chave, valor) {
        var par = null;
        var h = this.hash(chave);
        for (var _i = 0, _a = this.array[h]; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.chave == chave) {
                par = p;
                break;
            }
        }
        if (par == null) {
            while (this.array[h].length >= this.fator) {
                this.reorganizar();
                h = this.hash(chave);
            }
            this.array[h].push(new Par(chave, valor));
            this.size++;
        }
        else {
            par.valor = valor;
        }
        return this;
    };
    Map.prototype.clear = function () {
        this.size = 0;
        this.array = [];
        for (var k = 0; k < this.tamanho; k++)
            this.array[k] = [];
    };
    Map.prototype.entries = function () {
        var res = [];
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var l = _a[_i];
            for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                var p = l_1[_b];
                res.push([p.chave, p.valor]);
            }
        }
        return res;
    };
    Map.prototype.values = function () {
        var res = [];
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var l = _a[_i];
            for (var _b = 0, l_2 = l; _b < l_2.length; _b++) {
                var p = l_2[_b];
                res.push(p.valor);
            }
        }
        return res;
    };
    Map.prototype.keys = function () {
        var res = [];
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var l = _a[_i];
            for (var _b = 0, l_3 = l; _b < l_3.length; _b++) {
                var p = l_3[_b];
                res.push(p.chave);
            }
        }
        return res;
    };
    Map.prototype.reorganizar = function () {
        this.tamanho *= 2;
        var a = [];
        for (var k = 0; k < this.tamanho; k++)
            a.push([]);
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var l = _a[_i];
            for (var _b = 0, l_4 = l; _b < l_4.length; _b++) {
                var p = l_4[_b];
                a[this.hash(p.chave)].push(p);
            }
        }
        this.array = a;
    };
    Map.prototype.hash = function (str) {
        var soma = 0;
        for (var k = 0, t = str.length; k < t; k++)
            soma += str.charCodeAt(k);
        return (soma % this.tamanho);
    };
    Map.prototype.print = function () {
        var s = "Mapa [ \n";
        for (var k = 0; k < this.tamanho; k++) {
            s += "\t Lista " + k + ": [";
            if (this.array[k].length > 0) {
                s += "(" + this.array[k][0].chave + ", " + this.array[k][0].valor + ")";
                for (var i = 1; i < this.array[k].length; i++) {
                    s += ", " + "(" + this.array[k][i].chave + ", " + this.array[k][i].valor + ")";
                }
            }
            s += "]\n";
        }
        s += "]\n";
        console.log(s);
    };
    return Map;
}());
exports.Map = Map;
