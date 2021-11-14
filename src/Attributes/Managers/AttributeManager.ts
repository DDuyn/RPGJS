import { Service } from "typedi";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { GenerateBaseCharacterAttributes } from "../../Character/Model/Base/Utils/GenerateCharacter";
import { AttributeType } from "../../Shared/Enums/AttributeType";
import { IAttributeManager } from "../Interfaces/IAttributeManager";
import { BaseAttributeModel } from "../Models/Base/BaseAttributeModel";

@Service()
export class AttributeManager implements IAttributeManager {
  private ListAttributes: BaseAttributeModel[] = [];

  BuildAttributes(character: BaseCharacterModel): void {
    this.ListAttributes = GenerateBaseCharacterAttributes(character);
  }

  GetListAttributes(): BaseAttributeModel[] {
    return this.ListAttributes;
  }

  GetAttribute(attributeSearched: string): BaseAttributeModel {
    return this.ListAttributes.find(
      (attribute) => attribute.Name === attributeSearched
    )!;
  }

  GetAttributesByType(attributeType: AttributeType): BaseAttributeModel[] {
    return this.ListAttributes.filter(
      (attribute) => attribute.AttributeType === attributeType
    );
  }
  GetValueByAttribute(attributeSearched: string): number {
    return this.ListAttributes.find(
      (attribute) => attribute.Name === attributeSearched
    )?.Value!;
  }
}
