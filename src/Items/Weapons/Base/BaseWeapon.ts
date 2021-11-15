import { BaseAttributeModel } from "../../../Attributes/Models/Base/BaseAttributeModel";
import { BaseModifier } from "../../../Modifiers/Base/BaseModifier";
import { BaseModifierModel } from "../../../Modifiers/Model/Base/BaseModifierModel";
import { Constants } from "../../../Shared/Constants/Constants";
import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { ItemType } from "../../../Shared/Enums/ItemType";
import { Rarity } from "../../../Shared/Enums/Rarity";
import { WeaponType } from "../../../Shared/Enums/WeaponType";
import { Utils } from "../../../Shared/Utils/Utils";
import { BaseAffixModel } from "../../Affixes/Models/BaseAffixModel";
import { BasePrefix } from "../../Affixes/Prefix/Base/BasePrefix";
import { BaseSuffix } from "../../Affixes/Suffixes/Base/BaseSuffix";
import { GenerateExplicitsModifers } from "../Utils/GenerateExplicitsModifiers";
import { GenerateItemName } from "../Utils/GenerateItemNameByModifierType";
import { GeneratePrefixes } from "../Utils/GeneratePrefixes";
import { GenerateSuffixes } from "../Utils/GenerateSuffixes";
import { GetValueByItemAndRarity } from "../Utils/GetValueByItemAndRarity";

export abstract class BaseWeapon {
  protected Name: string;
  protected SubName: string = Constants.STRING_EMPY;
  protected ItemCharacterClass: CharacterClass;
  protected Description: string;
  protected IsTwoHanded: boolean;
  protected WeaponType: WeaponType;
  protected Rarity: Rarity;
  protected Damage: number;
  protected Level: number;

  private ItemType: ItemType = ItemType.WEAPON;
  //TODO: Utils CanEquip
  private CanEquip: boolean;
  private ImplicitModifiers: BaseModifierModel[] = [];
  private ExplicitModifiers: BaseModifierModel[] = [];
  private Prefixes: BaseAffixModel[] = [];
  private Suffixes: BaseAffixModel[] = [];
  private Requirements: Map<BaseAttributeModel, number> = new Map();

  public GetName(): string {
    return this.Name;
  }

  public GetSubName(): string {
    return this.SubName;
  }

  public GetItemType(): ItemType {
    return this.ItemType;
  }

  public GetWeaponType(): WeaponType {
    return this.WeaponType;
  }

  public GetLevel(): number {
    return this.Level;
  }

  public GetRarity(): Rarity {
    return this.Rarity;
  }

  public IsCanEquip(): boolean {
    return this.CanEquip;
  }

  public GetItemCharacterClass(): CharacterClass {
    return this.ItemCharacterClass;
  }

  public GetDescription(): string {
    return this.Description;
  }

  public GetRequeriments(): Map<BaseAttributeModel, number> {
    return this.Requirements;
  }

  public GetImplicitsModifiers(): BaseModifier[] {
    return this.ImplicitModifiers;
  }

  public GetExplicitModifiers(): BaseModifier[] {
    return this.ExplicitModifiers;
  }

  public GetPreffixes(): BasePrefix[] {
    return this.Prefixes;
  }

  public GetSuffixes(): BaseSuffix[] {
    return this.Suffixes;
  }

  public IsTwoHandedWeapon(): boolean {
    return this.IsTwoHanded;
  }

  public GetDamage(): number {
    return this.Damage;
  }

  protected GenerateItemNameByRarity(
    baseItemName: string,
    rarity: Rarity
  ): void {
    this.Name = GenerateItemName(
      baseItemName,
      this.GetPreffixes(),
      this.GetSuffixes(),
      rarity
    );
    if (rarity !== Rarity.MAGIC && rarity !== Rarity.COMMON)
      this.SubName = baseItemName;
  }

  protected SetExplicitModifiers(): void {
    const explicitisSelected = GenerateExplicitsModifers(
      this.GetPreffixes(),
      this.GetSuffixes()
    );
    explicitisSelected.forEach((modifier) => {
      this.GetExplicitModifiers().push(modifier);
    });
  }

  protected SetPrefixes(rarity: Rarity): void {
    const prefixes = GeneratePrefixes(rarity);
    prefixes.forEach((prefix) => {
      this.GetPreffixes().push(prefix);
    });
  }

  protected SetSuffixes(rarity: Rarity): void {
    const suffixes = GenerateSuffixes(rarity, this.GetPreffixes());
    suffixes.forEach((suffix) => {
      this.GetSuffixes().push(suffix);
    });
  }

  protected CalculateBaseDamageItem(
    baseDamage: number,
    levelItem: number,
    rarity: Rarity
  ): number {
    const minValue = GetValueByItemAndRarity(baseDamage, levelItem, rarity);
    const maxValue = minValue * 2;

    baseDamage = Utils.Random(minValue, maxValue);

    return GetValueByItemAndRarity(baseDamage, levelItem, rarity);
  }

  protected abstract SetRequirements(): void;
  protected abstract SetImplicitModifiers(): void;
}
