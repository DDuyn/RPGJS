import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
import { MaxHealth } from "../../Attributes/PrimaryAttributes/MaxHealth";
import { BaseAttributeCharacter } from "../../Character/Base/BaseAttributesCharacter";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { ValueType } from "../../Shared/Enums/ValueType";
import { BasePassiveSkill } from "./Base/BasePassiveSkill";

export class Regenerate extends BasePassiveSkill {
  /**
   *
   */
  constructor(characterAttributes: BaseAttributeCharacter) {
    super();
    this.Name = "Regenerate";
    this.CastSelf = false;
    this.BaseValue = 0.1;
    this.EnergyCost = 0;
    this.SkillCharacterClass = CharacterClass.NONE;
    this.AttributeModifyType = AttributeModifyType.HEALTH;
    this.ValueType = ValueType.PERCENT;
    this.SetRequirements();
    this.SetCanPurchase(characterAttributes);
  }
  protected LogicSkill(attackerAttributes: BaseAttributeModel): number | void {
    const currentHealth = attackerAttributes.CurrentHealth.GetValue();
    return currentHealth + Math.round(currentHealth * this.BaseValue);
  }
  protected SetRequirements(): void {
    this.GetRequeriments().set(new MaxHealth(), 10);
  }
  protected UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }
}
