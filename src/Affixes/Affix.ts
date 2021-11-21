import { IModifier } from "../Modifiers/Interfaces/IModifier";
import { AffixType } from "../Shared/Enums/AffixType";
import { Utils } from "../Shared/Utils/Utils";
import { IAffix } from "./Interfaces/IAffix";
import { BaseAffixModel } from "./Models/BaseAffixModel";

export abstract class Affix implements IAffix {
  protected Data: BaseAffixModel;
  BuildAffix(
    affixName: string,
    affixType: AffixType,
    modifiers: IModifier[]
  ): BaseAffixModel {
    const model: BaseAffixModel = {
      Name: affixName,
      AffixType: affixType,
      Modifiers: modifiers,
    };

    return Utils.DeepClone<BaseAffixModel>(model);
  }

  GetData(): BaseAffixModel {
    return this.Data;
  }
}
