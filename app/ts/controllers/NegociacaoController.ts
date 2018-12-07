class NegociacaoController {
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociacoes: Negociacoes = new Negociacoes();
  // cria um atributo para view, passando o seletor '#negociacoesView'
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this._inputData = document.querySelector('#data');
    this._inputQuantidade = document.querySelector('#quantidade');
    this._inputValor = document.querySelector('#valor');
    this._negociacoesView.update(this._negociacoes);
  }
  adiciona(event: Event) {
    event.preventDefault();

    const negociacao = new Negociacao(
      new Date(this._inputData.value.replace(/-/g, ',')),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value),
    );
    this._negociacoes.adiciona(negociacao);
    this._negociacoes
      .paraArray()
      .map(negociacao => console.log(negociacao.data));
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update('Negociação adicionada com sucesso');
  }
}
