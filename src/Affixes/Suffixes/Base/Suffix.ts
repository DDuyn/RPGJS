import { IModifier } from "../../../Modifiers/Interfaces/IModifier";
import { AffixType } from "../../../Shared/Enums/AffixType";
import { Affix } from "../../Affix";

export abstract class Suffix extends Affix {
  /**
   *
   */
  constructor(suffixName: string, modifiers: IModifier[]) {
    super();
    this.Data = this.BuildAffix(suffixName, AffixType.SUFFIX, modifiers);
  }
}
