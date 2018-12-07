// no TS temos como passar um tipo dinâmico
// ou seja a nossa classe view, pode receber String, um objeto etc
// e onde definirmos como T assumira esse tipo passado

abstract class View<T> {
  // criamos um atributo do tipo Element
  // https://www.w3schools.com/js/js_htmldom.asp
  protected _elemento: Element;

  // no construtor recebemos o seletor para onde nossa view será renderizada
  constructor(seletor: string) {
    this._elemento = document.querySelector(seletor);
  }

  // recebe o modelo que será usado pelo template para atualizar a view
  // modelo é do tipo genérico, o que flexibiliza o metodo para receber qualquer tipo
  update(modelo: T): void {
    this._elemento.innerHTML = this.template(modelo);
  }

  // o metodo template não tem como ser definido na classe pai, pois cada view filha terá um formato
  abstract template(modelo: T): string;
}
