import { Service } from "typedi";
import { LocationWeapon } from "../../Shared/Enums/LocationWeapon";
import { IWeaponManager } from "../Interfaces/IWeaponManager";
import { BaseWeaponModel } from "../Models/BaseWeaponModel";

@Service()
export class WeaponManager implements IWeaponManager {
  private ListWeaponEquipped: Map<LocationWeapon, BaseWeaponModel> = new Map();
  GetWeaponsEquipped(): Map<LocationWeapon, BaseWeaponModel> {
    return this.ListWeaponEquipped;
  }
  GetWeaponEquipped(location: LocationWeapon): BaseWeaponModel | undefined {
    return this.ListWeaponEquipped.get(location);
  }
  SetWeaponInLocation(weapon: BaseWeaponModel, location: LocationWeapon): void {
    if (
      weapon.LocationWeapon.some(
        (locationWeapon) => location === locationWeapon
      )
    ) {
      this.ListWeaponEquipped.set(location, weapon);
    } else {
      console.log("No se puede equipar");
    }
  }
}
