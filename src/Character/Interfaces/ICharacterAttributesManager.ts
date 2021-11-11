import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
import { AttributeType } from "../../Shared/Enums/AttributeType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";

export interface ICharacterAttributesManager {
  BuildAttributes(characterClass: CharacterClass): void;
  GetListAttributes(): BaseAttributeModel;
  GetAttributesByType(attributeType: AttributeType): BaseAttribute[];
  GetValueByAttribute(attributeSearched: string): number;
}
