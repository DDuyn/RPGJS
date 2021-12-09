import { AttributeType } from "../../../Shared/Enums/AttributeType";

export type BaseAttributeModel = {
  Value: number;
  ValueModified: number;
  AttributeType: AttributeType;
  Name: string;
};
