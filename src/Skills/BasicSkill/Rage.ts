import { BaseAttributeModel } from "../../../../../Attributes/Models/Base/BaseAttributeModel";
import { CharacterClass } from "../../../../../Shared/Enums/CharacterClass";
import { ValueType } from "../../../../../Shared/Enums/ValueType";
import { BaseBasicSkill } from "../../../../../Skills/BasicSkill/Base/BaseBasicSkill";

export class Rage extends BaseBasicSkill {
  /**
   *
   */
  constructor() {
    super();
    this.Name = "Rage";
    this.CastSelf = true;
    this.BaseValue = 20;
    this.SkillCharacterClass = CharacterClass.WARRIOR;
    this.ValueType = ValueType.FLAT;
  }

  protected LogicSkill(attackerAttributes: BaseAttributeModel): number | void {
    attackerAttributes.Damage.SetValue(
      attackerAttributes.Damage.GetValue() + this.GetBaseValue()
    );
  }
  protected SetRequirements(): void {
    throw new Error("Method not implemented.");
  }
  protected UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }
}
