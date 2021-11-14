import { IModifierManager } from "../Interfaces/IModifierManager";
import { BaseModifierModel } from "../Model/Base/BaseModifierModel";

export class ModifierManager implements IModifierManager {
  private ModifierModel: BaseModifierModel;

  BuildModifier(): BaseModifierModel {
    return this.ModifierModel;
  }
}
