export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // You can change Array<Negociacao> for Negociacao[], they do the same thing on the code. 
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // You can change ReadonlyArray<Negociacao> for  "readonly Negociacao[]", they do the same thing on the code, is just another sintax display on typescript
    lista() {
        return this.negociacoes;
    }
}
