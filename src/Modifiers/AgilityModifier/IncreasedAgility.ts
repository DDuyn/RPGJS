import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { Utils } from "../../Shared/Utils/Utils";
import { IModifier } from "../Interfaces/IModifier";
import { BaseModifierModel } from "../Model/Base/BaseModifierModel";

export class IncreasedAgility implements IModifier {
  private TIER: number = Utils.Random(1, 10);
  private BASE_MIN_VALUE: number = 3;
  private BASE_MAX_VALUE: number = 6;
  private NAME: string = "IncreasedAgility";
  private DESCRIPTION: string = `Increased Agility ${
    this.BASE_MIN_VALUE * this.TIER
  }
  } to ${this.BASE_MAX_VALUE * this.TIER}`;
  private ATTRIBUTE_MODIFY: AttributeModifyType = AttributeModifyType.AGILITY;
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
