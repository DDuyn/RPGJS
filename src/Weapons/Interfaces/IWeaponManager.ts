import { LocationWeapon } from "../../Shared/Enums/LocationWeapon";
import { BaseWeaponModel } from "../Models/BaseWeaponModel";

export interface IWeaponManager {
  GetWeaponsEquipped(): Map<LocationWeapon, BaseWeaponModel>;
  GetWeaponEquipped(location: LocationWeapon): BaseWeaponModel | undefined;
  SetWeaponInLocation(weapon: BaseWeaponModel, location: LocationWeapon): void;
}
