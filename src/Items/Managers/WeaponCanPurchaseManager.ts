import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { ICanPurchase } from "../../Shared/Interfaces/ICanPurchase";

export class WeaponCanPurchaseManager implements ICanPurchase {
  IsCanPurchase(
    requirements: Map<BaseAttributeModel, number>,
    character: BaseCharacterModel
  ): boolean {
    throw new Error("Method not implemented.");
  }
}
