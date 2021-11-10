import { Service } from "typedi";
import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
import { AttributeType } from "../../Shared/Enums/AttributeType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { ICharacterAttributesManager } from "../Interfaces/ICharacterAttributesManager";
import { BaseCharacterModel } from "../Model/Base/BaseCharacterModel";
import { GenerateBaseCharacterAttributes } from "../Model/Base/Utils/GenerateCharacter";

@Service()
export class CharacterAttributesManager implements ICharacterAttributesManager {
  private ListBaseAttribute: BaseAttributeModel;

  BuildAttributes(characterClass: CharacterClass): BaseAttributeModel {
    return GenerateBaseCharacterAttributes(characterClass);
  }

  GetListAttributes(): BaseAttributeModel {
    return this.ListBaseAttribute;
  }
  GetAttributesByType(
    character: BaseCharacterModel,
    attributeType: AttributeType
  ): BaseAttribute[] {
    const attributes: BaseAttribute[] = Object.values(
      character.attributes
    ).filter(
      (attribute: BaseAttribute) => attribute?.GetTag() === attributeType
    );
    return attributes;
  }
  GetValueByAttribute(
    character: BaseCharacterModel,
    attributeSearched: string
  ): number {
    return Object.values(character.attributes)
      .find(
        (attribute: BaseAttribute) => attribute.GetName() === attributeSearched
      )
      ?.GetValue()!;
  }
}
