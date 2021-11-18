import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
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

export class Smash implements ISkill, IUpgradeSkill {
  private NAME: string = "Smash";
  private ENERGY_COST: number = 25;
  private DURATION: number = 0;
  private BASE_VALUE: number = 40;
  private IS_CAST_SELF: boolean = false;
  private DESCRIPTION: string = "Description Smash";
  private REQUIREMENTS: Map<BaseAttributeModel, number> = new Map([
    [new Strength().BuildAttribute(), 8],
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

  UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }

  LogicSkill(
    this: BaseSkillModel,
    attacker: BaseCharacterModel,
    defender?: BaseCharacterModel
  ): void {
    console.log(attacker);
    console.log(defender);
  }
}
