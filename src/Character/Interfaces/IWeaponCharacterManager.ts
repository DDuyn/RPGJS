import { BaseWeapon } from "../../Items/Weapons/Base/BaseWeapon";
import { LocationWeaponEquippedType } from "../../Shared/Enums/LocationWeaponEquipedType";

export interface IWeaponCharacterManager {
  GetWeaponsEquipped(): Map<LocationWeaponEquippedType, BaseWeapon>;
  GetWeaponEquipped(
    location: LocationWeaponEquippedType
  ): BaseWeapon | undefined;
  SetWeaponInLocation(
    weapon: BaseWeapon,
    location: LocationWeaponEquippedType
  ): void;
}
