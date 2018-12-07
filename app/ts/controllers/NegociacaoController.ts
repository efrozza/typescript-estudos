import { MensagemView, NegociacoesView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';

export class NegociacaoController {
  private _inputData: JQuery;
  private _inputQuantidade: JQuery;
  private _inputValor: JQuery;
  private _negociacoes: Negociacoes = new Negociacoes();
  // cria um atributo para view, passando o seletor '#negociacoesView'
  private _negociacoesView = new NegociacoesView('#negociacoesView', true);
  private _mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(event: Event) {
    event.preventDefault();

    let data = new Date(this._inputData.val().replace(/-/g, ','));

    // valida dia útil 0 domingo e 6 sabado
    if (!this.ehDiaUtil(data)) {
      this._mensagemView.update('Data inválida. Informe um dia útil!');
      return;
    }

    const negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.val()),
      parseFloat(this._inputValor.val()),
    );
    this._negociacoes.adiciona(negociacao);
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update('Negociação adicionada com sucesso');
  }

  private ehDiaUtil(data: Date): boolean {
    return data.getDay() != DiaDaSemana.Sábado &&
      data.getDay() != DiaDaSemana.Domingo
      ? true
      : false;
  }
}

enum DiaDaSemana {
  // por default a enum começa em zero,
  // porem podemos setar um valor inicial, por exemplo Domingo = 1,
  // o proximo dia será 2 e assim por diante.
  Domingo,
  Segunda,
  Terça,
  Quarta,
  Quinta,
  Sexta,
  Sábado,
}
