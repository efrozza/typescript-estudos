import { View } from './View';
export class MensagemView extends View<string> {
  template(textoMensagem: string): string {
    return `<p class="alert alert-info">${textoMensagem}</p>`;
  }
}
