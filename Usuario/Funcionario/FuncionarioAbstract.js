"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UsuarioAbstract_1 = require("../UsuarioAbstract");
class FuncionarioAbstract extends UsuarioAbstract_1.UsuarioAbstract {
    constructor(matricula, salario, nome, email, senha) {
        super(nome, email, senha);
        this.matricula = matricula;
        this.salario = salario;
    }
    getmatricula() {
        return this.matricula;
    }
    setmatricula(matricula) {
        this.matricula = matricula;
    }
    getsalario() {
        return this.salario;
    }
    setsalario(salario) {
        this.salario = salario;
    }
}
exports.FuncionarioAbstract = FuncionarioAbstract;
