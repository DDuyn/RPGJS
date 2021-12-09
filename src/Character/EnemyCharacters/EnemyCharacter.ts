import { IAttribute } from "../../Attributes/Interfaces/IAttribute";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { EnemyType } from "../../Shared/Enums/EnemyType";
import { ISkill } from "../../Skills/Interfaces/ISkill";
import { Character } from "../Character";
import { GenerateBasicSkills } from "../Utils/GenerateBasicSkills";

export abstract class EnemyCharacter extends Character {
  /**
   *
   */
  constructor(name: string, type: EnemyType, attributes: IAttribute[]) {
    super();
    //TODO: CAMBIAR GENERADOR SKILLS
    const skills: ISkill[] = GenerateBasicSkills(this);
    this.Data = this.BuildCharacter(
      name,
      type,
      CharacterType.IA,
      attributes,
      skills
    );
    this.SyncAttributes();
  }
}
