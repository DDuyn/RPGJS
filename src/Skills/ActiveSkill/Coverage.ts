import { AttributeConstants } from "../../Attributes/Constants/AttributeConstants";
import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
import { MaxHealth } from "../../Attributes/Models/PrimaryAttributes/MaxHealth";
import { Strength } from "../../Attributes/Models/PrimaryAttributes/Strength";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { ISkill } from "../Interfaces/ISkill";
import { IUpgradeSkill } from "../Interfaces/IUpgradeSkill";
import { BaseSkillModel } from "../Models/Base/BaseSkillModel";
import { CanPurchase } from "../Utils/CanPurchaseSkill";

export class Coverage implements ISkill, IUpgradeSkill {
  private NAME: string = "Coverage";
  private ENERGY_COST: number = 35;
  private DURATION: number = 0;
  private BASE_VALUE: number = 40;
  private IS_CAST_SELF: boolean = true;
  private DESCRIPTION: string = "Description Coverage";
  private REQUIREMENTS: Map<BaseAttributeModel, number> = new Map([
    [new Strength().BuildAttribute(), 5],
    [new MaxHealth().BuildAttribute(), 20],
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
    const defense = attacker.AttributeManager.GetAttribute(
      AttributeConstants.DEFENSE
    );
    attacker.AttributeManager.GetAttribute(AttributeConstants.DEFENSE).Value =
      defense.Value + this.BaseValue;
  }

  UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }
}
