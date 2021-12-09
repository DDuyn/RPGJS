import { Attributes } from "../../Attributes/Constants/Attributes";
import { IAttribute } from "../../Attributes/Interfaces/IAttribute";
import { CurrentHealth } from "../../Attributes/Models/BattleAttributes/CurrentHealth/CurrentHealth";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { LocationWeapon } from "../../Shared/Enums/LocationWeapon";
import { ISkill } from "../../Skills/Interfaces/ISkill";
import { IWeapon } from "../../Weapons/Interfaces/IWeapon";
import { Character } from "../Character";
import { IPlayerCharacter } from "../Interfaces/IPlayerCharacter";
import { CalculateAttributesByWeapon } from "../Utils/CalculateAttributesByWeapon";
import { GenerateBasicSkills } from "../Utils/GenerateBasicSkills";

export abstract class PlayerCharacter
  extends Character
  implements IPlayerCharacter
{
  /**
   *
   */
  constructor(
    name: string,
    characterClass: CharacterClass,
    attributes: IAttribute[]
  ) {
    super();
    const skills = GenerateBasicSkills(this);
    this.Data = this.BuildCharacter(
      name,
      characterClass,
      CharacterType.PLAYER,
      attributes,
      skills
    );
    this.SyncAttributes();
  }

  /**
   * Character gain experience
   * @param experience
   */
  GainExperience(experience: number): void {
    const totalExperience =
      this.GetValueByAttribute(Attributes.TOTALEXPERIENCE) + experience;
    const neededExperience = this.GetValueByAttribute(
      Attributes.NEEDEDEXPERIENCE
    );
    const level = this.GetValueByAttribute(Attributes.LEVEL);

    if (totalExperience >= neededExperience) {
      this.SetValueInAttribute(level + 1, Attributes.LEVEL);
      this.SetValueInAttribute(
        neededExperience * 4,
        Attributes.NEEDEDEXPERIENCE
      );
    }

    this.SetValueInAttribute(totalExperience, Attributes.TOTALEXPERIENCE);
  }

  /**
   * Recover current health
   */
  RecoverCurrentHealth(): void {
    const healthRecovered = this.GetAttribute<CurrentHealth>(
      Attributes.CURRENTHEALTH
    ).GetCurrentHealthRecovered(this);
    this.SetValueInAttribute(healthRecovered, Attributes.CURRENTHEALTH);
  }

  /**
   * Purchase skill for Character
   * @param skill
   * @returns boolean
   */
  PurchaseSkill(skill: ISkill): boolean {
    if (!skill.GetData().CanPurchase) return false;
    this.Data.Skills.push(skill);
    return true;
  }

  /**
   * Equip Weapon for Character
   * @param weapon
   * @param location
   * @returns
   */
  EquipWeapon(weapon: IWeapon, location: LocationWeapon): void {
    if (
      !weapon
        .GetData()
        .LocationWeapon.some((locationWeapon) => locationWeapon === location)
    )
      throw new Error("Cannot equip");

    if (this.Data.Weapons.has(location)) this.UnequipWeapon(location);

    this.Data.Weapons.set(location, weapon);
    CalculateAttributesByWeapon(this, weapon, true);
  }

  /**
   * Unequip weapon
   * @param location
   */
  UnequipWeapon(location: LocationWeapon): void {
    if (this.Data.Weapons.has(location)) {
      const weapon = this.Data.Weapons.get(location)!;
      this.Data.Weapons.delete(location);
      CalculateAttributesByWeapon(this, weapon, false);
    }
  }
}
