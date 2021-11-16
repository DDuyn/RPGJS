import { Rarity } from "../../Shared/Enums/Rarity";
import { BaseWeaponModel } from "../Models/BaseWeaponModel";

export interface IWeapon {
  BuildWeapon(levelItem: number, rarity: Rarity): BaseWeaponModel;
}
