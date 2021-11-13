import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";

export interface ICanPurchase {
  IsCanPurchase(object: unknown, character: BaseCharacterModel): boolean;
}
