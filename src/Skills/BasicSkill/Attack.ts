import { Attributes } from "../../Attributes/Constants/Attributes";
import { ICharacter } from "../../Character/Interfaces/ICharacter";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { PassiveType } from "../../Shared/Enums/PassiveType";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { Utils } from "../../Shared/Utils/Utils";
import { ISkill } from "../Interfaces/ISkill";
import { Skill } from "../Skill";

export class Attack extends Skill {
  private NAME: string = "Attack";
  private ENERGY_COST: number = 0;
  private DURATION: number = 0;
  private BASE_VALUE: number = 0;
  private IS_CAST_SELF: boolean = false;
  private DESCRIPTION: string = "Description Attack";
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

  LogicSkill(this: ISkill, attacker: ICharacter, defender: ICharacter): void {
    const attackerDamage = attacker.GetValueByAttribute(Attributes.DAMAGE);

    const defenderDefense = defender.GetValueByAttribute(Attributes.DEFENSE);

    const damageCalculated: number = Utils.Random(
      attackerDamage * 0.75,
      attackerDamage
    );
    const defenseCalculated: number = Utils.Rounded(
      100 / (100 + defenderDefense)
    );

    const damageTotal =
      defender.GetValueByAttribute(Attributes.CURRENTHEALTH) -
      Math.round(damageCalculated * defenseCalculated);

    defender.SetValueInAttribute(damageTotal, Attributes.CURRENTHEALTH);
  }
}
