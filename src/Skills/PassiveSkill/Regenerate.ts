import { Attributes } from "../../Attributes/Constants/Attributes";
import { ICharacter } from "../../Character/Interfaces/ICharacter";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { PassiveType } from "../../Shared/Enums/PassiveType";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { ISkill } from "../Interfaces/ISkill";
import { IUpgradeSkill } from "../Interfaces/IUpgradeSkill";
import { Skill } from "../Skill";

export class Regenerate extends Skill implements IUpgradeSkill {
  private NAME: string = "Regenerate";
  private ENERGY_COST: number = 0;
  private DURATION: number = 0;
  private BASE_VALUE: number = 0.1;
  private IS_CAST_SELF: boolean = false;
  private DESCRIPTION: string = "Description Regenerate";
  private REQUIREMENTS: Map<string, number> = new Map([
    [Attributes.MAXHEALTH, 100],
  ]);

  /**
   *
   */
  constructor(character: ICharacter) {
    super();
    this.Data = this.BuildSkill(
      this.NAME,
      SkillType.PASSIVE_SKILL,
      ValueType.PERCENT,
      CharacterClass.NONE,
      PassiveType.HEALTH,
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
    const currentHealth = attacker.GetValueModifiedByAttribute(
      Attributes.CURRENTHEALTH
    );
    const maxHealth = attacker.GetValueModifiedByAttribute(
      Attributes.MAXHEALTH
    );

    const healthRecovered =
      currentHealth +
      Math.round((maxHealth - currentHealth) * this.GetBaseValue());
    attacker.SetValueModifiedInAttribute(
      healthRecovered,
      Attributes.CURRENTHEALTH
    );
  }

  UpgradeSkill(): void {
    //TODO: Sistema de skill upgrade
    throw new Error("Method not implemented.");
  }
}
