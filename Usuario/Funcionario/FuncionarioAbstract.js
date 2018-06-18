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
var UsuarioAbstract_1 = require("../UsuarioAbstract");
var FuncionarioAbstract = /** @class */ (function (_super) {
    __extends(FuncionarioAbstract, _super);
    function FuncionarioAbstract(matricula, salario, nome, email, senha) {
        var _this = _super.call(this, nome, email, senha) || this;
        _this.matricula = matricula;
        _this.salario = salario;
        return _this;
    }
    FuncionarioAbstract.prototype.getmatricula = function () {
        return this.matricula;
    };
    FuncionarioAbstract.prototype.setmatricula = function (matricula) {
        this.matricula = matricula;
    };
    FuncionarioAbstract.prototype.getsalario = function () {
        return this.salario;
    };
    FuncionarioAbstract.prototype.setsalario = function (salario) {
        this.salario = salario;
    };
    return FuncionarioAbstract;
}(UsuarioAbstract_1.UsuarioAbstract));
exports.FuncionarioAbstract = FuncionarioAbstract;
