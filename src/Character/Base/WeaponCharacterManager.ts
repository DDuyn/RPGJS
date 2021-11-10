import { BaseWeapon } from "../../Items/Weapons/Base/BaseWeapon";
import { LocationWeaponEquippedType } from "../../Shared/Enums/LocationWeaponEquipedType";
import { IWeaponCharacterManager } from "../Interfaces/IWeaponCharacterManager";

export class WeaponCharacterManager implements IWeaponCharacterManager {
  private ListWeaponEquipped: Map<
    LocationWeaponEquippedType,
    BaseWeapon
  > = new Map();

  public GetWeaponsEquipped(): Map<LocationWeaponEquippedType, BaseWeapon> {
    return this.ListWeaponEquipped;
  }

  public GetWeaponEquipped(
    location: LocationWeaponEquippedType
  ): BaseWeapon | undefined {
    return this.ListWeaponEquipped.get(location);
  }

  public SetWeaponInLocation(
    weapon: BaseWeapon,
    location: LocationWeaponEquippedType
  ): void {
    this.ListWeaponEquipped.set(location, weapon);
  }
}
