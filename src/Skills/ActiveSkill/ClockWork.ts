import { Agility } from "../../Attributes/BattleAttributes/Agility";
import { AttributeConstants } from "../../Attributes/Constants/AttributeConstants";
import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { ISkill } from "../Interfaces/ISkill";
import { IUpgradeSkill } from "../Interfaces/IUpgradeSkill";
import { BaseSkillModel } from "../Models/Base/BaseSkillModel";
import { CanPurchase } from "../Utils/CanPurchaseSkill";

export class ClockWork implements ISkill, IUpgradeSkill {
  private NAME: string = "ClockWork";
  private ENERGY_COST: number = 20;
  private DURATION: number = 0;
  private BASE_VALUE: number = 0.1;
  private IS_CAST_SELF: boolean = true;
  private DESCRIPTION: string = "Description ClockWork";
  private REQUIREMENTS: Map<BaseAttributeModel, number> = new Map([
    [new Agility().BuildAttribute(), 25],
  ]);

  GenerateSkill(character: BaseCharacterModel): BaseSkillModel {
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
      CanPurchase: CanPurchase(this.REQUIREMENTS, character),
      Requirements: this.REQUIREMENTS,
      LogicSkill: this.LogicSkill,
    };

    return SkillModel;
  }

  LogicSkill(this: BaseSkillModel, attacker: BaseCharacterModel): void {
    const agility = attacker.AttributeManager.GetAttribute(
      AttributeConstants.AGILITY
    ).Value;
    const agilityModified = agility + Math.round(agility * this.BaseValue);
    attacker.AttributeManager.GetAttribute(AttributeConstants.AGILITY).Value =
      agilityModified;
  }

  UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }
}
