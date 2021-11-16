import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";

export const CanPurchase = (
  requirements: Map<BaseAttributeModel, number>,
  character: BaseCharacterModel
): boolean => {
  let canPurchase = true;
  requirements.forEach((requireValue, attribute) => {
    if (
      requireValue >
      character.AttributeManager.GetValueByAttribute(attribute.Name)
    ) {
      canPurchase = false;
    }
  });
  return canPurchase;
};
