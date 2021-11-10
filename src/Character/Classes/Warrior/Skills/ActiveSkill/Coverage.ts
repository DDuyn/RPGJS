import { MaxHealth } from "../../../../../Attributes/PrimaryAttributes/MaxHealth";
import { Strength } from "../../../../../Attributes/PrimaryAttributes/Strength";
import { CharacterClass } from "../../../../../Shared/Enums/CharacterClass";
import { ValueType } from "../../../../../Shared/Enums/ValueType";
import { BaseActiveSkill } from "../../../../../Skills/ActiveSkill/Base/BaseActiveSkill";
import { BaseAttributeCharacter } from "../../../../Base/BaseAttributesCharacter";

export class Coverage extends BaseActiveSkill {
  /**
   *
   */
  constructor(characterAttributes: BaseAttributeCharacter) {
    super();
    this.Name = "Coverage";
    this.CastSelf = true;
    this.BaseValue = 40;
    this.SkillCharacterClass = CharacterClass.WARRIOR;
    this.ValueType = ValueType.FLAT;
    this.SetRequirements();
    this.SetCanPurchase(characterAttributes);
  }

  protected LogicSkill(
    attackerAttributes?: BaseAttributeCharacter
  ): number | void {
    attackerAttributes!.Defense.SetValue(
      attackerAttributes!.Defense.GetValue() + this.BaseValue
    );
  }
  protected SetRequirements(): void {
    this.GetRequeriments().set(new Strength(), 5);
    this.GetRequeriments().set(new MaxHealth(), 5);
  }
  protected UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }
}
