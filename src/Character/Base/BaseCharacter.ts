import { BaseWeapon } from "../../Items/Weapons/Base/BaseWeapon";
import { Constants } from "../../Shared/Constants/Constants";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { LocationWeaponEquippedType } from "../../Shared/Enums/LocationWeaponEquipedType";
import { BaseSkill } from "../../Skills/Base/BaseSkill";
import { IWeaponCharacterManager } from "../Interfaces/IWeaponCharacterManager";
import { BaseAttributeCharacter } from "./BaseAttributesCharacter";
import { BaseSkillCharacter } from "./BaseSkillCharacter";

export abstract class BaseCharacter {
  private CharacterName: string = Constants.STRING_EMPY;
  private CharacterClass: CharacterClass = CharacterClass.NONE;
  private CharacterType: CharacterType = CharacterType.NONE;
  private CharacterAttributes: BaseAttributeCharacter;
  private CharacterSkills: BaseSkillCharacter;
  private WeaponCharacterManager: IWeaponCharacterManager;

  protected BuildCharacter(
    characterName: string,
    characterAttributes: BaseAttributeCharacter,
    characterSkills: BaseSkillCharacter,
    characterClass: CharacterClass,
    characterType: CharacterType,
    weaponCharacterManager: IWeaponCharacterManager
  ): void {
    this.CharacterName = characterName;
    this.CharacterAttributes = characterAttributes;
    this.CharacterSkills = characterSkills;
    this.CharacterClass = characterClass;
    this.CharacterType = characterType;
    this.WeaponCharacterManager = weaponCharacterManager;
  }

  public GetCharacterName(): string {
    return this.CharacterName;
  }

  public GetCharacterClass(): CharacterClass {
    return this.CharacterClass;
  }

  public GetCharacterType(): CharacterType {
    return this.CharacterType;
  }

  public GetCharacterAttributes<T>(): T {
    return (this.CharacterAttributes as unknown) as T;
  }

  public GetCharacterSkills(): BaseSkillCharacter {
    return this.CharacterSkills;
  }

  public DoSkill(skill: BaseSkill, defender?: BaseCharacter): number | void {
    return skill.IsCastSelf()
      ? BaseSkillCharacter.DoSkill(skill, this.CharacterAttributes)
      : BaseSkillCharacter.DoSkill(
          skill,
          this.CharacterAttributes,
          defender!.CharacterAttributes
        );
  }

  public TakeDamage(totalDamage: number): void {
    this.CharacterAttributes.CurrentHealth.SetValue(
      this.CharacterAttributes.CurrentHealth.GetValue() - totalDamage
    );
  }

  public IsCharacterDead(): boolean {
    return this.CharacterAttributes.CurrentHealth.GetValue() <= 0;
  }

  public GetHealthRecovered(): number {
    return this.GetCharacterAttributes<BaseAttributeCharacter>().CurrentHealth.GetCurrentHealthRecovered(
      this
    );
  }

  public GainExperience(experience: number): void {
    this.CharacterAttributes.TotalExperience.SetValue(experience);

    if (
      this.CharacterAttributes.TotalExperience.GetValue() >=
      this.CharacterAttributes.NeededExperience.GetValue()
    ) {
      this.CharacterAttributes.Level.SetValue(
        this.CharacterAttributes.Level.GetValue() + 1
      );
      //TODO: Analizar el sistema de experiencia necesitada al subir de nivel.
      this.CharacterAttributes.NeededExperience.SetValue(
        this.CharacterAttributes.NeededExperience.GetValue() * 4
      );
    }
  }

  public GetWeaponsEquipped(): Map<LocationWeaponEquippedType, BaseWeapon> {
    return this.WeaponCharacterManager.GetWeaponsEquipped();
  }

  public GetWeaponEquipped(
    location: LocationWeaponEquippedType
  ): BaseWeapon | undefined {
    return this.WeaponCharacterManager.GetWeaponEquipped(location);
  }

  public SetWeaponInLocation(
    weapon: BaseWeapon,
    location: LocationWeaponEquippedType
  ): void {
    this.WeaponCharacterManager.SetWeaponInLocation(weapon, location);
  }
}
