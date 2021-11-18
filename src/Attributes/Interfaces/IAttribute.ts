import { AttributeType } from "../../Shared/Enums/AttributeType";
import { BaseAttributeModel } from "../Models/Base/BaseAttributeModel";
export interface IAttribute {
  BuildAttribute(
    attributeName: string,
    attributeType: AttributeType
  ): BaseAttributeModel;
  SetValue(value: number): void;
  GetValue(): number;
  GetName(): string;
}
