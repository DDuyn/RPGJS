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
      ValueModified: 0,
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
   * Set Attribute Value Modified
   * @param value
   */
  SetValueModified(value: number): void {
    this.Data.ValueModified = value;
  }

  /**
   * Get Attribute Value
   * @returns number
   */
  GetValue(): number {
    return this.Data.Value;
  }

  /**
   * Get Attribute Value Modified
   * @returns
   */
  GetValueModified(): number {
    return this.Data.ValueModified;
  }

  GetName(): string {
    return this.Data.Name;
  }
}
