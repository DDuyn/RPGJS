import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { MaxHealth } from "../../Attributes/PrimaryAttributes/MaxHealth";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { ILogicSkill } from "../Interfaces/ILogicSkill";
import { IUpgradeSkill } from "../Interfaces/IUpgradeSkill";
import { SkillManager } from "../Managers/SkillManager";

export class Regenerate
  extends SkillManager
  implements ILogicSkill, IUpgradeSkill {
  private NAME: string = "Regenerate";
  private ENERGY_COST: number = 0;
  private DURATION: number = 0;
  private BASE_VALUE: number = 0.1;
  private IS_CAST_SELF: boolean = false;
  private DESCRIPTION: string = "Description Regenerate";
  private REQUIREMENTS: Map<BaseAttribute, number> = new Map([
    [new MaxHealth(), 100],
  ]);
  /**
   *
   */
  constructor(character: BaseCharacterModel) {
    super();
    this.BuildSkill(
      this.NAME,
      SkillType.ACTIVE_SKILL,
      AttributeModifyType.HEALTH,
      ValueType.PERCENT,
      CharacterClass.NONE,
      this.ENERGY_COST,
      this.DURATION,
      this.BASE_VALUE,
      this.IS_CAST_SELF,
      this.SetCanPurchase(character),
      this.DESCRIPTION,
      this.REQUIREMENTS,
      this.LogicSkill
    );
  }
  LogicSkill(attacker: BaseCharacterModel): number | void {
    const attackerAttributes = attacker.Attributes.GetListAttributes();
    const currentHealth = attackerAttributes.CurrentHealth.GetValue();
    return currentHealth + Math.round(currentHealth * this.BASE_VALUE);
  }
  UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }
}
