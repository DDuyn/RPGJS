import { BaseAttributeModel } from "../../../../../Attributes/Models/Base/BaseAttributeModel";
import { Strength } from "../../../../../Attributes/PrimaryAttributes/Strength";
import { CharacterClass } from "../../../../../Shared/Enums/CharacterClass";
import { ValueType } from "../../../../../Shared/Enums/ValueType";
import { BaseActiveSkill } from "../../../../../Skills/ActiveSkill/Base/BaseActiveSkill";
import { Fury } from "../../Attributes/Fury";

export class Smash extends BaseActiveSkill {
  /**
   *
   */
  constructor(characterAttributes: BaseAttributeModel) {
    super();
    this.Name = "Smash";
    this.CastSelf = false;
    this.BaseValue = 40;
    this.SkillCharacterClass = CharacterClass.WARRIOR;
    this.ValueType = ValueType.FLAT;
    this.SetRequirements();
    this.SetCanPurchase(characterAttributes);
  }

  protected SetRequirements(): void {
    this.GetRequeriments().set(new Strength(), 8);
    this.GetRequeriments().set(new Fury(), 15);
  }

  protected UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }

  protected LogicSkill(
    attackerAttributes?: BaseAttributeModel,
    defenderAttributes?: BaseAttributeModel
  ): number | void {
    console.log(attackerAttributes);
    console.log(defenderAttributes);
  }
}
