import { Service } from "typedi";
import { BaseWeapon } from "../../Items/Weapons/Base/BaseWeapon";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { LocationWeaponEquippedType } from "../../Shared/Enums/LocationWeaponEquipedType";
import { ICharacterAttributesManager } from "../Interfaces/ICharacterAttributesManager";
import { ICharacterManager } from "../Interfaces/ICharacterManager";
import { IWeaponCharacterManager } from "../Interfaces/IWeaponCharacterManager";

@Service()
export class CharacterManager implements ICharacterManager {
  private CharacterName: string;
  private CharacterClass: CharacterClass;
  private CharacterType: CharacterType;

  /**
   *
   */
  constructor(
    private readonly weaponCharacterManager: IWeaponCharacterManager,
    private readonly characterAttributesManager: ICharacterAttributesManager
  ) {}

  BuildCharacter(
    characterName: string,
    characterClass: CharacterClass,
    characterType: CharacterType
  ): CharacterManager {
    this.CharacterName = characterName;
    this.CharacterClass = characterClass;
    this.CharacterType = characterType;
    return this;
  }
  GetCharacterName(): string {
    return this.CharacterName;
  }
  GetCharacterClass(): CharacterClass {
    return this.CharacterClass;
  }
  GetCharacterType(): CharacterType {
    return this.CharacterType;
  }

  GetWeaponsEquipped(): Map<LocationWeaponEquippedType, BaseWeapon> {
    return this.weaponCharacterManager.GetWeaponsEquipped();
  }

  GetWeaponByLocation(
    location: LocationWeaponEquippedType
  ): BaseWeapon | undefined {
    return this.weaponCharacterManager.GetWeaponEquipped(location);
  }

  SetWeaponInLocation(
    weapon: BaseWeapon,
    location: LocationWeaponEquippedType
  ): void {
    this.weaponCharacterManager.SetWeaponInLocation(weapon, location);
  }
}
