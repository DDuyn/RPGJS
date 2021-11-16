import { LocationWeaponEquippedType } from "../../Shared/Enums/LocationWeaponEquipedType";
import { IWeaponManager } from "../Interfaces/IWeaponManager";
import { BaseWeaponModel } from "../Models/BaseWeaponModel";

export class WeaponManager implements IWeaponManager {
  private ListWeaponEquipped: Map<LocationWeaponEquippedType, BaseWeaponModel> =
    new Map();
  GetWeaponsEquipped(): Map<LocationWeaponEquippedType, BaseWeaponModel> {
    return this.ListWeaponEquipped;
  }
  GetWeaponEquipped(
    location: LocationWeaponEquippedType
  ): BaseWeaponModel | undefined {
    return this.ListWeaponEquipped.get(location);
  }
  SetWeaponInLocation(
    weapon: BaseWeaponModel,
    location: LocationWeaponEquippedType
  ): void {
    this.ListWeaponEquipped.set(location, weapon);
  }
}
