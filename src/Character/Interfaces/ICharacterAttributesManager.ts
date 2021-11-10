import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
import { AttributeType } from "../../Shared/Enums/AttributeType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { BaseCharacterModel } from "../Model/Base/BaseCharacterModel";

export interface ICharacterAttributesManager {
  BuildAttributes(characterClass: CharacterClass): BaseAttributeModel;
  GetListAttributes(): BaseAttributeModel;
  GetAttributesByType(
    character: BaseCharacterModel,
    attributeType: AttributeType
  ): BaseAttribute[];
  GetValueByAttribute(
    character: BaseCharacterModel,
    attributeSearched: string
  ): number;
}
