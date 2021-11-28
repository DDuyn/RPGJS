import { Attributes } from "../../Attributes/Constants/Attributes";
import { ICharacter } from "../../Character/Interfaces/ICharacter";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { PassiveType } from "../../Shared/Enums/PassiveType";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { ISkill } from "../Interfaces/ISkill";
import { Skill } from "../Skill";

export class Rage extends Skill {
  private NAME: string = "Rage";
  private ENERGY_COST: number = 15;
  private DURATION: number = 2;
  private BASE_VALUE: number = 20;
  private IS_CAST_SELF: boolean = true;
  private DESCRIPTION: string = "Description Rage";
  private REQUIREMENTS: Map<string, number> = new Map();

  /**
   *
   */
  constructor(character: ICharacter) {
    super();
    this.Data = this.BuildSkill(
      this.NAME,
      SkillType.BASIC_SKILL,
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
    const damage = attacker.GetValueByAttribute(Attributes.DAMAGE);
    attacker.SetValueInAttribute(
      damage + this.GetBaseValue(),
      Attributes.DAMAGE
    );
  }
}
