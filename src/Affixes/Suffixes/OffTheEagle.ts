import { AddAgility } from "../../Modifiers/AgilityModifier/AddAgility";
import { IModifier } from "../../Modifiers/Interfaces/IModifier";
import { AffixType } from "../../Shared/Enums/AffixType";
import { IAffix } from "../Interfaces/IAffix";
import { BaseAffixModel } from "../Models/BaseAffixModel";

export class OffTheEagle implements IAffix {
  private NAME: string = "Off the Eagle";
  private AFFIX_TYPE: AffixType = AffixType.SUFFIX;
  private MODIFIERS: IModifier[] = [new AddAgility()];

  BuildAffix(): BaseAffixModel {
    return {
      Name: this.NAME,
      AffixType: this.AFFIX_TYPE,
      Modifiers: this.MODIFIERS,
    };
  }
}
