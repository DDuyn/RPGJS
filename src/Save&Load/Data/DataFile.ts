import { Character } from "../../Character/Character";
import { ICharacter } from "../../Character/Interfaces/ICharacter";

export type DataFile = {
  owner?: string;
  character?: ICharacter[];
};

export class DataFileUtils {
  private DataFile: DataFile = {};
  public SetOwnerDataFile(owner: string): void {
    this.DataFile.owner = owner;
  }
  public SetCharacterDataFile(characterList: ICharacter[]): void {
    this.DataFile.character = characterList;
  }

  public GetDataFile(): DataFile {
    return this.DataFile;
  }

  public ExtractCharacterDataFile(data: DataFile): ICharacter[] {
    data.character?.forEach((character) => {
      //TODO: Rehacer con los demas managers.
      Object.setPrototypeOf(character, Character.prototype);
    });

    return data.character!;
  }
}
