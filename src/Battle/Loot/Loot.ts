import { BaseWeaponModel } from "../../Weapons/Models/BaseWeaponModel";

export class Loot {
  private LootWeapons: BaseWeaponModel[] = [];

  public GetLootWeapons(): BaseWeaponModel[] {
    return this.LootWeapons;
  }

  public SetLootWeapon(lootWeapons: BaseWeaponModel[]): void {
    this.LootWeapons = [...lootWeapons];
  }
}
