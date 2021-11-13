import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { Dextery } from "../../Attributes/PrimaryAttributes/Dextery";
import { Intelligence } from "../../Attributes/PrimaryAttributes/Intelligence";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { ISkill } from "../Interfaces/ISkill";
import { IUpgradeSkill } from "../Interfaces/IUpgradeSkill";
import { SkillCanPurchaseManager } from "../Managers/SkillCanPurchaseManager";
import { BaseSkillModel } from "../Models/Base/BaseSkillModel";

export class FireBall
  extends SkillCanPurchaseManager
  implements ISkill, IUpgradeSkill
{
  private NAME: string = "FireBall";
  private ENERGY_COST: number = 15;
  private DURATION: number = 0;
  private BASE_VALUE: number = 40;
  private IS_CAST_SELF: boolean = false;
  private DESCRIPTION: string = "Description FireBall";
  private REQUIREMENTS: Map<BaseAttribute, number> = new Map([
    [new Intelligence(), 20],
    [new Dextery(), 20],
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
      CanPurchase: this.IsCanPurchase(this.REQUIREMENTS, character),
      Requirements: this.REQUIREMENTS,
      LogicSkill: this.LogicSkill,
    };

    return SkillModel;
  }

  LogicSkill(
    attacker: BaseCharacterModel,
    defender?: BaseCharacterModel
  ): number | void {
    console.log(attacker);
    console.log(defender);
  }

  UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }
}
