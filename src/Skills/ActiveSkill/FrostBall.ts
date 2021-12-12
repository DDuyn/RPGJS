import { Attributes } from "../../Attributes/Constants/Attributes";
import { ICharacter } from "../../Character/Interfaces/ICharacter";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { PassiveType } from "../../Shared/Enums/PassiveType";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { ISkill } from "../Interfaces/ISkill";
import { Skill } from "../Skill";

export class FrostBall extends Skill {
  private NAME: string = "Frost Ball";
  private ENERGY_COST: number = 15;
  private DURATION: number = 1;
  private BASE_VALUE: number = 25;
  private IS_CAST_SELF: boolean = false;
  private DESCRIPTION: string = "Frost Ball";
  private REQUIREMENTS: Map<string, number> = new Map([[Attributes.SPELL, 50]]);

  constructor(character: ICharacter, level: number) {
    super();
    this.Data = this.BuildSkill(
      this.NAME,
      SkillType.ACTIVE_SKILL,
      ValueType.FLAT,
      CharacterClass.MAGE,
      PassiveType.NONE,
      this.ENERGY_COST,
      this.BASE_VALUE,
      this.IS_CAST_SELF,
      this.DURATION,
      this.DESCRIPTION,
      this.REQUIREMENTS,
      character,
      level
    );
  }

  LogicSkill(this: ISkill, attacker: ICharacter, defender?: ICharacter): void {
    throw new Error("Method not implemented.");
  }
}
