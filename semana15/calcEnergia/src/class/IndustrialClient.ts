import { Industry } from '../class/Industry';
import { Client } from '../interfaces/Client';

export class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private insdustryNumber: string, // tanto faz ser string ou number
    machinesQuantity: number,
    cep: string,
  ) {
    super(machinesQuantity, cep);
  }

  public getIndustryNumber(): string {
    return this.insdustryNumber;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
}
