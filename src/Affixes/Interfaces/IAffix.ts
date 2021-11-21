import { IModifier } from "../../Modifiers/Interfaces/IModifier";
import { AffixType } from "../../Shared/Enums/AffixType";
import { BaseAffixModel } from "../Models/BaseAffixModel";

export interface IAffix {
  BuildAffix(
    affixName: string,
    affixType: AffixType,
    modifiers: IModifier[]
  ): BaseAffixModel;
  GetData(): BaseAffixModel;
}
