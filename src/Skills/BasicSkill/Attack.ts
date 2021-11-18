import { AttributeConstants } from "../../Attributes/Constants/AttributeConstants";
import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
import { ICharacter } from "../../Character/Interfaces/ICharacter";
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

  LogicSkill(
    this: BaseSkillModel,
    attacker: ICharacter,
    defender?: ICharacter
  ): void {
    const attackerDamage = attacker.GetValueByAttribute(
      AttributeConstants.DAMAGE
    );
    const defenderDefense = defender!.GetValueByAttribute(
      AttributeConstants.DEFENSE
    );

    const damageCalculated: number = Utils.Random(
      attackerDamage * 0.75,
      attackerDamage
    );
    const defenseCalculated: number = Utils.Rounded(
      100 / (100 + defenderDefense)
    );

    defender!.SetValueInAttribute(
      Math.round(damageCalculated * defenseCalculated),
      AttributeConstants.DEFENSE
    );
  }
}
