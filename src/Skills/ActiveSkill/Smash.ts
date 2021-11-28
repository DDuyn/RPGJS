import { Attributes } from "../../Attributes/Constants/Attributes";
import { ICharacter } from "../../Character/Interfaces/ICharacter";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { PassiveType } from "../../Shared/Enums/PassiveType";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { ISkill } from "../Interfaces/ISkill";
import { IUpgradeSkill } from "../Interfaces/IUpgradeSkill";
import { Skill } from "../Skill";

export class Smash extends Skill implements IUpgradeSkill {
  private NAME: string = "Smash";
  private ENERGY_COST: number = 25;
  private DURATION: number = 0;
  private BASE_VALUE: number = 40;
  private IS_CAST_SELF: boolean = false;
  private DESCRIPTION: string = "Description Smash";
  private REQUIREMENTS: Map<string, number> = new Map([
    [Attributes.STRENGTH, 8],
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
      CharacterClass.WARRIOR,
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

  UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }

  LogicSkill(this: ISkill, attacker: ICharacter, defender?: ICharacter): void {
    console.log(attacker);
    console.log(defender);
  }
}
