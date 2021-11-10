import { BaseCharacter } from "../../Character/Base/BaseCharacter";
import { BaseWeapon } from "../../Items/Weapons/Base/BaseWeapon";

export type DataFile = {
  owner?: string;
  character?: BaseCharacter[];
  weapons?: BaseWeapon[];
};

export class DataFileUtils {
  private DataFile: DataFile = {};
  public SetOwnerDataFile(owner: string): void {
    this.DataFile.owner = owner;
  }
  public SetCharacterDataFile(characterList: BaseCharacter[]): void {
    this.DataFile.character = characterList;
  }
  public SetWeaponDataFile(weaponList: BaseWeapon[]): void {
    this.DataFile.weapons = weaponList;
  }

  public GetDataFile(): DataFile {
    return this.DataFile;
  }

  public ExtractCharacterDataFile(data: DataFile): BaseCharacter[] {
    data.character?.forEach((character) => {
      Object.setPrototypeOf(character, BaseCharacter.prototype);
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
