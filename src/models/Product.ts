export class Product {
  id: number;
  amount: number

    constructor( public name: string, public price: number) {
      this.id = Date.now();
      this.amount = 1;
    }
  }