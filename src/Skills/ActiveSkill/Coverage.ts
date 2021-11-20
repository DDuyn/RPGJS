import { AttributeConstants } from "../../Attributes/Constants/AttributeConstants";
import { ICharacter } from "../../Character/Interfaces/ICharacter";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { PassiveType } from "../../Shared/Enums/PassiveType";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { ILogicSkill } from "../Interfaces/ILogicSkill";
import { ISkill } from "../Interfaces/ISkill";
import { IUpgradeSkill } from "../Interfaces/IUpgradeSkill";
import { Skill } from "../Skill";

export class Coverage extends Skill implements ILogicSkill, IUpgradeSkill {
  private NAME: string = "Coverage";
  private ENERGY_COST: number = 35;
  private DURATION: number = 0;
  private BASE_VALUE: number = 40;
  private IS_CAST_SELF: boolean = true;
  private DESCRIPTION: string = "Description Coverage";
  private REQUIREMENTS: Map<string, number> = new Map([
    [AttributeConstants.STRENGTH, 5],
    [AttributeConstants.MAXHEALTH, 20],
  ]);

  /**
   *
   */
  constructor(character: ICharacter) {
    super();
    this.Data = this.BuildSkill(
      this.NAME,
      SkillType.ACTIVE_SKILL,
      ValueType.FLAT,
      CharacterClass.NONE,
      PassiveType.NONE,
      this.ENERGY_COST,
      this.BASE_VALUE,
      this.IS_CAST_SELF,
      this.DURATION,
      this.DESCRIPTION,
      this.REQUIREMENTS,
      character
    );
  }

  LogicSkill(this: ISkill, attacker: ICharacter): void {
    const defense = attacker.GetValueByAttribute(AttributeConstants.DEFENSE);
    attacker.SetValueInAttribute(
      defense + this.GetBaseValue(),
      AttributeConstants.DEFENSE
    );
  }

  UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }
}
