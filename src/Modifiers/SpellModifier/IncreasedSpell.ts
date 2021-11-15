import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { Utils } from "../../Shared/Utils/Utils";
import { IModifier } from "../Interfaces/IModifier";
import { BaseModifierModel } from "../Model/Base/BaseModifierModel";

export class IncreasedSpell implements IModifier {
  private TIER: number = Utils.Random(1, 10);
  private BASE_MIN_VALUE: number = 5;
  private BASE_MAX_VALUE: number = 9;
  private NAME: string = "Increased Spell";
  private DESCRIPTION: string = `Increased Spell ${
    this.BASE_MAX_VALUE * this.TIER
  } to ${this.BASE_MIN_VALUE * this.TIER}`;
  private ATTRIBUTE_MODIFY: AttributeModifyType = AttributeModifyType.SPELL;
  private VALUE_TYPE: ValueType = ValueType.FLAT;

  BuildModifier(): BaseModifierModel {
    return {
      Name: this.NAME,
      Description: this.DESCRIPTION,
      AttributeModifier: this.ATTRIBUTE_MODIFY,
      ValueType: this.VALUE_TYPE,
      Tier: this.TIER,
      MaxValue: this.BASE_MAX_VALUE * this.TIER,
      MinValue: this.BASE_MIN_VALUE * this.TIER,
    };
  }
}
