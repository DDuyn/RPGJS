import { IModifier } from "../../../Modifiers/Interfaces/IModifier";
import { IncreasedSpell } from "../../../Modifiers/SpellModifier/IncreasedSpell";
import { AffixType } from "../../../Shared/Enums/AffixType";
import { IAffix } from "../Interfaces/IAffix";
import { BaseAffixModel } from "../Models/BaseAffixModel";

export class Eldritch implements IAffix {
  private NAME: string = "Eldritch";
  private AFFIX_TYPE: AffixType = AffixType.PREFIX;
  private MODIFIERS: IModifier[] = [new IncreasedSpell()];

  BuildAffix(): BaseAffixModel {
    return {
      Name: this.NAME,
      AffixType: this.AFFIX_TYPE,
      Modifiers: this.MODIFIERS,
    };
  }
}
