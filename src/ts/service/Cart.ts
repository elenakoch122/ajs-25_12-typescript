import Buyable from '../domain/Buyable';

export default class Cart {
  private itemsInCart: Buyable[] = [];

  add(item: Buyable): void {
    this.itemsInCart.push(item);
  }

  get items():Buyable[] {
    return [...this.itemsInCart];
  }

  totalAmount(): number {
    let sum: number = 0;
    this.items.forEach(product => sum += product.price);
    return sum;
  }

  totalAmountWithDiscount(percent: number): number {
    return this.totalAmount() * (1 - percent / 100);
  }

  deleteProduct(id: number): void {
    const idx: number = this.items.findIndex((product) => product.id === id);
    this.itemsInCart.splice(idx, 1);
  }
}
