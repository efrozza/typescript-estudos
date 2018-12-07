class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    // passa o templete para o innerHTML renderizar elementos do DOM no elemento definido
    update(modelo) {
        this._elemento.innerHTML = this.template(modelo);
    }
}
