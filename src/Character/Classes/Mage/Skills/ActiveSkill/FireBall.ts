import { Dextery } from "../../../../../Attributes/PrimaryAttributes/Dextery";
import { Intelligence } from "../../../../../Attributes/PrimaryAttributes/Intelligence";
import { CharacterClass } from "../../../../../Shared/Enums/CharacterClass";
import { ValueType } from "../../../../../Shared/Enums/ValueType";
import { BaseActiveSkill } from "../../../../../Skills/ActiveSkill/Base/BaseActiveSkill";
import { BaseAttributeCharacter } from "../../../../Base/BaseAttributesCharacter";

export class FireBall extends BaseActiveSkill {
  /**
   *
   */
  constructor(characterAttributes: BaseAttributeCharacter) {
    super();
    this.Name = "FireBall";
    this.CastSelf = false;
    this.BaseValue = 40;
    this.EnergyCost = 15;
    this.SkillCharacterClass = CharacterClass.MAGE;
    this.ValueType = ValueType.FLAT;
    this.SetRequirements();
    this.SetCanPurchase(characterAttributes);
  }

  protected LogicSkill(
    attackerAttributes?: BaseAttributeCharacter,
    defenderAttributes?: BaseAttributeCharacter
  ): number | void {
    console.log(attackerAttributes);
    console.log(defenderAttributes);
  }

  protected SetRequirements(): void {
    this.GetRequeriments().set(new Intelligence(), 20);
    this.GetRequeriments().set(new Dextery(), 10);
  }

  protected UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }
}
