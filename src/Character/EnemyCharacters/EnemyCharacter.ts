import { IAttribute } from "../../Attributes/Interfaces/IAttribute";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { EnemyType } from "../../Shared/Enums/EnemyType";
import { Character } from "../Character";

export abstract class EnemyCharacter extends Character {
  /**
   *
   */
  constructor(name: string, type: EnemyType, attributes: IAttribute[]) {
    super();
    this.Data = this.BuildCharacter(
      name,
      type,
      CharacterType.IA,
      attributes,
      []
    );
    this.SyncAttributes();
  }
}
