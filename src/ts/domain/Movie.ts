import Buyable from './Buyable.ts';

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly englishName: string,
    readonly year: number,
    readonly country: string,
    readonly tagline: string,
    readonly genre: string[],
    readonly time: number,
    readonly price: number,
  ) {}
}
