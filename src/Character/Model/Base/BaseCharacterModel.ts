import { IAttribute } from "../../../Attributes/Interfaces/IAttribute";
import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../../Shared/Enums/CharacterType";
import { LocationWeapon } from "../../../Shared/Enums/LocationWeapon";
import { ISkill } from "../../../Skills/Interfaces/ISkill";
import { IWeapon } from "../../../Weapons/Interfaces/IWeapon";

export type BaseCharacterModel = {
  Name: string;
  Class: CharacterClass;
  Type: CharacterType;
  Attributes: IAttribute[];
  Skills: ISkill[];
  Weapons: Map<LocationWeapon, IWeapon>;
};
