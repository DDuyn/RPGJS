import { Service } from "typedi";
import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
import { AttributeType } from "../../Shared/Enums/AttributeType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { ICharacterAttributesManager } from "../Interfaces/ICharacterAttributesManager";
import { GenerateBaseCharacterAttributes } from "../Model/Base/Utils/GenerateCharacter";

@Service({ global: true })
export class CharacterAttributesManager implements ICharacterAttributesManager {
  private ListBaseAttribute: BaseAttributeModel;

  BuildAttributes(characterClass: CharacterClass): void {
    this.ListBaseAttribute = GenerateBaseCharacterAttributes(characterClass);
  }

  GetListAttributes(): BaseAttributeModel {
    return this.ListBaseAttribute;
  }
  GetAttributesByType(attributeType: AttributeType): BaseAttribute[] {
    const attributes: BaseAttribute[] = Object.values(
      this.ListBaseAttribute
    ).filter(
      (attribute: BaseAttribute) => attribute?.GetTag() === attributeType
    );
    return attributes;
  }
  GetValueByAttribute(attributeSearched: string): number {
    return Object.values(this.ListBaseAttribute)
      .find(
        (attribute: BaseAttribute) => attribute.GetName() === attributeSearched
      )
      ?.GetValue()!;
  }
}
