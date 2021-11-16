import { IncreasedAgility } from "../../Modifiers/AgilityModifier/IncreasedAgility";
import { IModifier } from "../../Modifiers/Interfaces/IModifier";
import { AffixType } from "../../Shared/Enums/AffixType";
import { IAffix } from "../Interfaces/IAffix";
import { BaseAffixModel } from "../Models/BaseAffixModel";

export class Hunters implements IAffix {
  private NAME: string = `'Hunter's`;
  private AFFIX_TYPE: AffixType = AffixType.PREFIX;
  private MODIFIERS: IModifier[] = [new IncreasedAgility()];

  BuildAffix(): BaseAffixModel {
    return {
      Name: this.NAME,
      AffixType: this.AFFIX_TYPE,
      Modifiers: this.MODIFIERS,
    };
  }
}
