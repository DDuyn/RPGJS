import { BaseAffixModel } from "../../Affixes/Models/BaseAffixModel";
import { AttributeConstants } from "../../Attributes/Constants/AttributeConstants";
import { IncreasedAttackSpeed } from "../../Modifiers/AttackSpeedModifier/IncreasedAttackSpeed";
import { BaseModifierModel } from "../../Modifiers/Model/Base/BaseModifierModel";
import { Constants } from "../../Shared/Constants/Constants";
import { ItemType } from "../../Shared/Enums/ItemType";
import { LocationWeapon } from "../../Shared/Enums/LocationWeapon";
import { Rarity } from "../../Shared/Enums/Rarity";
import { WeaponType } from "../../Shared/Enums/WeaponType";
import { IWeapon } from "../Interfaces/IWeapon";
import { BaseWeaponModel } from "../Models/BaseWeaponModel";
import { CalculateBaseDamage } from "../Utils/CalculateBaseDamage";
import { GenerateExplicitsModifers } from "../Utils/GenerateExplicitsModifiers";
import { GenerateItemName } from "../Utils/GenerateItemNameByModifierType";
import { GeneratePrefixes } from "../Utils/GeneratePrefixes";
import { GenerateSuffixes } from "../Utils/GenerateSuffixes";

export class RustedHatched implements IWeapon {
  private BASE_DAMAGE: number = 7;
  private BASE_NAME: string = "Rusted Hatched";
  private DESCRIPTION: string = "Rusted Hatched Description";
  private WEAPON_TYPE: WeaponType = WeaponType.ONE_HANDED_AXE;
  private IS_TWO_HANDED: boolean = false;
  private IMPLICITS: BaseModifierModel[] = [
    new IncreasedAttackSpeed().BuildModifier(),
  ];
  private REQUIREMENTS: Map<string, number> = new Map();
  private PREFIXES: BaseAffixModel[] = [];
  private SUFFIXES: BaseAffixModel[] = [];
  private EXPLICITS: BaseModifierModel[] = [];

  BuildWeapon(levelItem: number, rarity: Rarity): BaseWeaponModel {
    this.PREFIXES = GeneratePrefixes(rarity);
    this.SUFFIXES = GenerateSuffixes(rarity, this.PREFIXES.length > 0);
    this.REQUIREMENTS = new Map([
      [AttributeConstants.STRENGTH, 8 * levelItem],
      [AttributeConstants.DEXTERY, 5 * levelItem],
    ]);
    this.EXPLICITS = GenerateExplicitsModifers(this.PREFIXES, this.SUFFIXES);

    return {
      Name: GenerateItemName(
        this.BASE_NAME,
        this.PREFIXES,
        this.SUFFIXES,
        rarity
      ),
      SubName:
        rarity !== Rarity.COMMON && rarity !== Rarity.MAGIC
          ? this.BASE_NAME
          : Constants.STRING_EMPY,
      Description: this.DESCRIPTION,
      Damage: CalculateBaseDamage(this.BASE_DAMAGE, levelItem, rarity),
      LocationWeapon: [LocationWeapon.MAIN_HAND, LocationWeapon.OFF_HAND],
      WeaponType: this.WEAPON_TYPE,
      IsTwoHanded: this.IS_TWO_HANDED,
      Rarity: rarity,
      Level: levelItem,
      ItemType: ItemType.WEAPON,
      Requirements: this.REQUIREMENTS,
      Implicits: this.IMPLICITS,
      Explicits: this.EXPLICITS,
      Prefixes: this.PREFIXES,
      Suffixes: this.SUFFIXES,
    };
  }
}
