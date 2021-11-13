import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { ICanPurchase } from "../../Shared/Interfaces/ICanPurchase";

export class SkillCanPurchaseManager implements ICanPurchase {
  IsCanPurchase(
    requirements: Map<BaseAttribute, number>,
    character: BaseCharacterModel
  ): boolean {
    let canPurchase = true;
    requirements.forEach((requireValue, attribute) => {
      if (
        requireValue >
        character.Attributes.GetValueByAttribute(attribute.GetName())
      ) {
        canPurchase = false;
      }
    });
    return canPurchase;
  }
}
