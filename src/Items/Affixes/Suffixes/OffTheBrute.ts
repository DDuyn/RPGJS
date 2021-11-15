import { IncreseadDamagePercent } from "../../../Modifiers/DamageModifier/IncreseadDamagePercent";
import { IModifier } from "../../../Modifiers/Interfaces/IModifier";
import { AddStrength } from "../../../Modifiers/StrengthModifier/AddStrength";
import { AffixType } from "../../../Shared/Enums/AffixType";
import { IAffix } from "../Interfaces/IAffix";
import { BaseAffixModel } from "../Models/BaseAffixModel";

export class OffTheBrute implements IAffix {
  private NAME: string = "Off the Brute";
  private AFFIX_TYPE: AffixType = AffixType.SUFFIX;
  private MODIFIERS: IModifier[] = [
    new AddStrength(),
    new IncreseadDamagePercent(),
  ];

  BuildAffix(): BaseAffixModel {
    return {
      Name: this.NAME,
      AffixType: this.AFFIX_TYPE,
      Modifiers: this.MODIFIERS,
    };
  }
}
