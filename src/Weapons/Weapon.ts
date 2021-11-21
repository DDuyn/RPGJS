import { IModifier } from "../Modifiers/Interfaces/IModifier";
import { Constants } from "../Shared/Constants/Constants";
import { LocationWeapon } from "../Shared/Enums/LocationWeapon";
import { Rarity } from "../Shared/Enums/Rarity";
import { WeaponType } from "../Shared/Enums/WeaponType";
import { Utils } from "../Shared/Utils/Utils";
import { IWeapon } from "./Interfaces/IWeapon";
import { BaseWeaponModel } from "./Models/BaseWeaponModel";
import { CalculateBaseDamage } from "./Utils/CalculateBaseDamage";
import { GenerateExplicitsModifers } from "./Utils/GenerateExplicitsModifiers";
import { GenerateItemName } from "./Utils/GenerateItemNameByModifierType";
import { GeneratePrefixes } from "./Utils/GeneratePrefixes";
import { GenerateSuffixes } from "./Utils/GenerateSuffixes";

export abstract class Weapon implements IWeapon {
  protected Data: BaseWeaponModel;

  /**
   * Build weapon
   * @param weaponName
   * @param description
   * @param baseDamage
   * @param weaponType
   * @param isTwoHanded
   * @param implicits
   * @param requirements
   * @param levelItem
   * @param rarity
   */
  BuildWeapon(
    weaponName: string,
    description: string,
    baseDamage: number,
    weaponType: WeaponType,
    locations: LocationWeapon[],
    isTwoHanded: boolean,
    implicits: IModifier[],
    requirements: Map<string, number>,
    levelItem: number,
    rarity: Rarity
  ): BaseWeaponModel {
    const prefixes = GeneratePrefixes(rarity);
    const suffixes = GenerateSuffixes(rarity, prefixes.length > 0);
    const explicits = GenerateExplicitsModifers(prefixes, suffixes);
    const name = GenerateItemName(weaponName, prefixes, suffixes, rarity);
    const subname =
      rarity !== Rarity.COMMON && rarity !== Rarity.MAGIC
        ? weaponName
        : Constants.STRING_EMPY;
    const damage = CalculateBaseDamage(baseDamage, levelItem, rarity);

    const model: BaseWeaponModel = {
      Name: name,
      SubName: subname,
      Description: description,
      Damage: damage,
      WeaponType: weaponType,
      LocationWeapon: locations,
      IsTwoHanded: isTwoHanded,
      Rarity: rarity,
      Level: levelItem,
      Requirements: requirements,
      Implicits: implicits,
      Explicits: explicits,
      Prefixes: prefixes,
      Suffixes: suffixes,
    };

    return Utils.DeepClone<BaseWeaponModel>(model);
  }

  GetData(): BaseWeaponModel {
    return this.Data;
  }
}
