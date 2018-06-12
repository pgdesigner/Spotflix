"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AudioAbstract_1 = require("../AudioAbstract");
class Musicas extends AudioAbstract_1.AudioAbstract {
    constructor(codigo, nome, genero, preco, autor, album, duracao) {
        super(codigo, nome, genero, preco, autor, duracao);
        this.album = album;
    }
    getAlbum() {
        return this.album;
    }
    setAlbum(album) {
        this.album = album;
    }
    executar() {
    }
}
exports.Musicas = Musicas;
