import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

// You can change Array<Negociacao> for Negociacao[], they do the same thing on the code. 

  adiciona(negociacao: Negociacao){
    this.negociacoes.push(negociacao);

  }

  // You can change ReadonlyArray<Negociacao> for  "readonly Negociacao[]", they do the same thing on the code, is just another sintax display on typescript
  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes
  }
}