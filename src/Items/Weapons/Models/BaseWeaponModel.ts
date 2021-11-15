import { BaseAttributeModel } from "../../../Attributes/Models/Base/BaseAttributeModel";
import { BaseModifierModel } from "../../../Modifiers/Model/Base/BaseModifierModel";
import { ItemType } from "../../../Shared/Enums/ItemType";
import { Rarity } from "../../../Shared/Enums/Rarity";
import { WeaponType } from "../../../Shared/Enums/WeaponType";
import { BaseAffixModel } from "../../Affixes/Models/BaseAffixModel";

export type BaseWeaponModel = {
  Name: string;
  SubName: string;
  Description: string;
  IsTwoHanded: boolean;
  WeaponType: WeaponType;
  Rarity: Rarity;
  Damage: number;
  Level: number;
  ItemType: ItemType;
  CanEquip: boolean;
  Implicits: BaseModifierModel[];
  Explicits: BaseModifierModel[];
  Prefixes: BaseAffixModel[];
  Suffixes: BaseAffixModel[];
  Requirements: Map<BaseAttributeModel, number>;
};
