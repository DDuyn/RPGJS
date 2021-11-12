import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { Utils } from "../../Shared/Utils/Utils";
import { ILogicSkill } from "../Interfaces/ILogicSkill";
import { SkillManager } from "../Managers/SkillManager";

export class Attack extends SkillManager implements ILogicSkill {
  private NAME: string = "Attack";
  private ENERGY_COST: number = 0;
  private DURATION: number = 0;
  private BASE_VALUE: number = 0;
  private IS_CAST_SELF: boolean = false;
  private DESCRIPTION: string = "Description Attack";
  private REQUIREMENTS: Map<BaseAttribute, number> = new Map();
  /**
   *
   */
  constructor() {
    super();
    this.BuildSkill(
      this.NAME,
      SkillType.ACTIVE_SKILL,
      AttributeModifyType.NONE,
      ValueType.FLAT,
      CharacterClass.NONE,
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

  LogicSkill(
    attacker: BaseCharacterModel,
    defender?: BaseCharacterModel
  ): number {
    const attackerAttributes = attacker.Attributes.GetListAttributes();
    const defenderAttributes = defender!.Attributes.GetListAttributes();
    const damageCalculated: number = Utils.Random(
      attackerAttributes.Damage.GetValue() * 0.75,
      attackerAttributes.Damage.GetValue()
    );
    const defenseCalculated: number = Utils.Rounded(
      100 / (100 + defenderAttributes.Defense.GetValue())
    );

    return Math.round(damageCalculated * defenseCalculated);
  }
}
