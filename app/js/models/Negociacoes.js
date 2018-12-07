class Negociacoes {
    constructor() {
        // negociações é um Array de Negociacao
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    // explicitar o tipo de retono do método é uma boa pratica
    // que vai facilitar para acessarmos atributos na chamada do metodo
    // alem de facilitar  legibilidade do codigo
    paraArray() {
        // retornamos um novo array pelo principio de programação defensiva.
        // o array retornado eh uma copia do nosso array original ,então se for apagado ou alterado
        // não interfere no array original
        return [].concat(this._negociacoes);
    }
}
