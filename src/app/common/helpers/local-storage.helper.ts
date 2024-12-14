export class LocalStorageHelper {
  static get<T>(key: string, fallback: T): T {
    return (localStorage.getItem(key) as T) ?? fallback;
  }

  static set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
