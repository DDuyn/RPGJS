import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { ICanPurchase } from "../../Shared/Interfaces/ICanPurchase";

export class SkillCanPurchaseManager implements ICanPurchase {
  IsCanPurchase(
    requirements: Map<BaseAttributeModel, number>,
    character: BaseCharacterModel
  ): boolean {
    let canPurchase = true;
    requirements.forEach((requireValue, attribute) => {
      if (
        requireValue > character.Attributes.GetValueByAttribute(attribute.Name)
      ) {
        canPurchase = false;
      }
    });
    return canPurchase;
  }
}
