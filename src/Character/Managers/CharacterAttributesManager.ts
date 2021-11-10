import { Service } from "typedi";
import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
import { AttributeType } from "../../Shared/Enums/AttributeType";
import { ICharacterAttributesManager } from "../Interfaces/ICharacterAttributesManager";
import { BaseCharacterModel } from "../Model/Base/BaseCharacterModel";

@Service()
export class CharacterAttributesManager implements ICharacterAttributesManager {
  private ListBaseAttribute: BaseAttributeModel;

  BuildAttributes(): void {
    //TODO: Revisar inicialización de experiencia.
    this.ListBaseAttribute.Level.SetValue(1);
    this.ListBaseAttribute.NeededExperience.SetValue(100);
    this.ListBaseAttribute.TotalExperience.SetValue(0);
    this.ListBaseAttribute.CurrenthHealth.SetValue(
      this.ListBaseAttribute.MaxHealth.GetValue()
    );
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
    ).filter((attribute) => attribute?.GetTag() === attributeType);
    return attributes;
  }
  GetValueByAttribute(
    character: BaseCharacterModel,
    attributeSearched: string
  ): number {
    return Object.values(character.attributes)
      .find((attribute) => attribute.GetName() === attributeSearched)
      ?.GetValue()!;
  }
}
