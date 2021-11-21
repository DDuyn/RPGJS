import { IAffix } from "../../Affixes/Interfaces/IAffix";
import { IModifier } from "../../Modifiers/Interfaces/IModifier";
import { LocationWeapon } from "../../Shared/Enums/LocationWeapon";
import { Rarity } from "../../Shared/Enums/Rarity";
import { WeaponType } from "../../Shared/Enums/WeaponType";

export type BaseWeaponModel = {
  Name: string;
  SubName: string;
  Description: string;
  IsTwoHanded: boolean;
  WeaponType: WeaponType;
  Rarity: Rarity;
  Damage: number;
  LocationWeapon: LocationWeapon[];
  Level: number;
  Implicits: IModifier[];
  Explicits: IModifier[];
  Prefixes: IAffix[];
  Suffixes: IAffix[];
  Requirements: Map<string, number>;
};
