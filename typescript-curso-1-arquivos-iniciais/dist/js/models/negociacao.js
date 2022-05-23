export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseInt(valorString);
        // const negociacao = new Negociacao(
        //   this.inputData.valueAsDate,
        //   this.inputQuantidade.valueAsNumber,
        //   this.inputValor.valueAsNumber
        //   );
        return new Negociacao(date, quantidade, valor);
    }
}
