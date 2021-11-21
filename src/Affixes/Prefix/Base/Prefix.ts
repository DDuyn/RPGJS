import { IModifier } from "../../../Modifiers/Interfaces/IModifier";
import { AffixType } from "../../../Shared/Enums/AffixType";
import { Affix } from "../../Affix";

export abstract class Prefix extends Affix {
  /**
   *
   */
  constructor(prefixName: string, modifiers: IModifier[]) {
    super();
    this.Data = this.BuildAffix(prefixName, AffixType.PREFIX, modifiers);
  }
}
