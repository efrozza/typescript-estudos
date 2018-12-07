import { logarTempoExecucao } from '../helpers/decorators/index';
// no TS temos como passar um tipo dinâmico
// ou seja a nossa classe view, pode receber String, um objeto etc
// e onde definirmos como T assumira esse tipo passado

export abstract class View<T> {
  // criamos um atributo do tipo Element
  // https://www.w3schools.com/js/js_htmldom.asp
  protected _elemento: JQuery;
  private _escapar: boolean;

  // no construtor recebemos o seletor para onde nossa view será renderizada
  // escapar é opcional, indicado pelo ?
  constructor(seletor: string, escapar: boolean = false) {
    //this._elemento = document.querySelector(seletor);
    this._elemento = $(seletor);
    this._escapar = escapar;
  }

  // recebe o modelo que será usado pelo template para atualizar a view
  // modelo é do tipo genérico, o que flexibiliza o metodo para receber qualquer tipo
  update(modelo: T): void {
    let template = this.template(modelo);

    // opção para remover tags scrips malicionas no codigo
    if (this._escapar)
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');

    //this._elemento.innerHTML = this.template(modelo);
    this._elemento.html(this.template(modelo));
  }

  // o metodo template não tem como ser definido na classe pai, pois cada view filha terá um formato
  abstract template(modelo: T): string;
}
