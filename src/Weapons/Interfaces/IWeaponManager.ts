import { LocationWeaponEquippedType } from "../../Shared/Enums/LocationWeaponEquipedType";
import { BaseWeaponModel } from "../Models/BaseWeaponModel";

export interface IWeaponManager {
  GetWeaponsEquipped(): Map<LocationWeaponEquippedType, BaseWeaponModel>;
  GetWeaponEquipped(
    location: LocationWeaponEquippedType
  ): BaseWeaponModel | undefined;
  SetWeaponInLocation(
    weapon: BaseWeaponModel,
    location: LocationWeaponEquippedType
  ): void;
}
