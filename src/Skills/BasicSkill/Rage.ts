import { AttributeConstants } from "../../Attributes/Constants/AttributeConstants";
import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { ISkill } from "../Interfaces/ISkill";
import { BaseSkillModel } from "../Models/Base/BaseSkillModel";

export class Rage implements ISkill {
  private NAME: string = "Rage";
  private ENERGY_COST: number = 15;
  private DURATION: number = 0;
  private BASE_VALUE: number = 20;
  private IS_CAST_SELF: boolean = true;
  private DESCRIPTION: string = "Description Rage";
  private REQUIREMENTS: Map<BaseAttributeModel, number> = new Map();

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

  LogicSkill(this: BaseSkillModel, attacker: BaseCharacterModel): void {
    attacker.AttributeManager.GetAttribute(AttributeConstants.DAMAGE).Value =
      attacker.AttributeManager.GetAttribute(AttributeConstants.DAMAGE).Value +
      this.BaseValue;
  }
}
