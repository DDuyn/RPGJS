import { BaseAttributeModel } from "../../../Attributes/Models/Base/BaseAttributeModel";
import { Rarity } from "../../../Shared/Enums/Rarity";
import { BaseAffixModel } from "../../Affixes/Models/BaseAffixModel";
import { BaseWeaponModel } from "../Models/BaseWeaponModel";

export interface IWeapon {
  BuildWeapon(levelItem: number, rarity: Rarity): BaseWeaponModel;
  GenerateDamage(baseDamage: number, level: number, rarity: Rarity): number;
  GeneratePrefixes(rarity: Rarity): BaseAffixModel[];
  GenerateSuffixes(rarity: Rarity): BaseAffixModel[];
  GenerateName(baseName: string, rarity: Rarity): string;
  SetRequirements(level: number): Map<BaseAttributeModel, number>;
}
