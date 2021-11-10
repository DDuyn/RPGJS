import { Service } from "typedi";
import { BaseWeapon } from "../../Items/Weapons/Base/BaseWeapon";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { LocationWeaponEquippedType } from "../../Shared/Enums/LocationWeaponEquipedType";
import { ICharacterAttributesManager } from "../Interfaces/ICharacterAttributesManager";
import { ICharacterManager } from "../Interfaces/ICharacterManager";
import { IWeaponCharacterManager } from "../Interfaces/IWeaponCharacterManager";
import { BaseCharacterModel } from "../Model/Base/BaseCharacterModel";

@Service()
export class CharacterManager implements ICharacterManager {
  private CharacterModel: BaseCharacterModel;
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
  ): BaseCharacterModel {
    this.CharacterModel.name = characterName;
    this.CharacterModel.class = characterClass;
    this.CharacterModel.type = characterType;
    this.CharacterModel.attributes =
      this.characterAttributesManager.BuildAttributes(characterClass);
    return this.CharacterModel;
  }
  GetCharacterName(): string {
    return this.CharacterModel.name;
  }
  GetCharacterClass(): CharacterClass {
    return this.CharacterModel.class;
  }
  GetCharacterType(): CharacterType {
    return this.CharacterModel.type;
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
