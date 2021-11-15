import { IncreasedAttackSpeed } from "../../../Modifiers/AttackSpeedModifier/IncreasedAttackSpeed";
import { IncreasedDamage } from "../../../Modifiers/DamageModifier/IncreasedDamage";
import { IModifier } from "../../../Modifiers/Interfaces/IModifier";
import { AffixType } from "../../../Shared/Enums/AffixType";
import { IAffix } from "../Interfaces/IAffix";
import { BaseAffixModel } from "../Models/BaseAffixModel";

export class Warlords implements IAffix {
  private NAME: string = `Warlord's`;
  private AFFIX_TYPE: AffixType = AffixType.PREFIX;
  private MODIFIERS: IModifier[] = [
    new IncreasedAttackSpeed(),
    new IncreasedDamage(),
  ];

  BuildAffix(): BaseAffixModel {
    return {
      Name: this.NAME,
      AffixType: this.AFFIX_TYPE,
      Modifiers: this.MODIFIERS,
    };
  }
}
