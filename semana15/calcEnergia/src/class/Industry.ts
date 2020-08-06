import { Place } from './Place';
export class Industry extends Place {
  constructor(
    protected _machinesQuantity: number,
    // Refere-se à quantidade de máquinas do local

    cep: string,
  ) {
    super(cep);
  }

  get machinesQuantity(): number {
    return this._machinesQuantity;
  }
}
