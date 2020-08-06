import { Place } from './Place';
export class Residence extends Place {
  constructor(
    protected _residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string,
  ) {
    super(cep);
  }

  get residentsQuantity(): number {
    return this._residentsQuantity;
  }
}
