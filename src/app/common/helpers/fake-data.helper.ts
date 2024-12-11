export class FakeDataHelper {
  static randomUUID(): string {
    return window.crypto.randomUUID();
  }

  static randomIP(): string {
    return '$.$.$.$'.replaceAll('$', this.randomInt(0, 1000).toString());
  }

  static randomInt(min = 0, max = 100): number {
    const minRounded = Math.ceil(min);
    const maxRounded = Math.floor(max);

    return Math.floor(Math.random() * (maxRounded - minRounded) + minRounded);
  }

  static randomFloat(min = 0, max = 100, digitsAfterPoint?: number): number {
    const minRounded = Math.ceil(min);
    const maxRounded = Math.floor(max);
    const value = Math.random() * (maxRounded - minRounded) + minRounded;

    if (digitsAfterPoint || digitsAfterPoint === 0) {
      return +value.toFixed(digitsAfterPoint);
    }

    return value;
  }

  static randomFromList<T>(list: T[]): T {
    return list[Math.floor(Math.random() * list.length)];
  }

  static randomISOString(): string {
    return new Date().toJSON();
  }
}
