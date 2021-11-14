import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { AttributeType } from "../../Shared/Enums/AttributeType";
import { BaseAttributeModel } from "../Models/Base/BaseAttributeModel";
export interface IAttributeManager {
  BuildAttributes(character: BaseCharacterModel): void;
  GetListAttributes(): BaseAttributeModel[];
  GetAttribute(attributeSearched: string): BaseAttributeModel;
  GetAttributesByType(attributeType: AttributeType): BaseAttributeModel[];
  GetValueByAttribute(attributeSearched: string): number;
}
