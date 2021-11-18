import { AttributeType } from "../Shared/Enums/AttributeType";
import { Utils } from "../Shared/Utils/Utils";
import { IAttribute } from "./Interfaces/IAttribute";
import { BaseAttributeModel } from "./Models/Base/BaseAttributeModel";

export abstract class Attribute implements IAttribute {
  protected Data: BaseAttributeModel;

  /**
   * Build attribute
   * @param attributeName
   * @param attributeType
   * @returns BaseAttributeModel
   */
  BuildAttribute(
    attributeName: string,
    attributeType: AttributeType
  ): BaseAttributeModel {
    const model = {
      Name: attributeName,
      AttributeType: attributeType,
      Value: 0,
    };

    return Utils.DeepClone<BaseAttributeModel>(model);
  }

  /**
   * Set Attribute Value
   * @param value
   */
  SetValue(value: number): void {
    this.Data.Value = value;
  }

  /**
   * Get Attribute Value
   * @returns number
   */
  GetValue(): number {
    return this.Data.Value;
  }

  GetName(): string {
    return this.Data.Name;
  }
}
