import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { ILogicSkill } from "../Interfaces/ILogicSkill";
import { SkillManager } from "../Managers/SkillManager";

export class Rage extends SkillManager implements ILogicSkill {
  private NAME: string = "Rage";
  private ENERGY_COST: number = 15;
  private DURATION: number = 0;
  private BASE_VALUE: number = 20;
  private IS_CAST_SELF: boolean = true;
  private DESCRIPTION: string = "Description Rage";
  private REQUIREMENTS: Map<BaseAttribute, number> = new Map();
  /**
   *
   */
  constructor() {
    super();
    this.BuildSkill(
      this.NAME,
      SkillType.ACTIVE_SKILL,
      AttributeModifyType.DAMAGE,
      ValueType.FLAT,
      CharacterClass.WARRIOR,
      this.ENERGY_COST,
      this.DURATION,
      this.BASE_VALUE,
      this.IS_CAST_SELF,
      false,
      this.DESCRIPTION,
      this.REQUIREMENTS,
      this.LogicSkill
    );
  }

  LogicSkill(attacker: BaseCharacterModel): number | void {
    const attackerAttributes = attacker.Attributes.GetListAttributes();
    attackerAttributes.Damage.SetValue(
      attackerAttributes.Damage.GetValue() + this.BASE_VALUE
    );
  }
}
