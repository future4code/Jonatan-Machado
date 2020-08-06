import { Place } from './Place';
export class Commerce extends Place {
  constructor(
    protected _floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string,
  ) {
    super(cep);
  }

  get floorsQuantity(): number {
    return this._floorsQuantity;
  }
}
