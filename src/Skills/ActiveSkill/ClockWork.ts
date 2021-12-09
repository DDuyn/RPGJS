import { Attributes } from "../../Attributes/Constants/Attributes";
import { ICharacter } from "../../Character/Interfaces/ICharacter";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { PassiveType } from "../../Shared/Enums/PassiveType";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { ILogicSkill } from "../Interfaces/ILogicSkill";
import { ISkill } from "../Interfaces/ISkill";
import { IUpgradeSkill } from "../Interfaces/IUpgradeSkill";
import { Skill } from "../Skill";

export class ClockWork extends Skill implements ILogicSkill, IUpgradeSkill {
  private NAME: string = "ClockWork";
  private ENERGY_COST: number = 20;
  private DURATION: number = 0;
  private BASE_VALUE: number = 0.1;
  private IS_CAST_SELF: boolean = true;
  private DESCRIPTION: string = "Description ClockWork";
  private REQUIREMENTS: Map<string, number> = new Map([
    [Attributes.AGILITY, 500],
  ]);

  /**
   *
   */
  constructor(character: ICharacter) {
    super();
    this.Data = this.BuildSkill(
      this.NAME,
      SkillType.ACTIVE_SKILL,
      ValueType.PERCENT,
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
    const agility = attacker.GetValueModifiedByAttribute(Attributes.AGILITY);
    const agilityModified = agility + Math.round(agility * this.GetBaseValue());
    attacker.SetValueModifiedInAttribute(agilityModified, Attributes.AGILITY);
  }

  UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }
}
