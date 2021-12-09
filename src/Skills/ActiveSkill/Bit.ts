import { Attributes } from "../../Attributes/Constants/Attributes";
import { ICharacter } from "../../Character/Interfaces/ICharacter";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { PassiveType } from "../../Shared/Enums/PassiveType";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { Utils } from "../../Shared/Utils/Utils";
import { ISkill } from "../Interfaces/ISkill";
import { Skill } from "../Skill";

export class Bit extends Skill {
  private NAME: string = "Bit";
  private ENERGY_COST: number = 5;
  private DURATION: number = 0;
  private BASE_VALUE: number = 10;
  private IS_CAST_SELF: boolean = false;
  private DESCRIPTION: string = "Description Bit";
  private REQUIREMENTS: Map<string, number> = new Map([
    [Attributes.STRENGTH, 10],
  ]);

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

  LogicSkill(this: ISkill, attacker: ICharacter, defender: ICharacter): void {
    const defenderMaxHealth = defender.GetValueModifiedByAttribute(
      Attributes.MAXHEALTH
    );
    const defenderDefense = defender.GetValueModifiedByAttribute(
      Attributes.DEFENSE
    );

    const attackerDamage = attacker.GetValueModifiedByAttribute(
      Attributes.DAMAGE
    );

    const defenseCalculated = Utils.Rounded(100 / (100 + defenderDefense));
    const damage =
      attackerDamage + defenderMaxHealth * (this.GetBaseValue() / 100);

    const damageTotal =
      defender.GetValueModifiedByAttribute(Attributes.CURRENTHEALTH) -
      Math.round(damage * defenseCalculated);

    defender.SetValueModifiedInAttribute(damageTotal, Attributes.CURRENTHEALTH);
  }
}
