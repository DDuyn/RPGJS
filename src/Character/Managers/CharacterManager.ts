import { Inject, Service } from "typedi";
import { AttributeManager } from "../../Attributes/Managers/AttributeManager";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { SkillManager } from "../../Skills/Managers/SkillManager";
import { BaseSkillModel } from "../../Skills/Models/Base/BaseSkillModel";
import { ICharacterManager } from "../Interfaces/ICharacterManager";
import { BaseCharacterModel } from "../Model/Base/BaseCharacterModel";
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
    private readonly attributeManager: AttributeManager,
    @Inject()
    private readonly skillManager: SkillManager
  ) {}

  BuildCharacter(
    characterName: string,
    characterClass: CharacterClass,
    characterType: CharacterType
  ): BaseCharacterModel {
    this.CharacterModel = {
      Name: characterName,
      Class: characterClass,
      Type: characterType,
      AttributeManager: this.attributeManager,
      SkillManager: this.skillManager,
      Weapons: this.characterWeaponManager,
      DoSkill: this.DoSkill,
    };

    this.attributeManager.BuildAttributes(this.CharacterModel);
    this.skillManager.BuildInitialSkills();

    return this.CharacterModel;
  }

  DoSkill(
    this: BaseCharacterModel,
    skill: BaseSkillModel,
    defender?: BaseCharacterModel
  ): number | void {
    return skill.LogicSkill(this, defender);
  }
}
