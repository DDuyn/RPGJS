import { BaseAttributeModel } from "../../../Attributes/Models/Base/BaseAttributeModel";
import { Dextery } from "../../../Attributes/PrimaryAttributes/Dextery";
import { Strength } from "../../../Attributes/PrimaryAttributes/Strength";
import { IncreasedAttackSpeed } from "../../../Modifiers/AttackSpeedModifier/IncreasedAttackSpeed";
import { BaseModifierModel } from "../../../Modifiers/Model/Base/BaseModifierModel";
import { Constants } from "../../../Shared/Constants/Constants";
import { ItemType } from "../../../Shared/Enums/ItemType";
import { Rarity } from "../../../Shared/Enums/Rarity";
import { WeaponType } from "../../../Shared/Enums/WeaponType";
import { BaseAffixModel } from "../../Affixes/Models/BaseAffixModel";
import { IWeapon } from "../Interfaces/IWeapon";
import { BaseWeaponModel } from "../Models/BaseWeaponModel";
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
  private REQUIREMENTS: Map<BaseAttributeModel, number> = new Map([
    [new Strength().BuildAttribute(), 8],
    [new Dextery().BuildAttribute(), 5],
  ]);
  private PREFIXES: BaseAffixModel[] = [];
  private SUFFIXES: BaseAffixModel[] = [];
  private EXPLICITS: BaseModifierModel[] = [];
  /**
   *
  constructor(levelItem: number, rarity: Rarity) {
    super();
    this.Rarity = rarity;
    this.Level = levelItem;
    this.ItemCharacterClass = CharacterClass.NONE;
    this.Damage = this.CalculateBaseDamageItem(
      this.BASE_DAMAGE,
      levelItem,
      rarity
    );
    this.SetPrefixes(rarity);
    this.SetSuffixes(rarity);
    this.GenerateItemNameByRarity("Rusted Hatched", rarity);
  }
  */

  BuildWeapon(levelItem: number, rarity: Rarity): BaseWeaponModel {
    this.PREFIXES = GeneratePrefixes(rarity);
    this.SUFFIXES = GenerateSuffixes(rarity, this.PREFIXES.length > 0);
    this.REQUIREMENTS = new Map([
      [new Strength().BuildAttribute(), 8 * levelItem],
      [new Dextery().BuildAttribute(), 5 * levelItem],
    ]);

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
      Damage: this.BASE_DAMAGE,
      WeaponType: this.WEAPON_TYPE,
      IsTwoHanded: this.IS_TWO_HANDED,
      Rarity: rarity,
      Level: levelItem,
      ItemType: ItemType.WEAPON,
      Requirements: this.REQUIREMENTS,
      CanEquip: false,
      Implicits: this.IMPLICITS,
      Explicits: this.EXPLICITS,
      Prefixes: this.PREFIXES,
      Suffixes: this.SUFFIXES,
    };
  }
}
