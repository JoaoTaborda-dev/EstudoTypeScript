export class Negociacao {

  constructor(
    private _data: Date,
    public readonly quantidade: number, 
    public readonly valor: number
    ) {
  }

  get volume(): number {
    return this.quantidade * this.valor
  }

  get data(): Date{
    const data =  new Date(this._data.getTime());
    return data;
  }

  public static criaDe(dataString: string, quantidadeString: string, valorString: string ): Negociacao {
    const exp = /-/g;

    const date =  new Date(dataString.replace(exp,','))
    const quantidade = parseInt(quantidadeString)
    const valor = parseInt(valorString)
    // const negociacao = new Negociacao(
    //   this.inputData.valueAsDate,
    //   this.inputQuantidade.valueAsNumber,
    //   this.inputValor.valueAsNumber
    //   );
    return new Negociacao(date,quantidade,valor)
  }
}
