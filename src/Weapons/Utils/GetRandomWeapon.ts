import { Rarity } from "../../Shared/Enums/Rarity";
import { WeaponType } from "../../Shared/Enums/WeaponType";
import { Utils } from "../../Shared/Utils/Utils";
import { BaseWeaponModel } from "../Models/BaseWeaponModel";
import { GenerateOneHandedAxe } from "../OneHandedAxe/Utils/GenerateOneHandedAxe";
import { GenerateOneHandedSword } from "../OneHandedSword/Utils/GenerateOneHandedSword";

const WEAPON_TYPE = {
  ONE_HANDED_AXE: (level: number, rarity: Rarity) =>
    GenerateOneHandedAxe(level, rarity),
  ONE_HANDED_SWORD: (level: number, rarity: Rarity) =>
    GenerateOneHandedSword(level, rarity),
};

export const GetRandomWeapon = (
  level: number,
  rarity: Rarity
): BaseWeaponModel => {
  const weaponType = GetRandomWeaponType();
  return WEAPON_TYPE[weaponType](level, rarity);
};

const GetRandomWeaponType = (): WeaponType => {
  return Utils.GetRandomEnumKey<WeaponType>(WeaponType);
};
