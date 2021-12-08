import { IModifier } from "../../Modifiers/Interfaces/IModifier";
import { LocationWeapon } from "../../Shared/Enums/LocationWeapon";
import { Rarity } from "../../Shared/Enums/Rarity";
import { WeaponType } from "../../Shared/Enums/WeaponType";
import { BaseWeaponModel } from "../Models/BaseWeaponModel";

export interface IWeapon {
  BuildWeapon(
    weaponName: string,
    description: string,
    baseDamage: number,
    weaponType: WeaponType,
    locations: LocationWeapon[],
    isTwoHanded: boolean,
    implicits: IModifier[],
    requirements: Map<string, number>,
    levelItem: number,
    rarity: Rarity
  ): BaseWeaponModel;
  HasImplicits(): boolean;
  HasExplicits(): boolean;
  GetData(): BaseWeaponModel;
}
