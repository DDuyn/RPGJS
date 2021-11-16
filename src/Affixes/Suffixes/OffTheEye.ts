import { IModifier } from "../../Modifiers/Interfaces/IModifier";
import { AddSpell } from "../../Modifiers/SpellModifier/AddSpell";
import { AffixType } from "../../Shared/Enums/AffixType";
import { IAffix } from "../Interfaces/IAffix";
import { BaseAffixModel } from "../Models/BaseAffixModel";

export class OffTheEye implements IAffix {
  private NAME: string = "Off the Eye";
  private AFFIX_TYPE: AffixType = AffixType.SUFFIX;
  private MODIFIERS: IModifier[] = [new AddSpell()];

  BuildAffix(): BaseAffixModel {
    return {
      Name: this.NAME,
      AffixType: this.AFFIX_TYPE,
      Modifiers: this.MODIFIERS,
    };
  }
}
