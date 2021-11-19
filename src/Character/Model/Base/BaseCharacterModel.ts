import { IAttribute } from "../../../Attributes/Interfaces/IAttribute";
import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../../Shared/Enums/CharacterType";
import { ISkill } from "../../../Skills/Interfaces/ISkill";
import { BaseWeaponModel } from "../../../Weapons/Models/BaseWeaponModel";

export type BaseCharacterModel = {
  Name: string;
  Class: CharacterClass;
  Type: CharacterType;
  Attributes: IAttribute[];
  Skills: ISkill[];
  Weapons: BaseWeaponModel[];
};
