import { ICharacter } from "../../Character/Interfaces/ICharacter";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { PassiveType } from "../../Shared/Enums/PassiveType";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { BaseSkillModel } from "../Models/Base/BaseSkillModel";

export interface ISkill {
  BuildSkill(
    skillName: string,
    skillType: SkillType,
    valueType: ValueType,
    skillCharacterClass: CharacterClass,
    passiveType: PassiveType,
    energyCost: number,
    baseValue: number,
    isCastSelf: boolean,
    duration: number,
    description: string,
    requirements: Map<string, number>,
    character: ICharacter,
    level: number
  ): BaseSkillModel;
  GetData(): BaseSkillModel;
  GetName(): string;
  CanPurchase(
    requirements: Map<string, number>,
    character: ICharacter
  ): boolean;
  GetBaseValue(): number;
  LogicSkill(this: ISkill, attacker: ICharacter, defender?: ICharacter): void;
}
