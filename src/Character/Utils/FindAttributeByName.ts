import { IAttribute } from "../../Attributes/Interfaces/IAttribute";

export const FindAttributeByName = (
  attributeName: string,
  attribute: IAttribute
): boolean => attribute.GetName() === attributeName;
