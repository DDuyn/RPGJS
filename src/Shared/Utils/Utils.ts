import _ from "lodash";

export class Utils {
  public static Random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public static Rounded(value: number): number {
    return Math.floor((value + Number.EPSILON) * 100) / 100;
  }

  public static GetIndexFromList<T>(list: T[]): T {
    return list[Math.floor(Math.random() * list.length)] as T;
  }

  public static DeepClone<T>(object: T): T {
    return _.cloneDeep(object) as T;
  }

  public static GetRandomEnumKey<T>(enumeration: any): T {
    const keys = Object.keys(enumeration).filter(
      (x) => !Math.abs(Number.parseInt(x) + 1)
    );
    return (keys[Math.floor(Math.random() * keys.length)] as unknown) as T;
  }

  public static Shuffle<T>(list: T[]): T[] {
    return list.sort(() => 0.5 - Math.random());
  }
}
