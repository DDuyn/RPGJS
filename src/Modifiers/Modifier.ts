import { ICharacter } from "../Character/Interfaces/ICharacter";
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
    valueType: ValueType
  ): BaseModifierModel {
    const tier = Utils.Random(1, 10);
    const model: BaseModifierModel = {
      Name: modifierName,
      Description: Constants.STRING_EMPY,
      Tier: tier,
      AttributeModifier: attributeModifier,
      ValueType: valueType,
      Value: baseValue * tier,
    };
    return Utils.DeepClone<BaseModifierModel>(model);
  }

  /**
   * Apply Effects
   * @param character
   */
  Apply(character: ICharacter, addWeapon: boolean): void {
    const baseValue = character.GetValueModifiedByAttribute(
      this.Data.AttributeModifier
    );
    let calculateValue = 0;
    if (!addWeapon) {
      calculateValue = character.GetValueByAttribute(
        this.Data.AttributeModifier
      );
    } else {
      calculateValue =
        this.Data.ValueType === ValueType.PERCENT
          ? Utils.AddPercentOfValue(baseValue, this.Data.Value)
          : baseValue + this.Data.Value;
    }

    character.SetValueModifiedInAttribute(
      calculateValue,
      this.Data.AttributeModifier
    );
  }
}
