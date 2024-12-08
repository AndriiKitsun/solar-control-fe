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

  static randomFromList<T>(list: T[]): T {
    return list[Math.floor(Math.random() * list.length)];
  }
}
