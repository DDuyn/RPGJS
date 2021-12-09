import _ from "lodash";

export class Utils {
  public static IsNull(object: any): boolean {
    return object === null;
  }

  public static IsUndefined(object: any): boolean {
    return object === undefined;
  }

  public static Random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public static Rounded(value: number): number {
    return Math.floor((value + Number.EPSILON) * 100) / 100;
  }

  public static GetRandomElementFromList<T>(list: T[]): T {
    return list[Math.floor(Math.random() * list.length)];
  }

  public static DeepClone<T>(object: T): T {
    return _.cloneDeep(object);
  }

  public static GetRandomEnumKey<T>(enumeration: any): T {
    const keys = Object.keys(enumeration).filter(
      (x) => !Math.abs(Number.parseInt(x) + 1)
    );
    return keys[Math.floor(Math.random() * keys.length)] as unknown as T;
  }

  public static Shuffle<T>(list: T[]): T[] {
    return list.sort(() => 0.5 - Math.random());
  }

  public static GetIndexFromList<T>(list: T[], element: any): number {
    return list.indexOf(element);
  }

  public static AddPercentOfValue(value: number, percent: number): number {
    return value + Math.round(value * (percent / 100));
  }

  public static SubstractPercentOfValue(
    value: number,
    percent: number
  ): number {
    return value - Math.round(value * (percent / 100));
  }
}
