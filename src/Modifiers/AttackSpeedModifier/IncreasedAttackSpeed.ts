import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { Utils } from "../../Shared/Utils/Utils";
import { IModifier } from "../Interfaces/IModifier";
import { BaseModifierModel } from "../Model/Base/BaseModifierModel";

export class IncreasedAttackSpeed implements IModifier {
  private TIER: number = Utils.Random(1, 10);
  private BASE_MAX_VALUE = 5;
  private NAME: string = "IncreasedAttackSpeed";
  private DESCRIPTION: string = `Increased ${
    this.BASE_MAX_VALUE * this.TIER
  } % Attack Speed`;
  private ATTRIBUTE_MODIFY: AttributeModifyType = AttributeModifyType.AGILITY;
  private VALUE_TYPE: ValueType = ValueType.PERCENT;

  BuildModifier(): BaseModifierModel {
    return {
      Name: this.NAME,
      Description: this.DESCRIPTION,
      AttributeModifier: this.ATTRIBUTE_MODIFY,
      ValueType: this.VALUE_TYPE,
      Tier: this.TIER,
      MaxValue: this.BASE_MAX_VALUE * this.TIER,
      MinValue: 0,
    };
  }
}
