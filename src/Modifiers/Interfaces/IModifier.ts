import { BaseModifierModel } from "../Model/Base/BaseModifierModel";

export interface IModifier {
  BuildModifier(): BaseModifierModel;
}
