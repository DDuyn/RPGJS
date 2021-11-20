import { Constants } from "../Shared/Constants/Constants";
import { ValueType } from "../Shared/Enums/ValueType";
import { Utils } from "../Shared/Utils/Utils";
import { IModifier } from "./Interfaces/IModifier";
import { BaseModifierModel } from "./Model/Base/BaseModifierModel";

export abstract class Modifier implements IModifier {
  protected Data: BaseModifierModel;

  BuildModifier(
    modifierName: string,
    baseValue: number,
    attributeModifier: string,
    valueType: ValueType,
    hasValueRange: boolean
  ): BaseModifierModel {
    const tier = Utils.Random(1, 10);
    const model: BaseModifierModel = {
      Name: modifierName,
      Description: Constants.STRING_EMPY,
      Tier: tier,
      AttributeModifier: attributeModifier,
      ValueType: valueType,
      MinValue: baseValue * tier,
      MaxValue: hasValueRange ? baseValue * 2 * tier : 0,
    };
    return Utils.DeepClone<BaseModifierModel>(model);
  }
}
