import { IAttribute } from "../../../Attributes/Interfaces/IAttribute";
import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../../Shared/Enums/CharacterType";
import { BaseSkillModel } from "../../../Skills/Models/Base/BaseSkillModel";
import { BaseWeaponModel } from "../../../Weapons/Models/BaseWeaponModel";

export type BaseCharacterModel = {
  Name: string;
  Class: CharacterClass;
  Type: CharacterType;
  Attributes: IAttribute[];
  Skills: BaseSkillModel[];
  Weapons: BaseWeaponModel[];
};
