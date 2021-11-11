import { Service } from "typedi";
import { BaseWeapon } from "../../Items/Weapons/Base/BaseWeapon";
import { LocationWeaponEquippedType } from "../../Shared/Enums/LocationWeaponEquipedType";
import { ICharacterWeaponManager } from "../Interfaces/ICharacterWeaponManager";

@Service()
export class CharacterWeaponManager implements ICharacterWeaponManager {
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
