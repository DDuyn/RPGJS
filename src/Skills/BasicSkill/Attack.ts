import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { Utils } from "../../Shared/Utils/Utils";
import { ISkill } from "../Interfaces/ISkill";
import { BaseSkillModel } from "../Models/Base/BaseSkillModel";

export class Attack implements ISkill {
  private NAME: string = "Attack";
  private ENERGY_COST: number = 0;
  private DURATION: number = 0;
  private BASE_VALUE: number = 0;
  private IS_CAST_SELF: boolean = false;
  private DESCRIPTION: string = "Description Attack";
  private REQUIREMENTS: Map<BaseAttribute, number> = new Map();

  GenerateSkill(): BaseSkillModel {
    const SkillModel = {
      Name: this.NAME,
      SkillType: SkillType.ACTIVE_SKILL,
      AttributeModifier: AttributeModifyType.NONE,
      ValueType: ValueType.FLAT,
      SkillCharacterClass: CharacterClass.NONE,
      EnergyCost: this.ENERGY_COST,
      Duration: this.DURATION,
      BaseValue: this.BASE_VALUE,
      CastSelf: this.IS_CAST_SELF,
      Description: this.DESCRIPTION,
      Level: 1,
      CanPurchase: false,
      Requirements: this.REQUIREMENTS,
      LogicSkill: this.LogicSkill,
    };

    return SkillModel;
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
