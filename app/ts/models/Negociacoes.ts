class Negociacoes {
  // negociações é um Array de Negociacao
  private _negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  // explicitar o tipo de retono do método é uma boa pratica
  // que vai facilitar para acessarmos atributos na chamada do metodo
  // alem de facilitar  legibilidade do codigo

  paraArray(): Negociacao[] {
    // retornamos um novo array pelo principio de programação defensiva.
    // o array retornado eh uma copia do nosso array original ,então se for apagado ou alterado
    // não interfere no array original
    return [].concat(this._negociacoes);
  }
}
