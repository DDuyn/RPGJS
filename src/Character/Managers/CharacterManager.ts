import { Inject, Service } from "typedi";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { SkillManager } from "../../Skills/Managers/SkillManager";
import { BaseSkillModel } from "../../Skills/Models/Base/BaseSkillModel";
import { ICharacterManager } from "../Interfaces/ICharacterManager";
import { BaseCharacterModel } from "../Model/Base/BaseCharacterModel";
import { CharacterAttributesManager } from "./CharacterAttributesManager";
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
    private readonly skillManager: SkillManager
  ) {}

  BuildCharacter(
    characterName: string,
    characterClass: CharacterClass,
    characterType: CharacterType
  ): BaseCharacterModel {
    this.characterAttributesManager.BuildAttributes(characterClass);
    this.skillManager.BuildInitialSkills();
    this.CharacterModel = {
      Name: characterName,
      Class: characterClass,
      Type: characterType,
      Attributes: this.characterAttributesManager,
      SkillManager: this.skillManager,
      Weapons: this.characterWeaponManager,
    };

    return this.CharacterModel;
  }

  DoSkill(
    skill: BaseSkillModel,
    attacker: BaseCharacterModel,
    defender?: BaseCharacterModel
  ): number | void {
    return skill.LogicSkill(attacker, defender);
  }
}
