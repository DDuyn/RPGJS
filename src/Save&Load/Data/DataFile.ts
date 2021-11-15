import { AttributeManager } from "../../Attributes/Managers/AttributeManager";
import { CharacterManager } from "../../Character/Managers/CharacterManager";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { BaseWeapon } from "../../Items/Weapons/Base/BaseWeapon";
import { SkillManager } from "../../Skills/Managers/SkillManager";

export type DataFile = {
  owner?: string;
  character?: BaseCharacterModel[];
  weapons?: BaseWeapon[];
};

export class DataFileUtils {
  private DataFile: DataFile = {};
  public SetOwnerDataFile(owner: string): void {
    this.DataFile.owner = owner;
  }
  public SetCharacterDataFile(characterList: BaseCharacterModel[]): void {
    this.DataFile.character = characterList;
  }
  public SetWeaponDataFile(weaponList: BaseWeapon[]): void {
    this.DataFile.weapons = weaponList;
  }

  public GetDataFile(): DataFile {
    return this.DataFile;
  }

  public ExtractCharacterDataFile(data: DataFile): BaseCharacterModel[] {
    data.character?.forEach((character) => {
      //TODO: Rehacer con los demas managers.
      Object.setPrototypeOf(character, CharacterManager.prototype);
      Object.setPrototypeOf(character.SkillManager, SkillManager.prototype);
      Object.setPrototypeOf(
        character.AttributeManager,
        AttributeManager.prototype
      );
    });

    return data.character!;
  }

  public ExtractWeaponDatafile(data: DataFile): BaseWeapon[] {
    data.weapons?.forEach((weapon) => {
      Object.setPrototypeOf(weapon, BaseWeapon.prototype);
    });
    return data.weapons!;
  }
}
