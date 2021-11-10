import { BaseWeapon } from "../../Items/Weapons/Base/BaseWeapon";

export class Loot {
  private LootWeapons: BaseWeapon[] = [];

  public GetLootWeapons(): BaseWeapon[] {
    return this.LootWeapons;
  }

  public SetLootWeapon(lootWeapons: BaseWeapon[]): void {
    this.LootWeapons = [...lootWeapons];
  }
}
