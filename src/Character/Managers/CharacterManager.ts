import { Inject, Service } from "typedi";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { ICharacterManager } from "../Interfaces/ICharacterManager";
import { BaseCharacterModel } from "../Model/Base/BaseCharacterModel";
import { CharacterAttributesManager } from "./CharacterAttributesManager";
import { CharacterSkillManager } from "./CharacterSkillManager";
import { CharacterWeaponManager } from "./CharacterWeaponManager";

@Service()
export class CharacterManager implements ICharacterManager {
  private CharacterModel: BaseCharacterModel;
  /**
   *
   */
  constructor(
    @Inject()
    private readonly characterWeaponManager: CharacterWeaponManager,
    @Inject()
    private readonly characterAttributesManager: CharacterAttributesManager,
    @Inject()
    private readonly characterSkillManager: CharacterSkillManager
  ) {}

  BuildCharacter(
    characterName: string,
    characterClass: CharacterClass,
    characterType: CharacterType
  ): BaseCharacterModel {
    this.characterAttributesManager.BuildAttributes(characterClass);
    this.characterSkillManager.BuildInitialSkills();
    this.CharacterModel = {
      Name: characterName,
      Class: characterClass,
      Type: characterType,
      Attributes: this.characterAttributesManager,
      Skills: this.characterSkillManager,
      Weapons: this.characterWeaponManager,
    };

    return this.CharacterModel;
  }
}
