"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var FuncionarioAbstract_1 = require("../FuncionarioAbstract");
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(matricula, salario, nome, email, senha) {
        return _super.call(this, matricula, salario, nome, email, senha) || this;
    }
    return Gerente;
}(FuncionarioAbstract_1.FuncionarioAbstract));
exports.Gerente = Gerente;
