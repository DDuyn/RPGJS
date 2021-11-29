import { Character } from "../../Character/Character";
import { ICharacter } from "../../Character/Interfaces/ICharacter";
import { Dungeon } from "../../Dungeon/Dungeon";
import { IDungeon } from "../../Dungeon/Interfaces/IDungeon";

export type DataFile = {
  owner?: string;
  character?: ICharacter[];
  dungeons?: IDungeon[];
};

export class DataFileUtils {
  private DataFile: DataFile = {};

  public SetOwnerDataFile(owner: string): void {
    this.DataFile.owner = owner;
  }
  public SetCharacterDataFile(characterList: ICharacter[]): void {
    this.DataFile.character = characterList;
  }
  public SetDungeonDataFile(dungeons: IDungeon[]): void {
    this.DataFile.dungeons = dungeons;
  }

  public GetDataFile(): DataFile {
    return this.DataFile;
  }

  public ExtractCharacterDataFile(data: DataFile): ICharacter[] {
    data.character?.forEach((character) => {
      Object.setPrototypeOf(character, Character.prototype);
    });

    return data.character!;
  }

  public ExtractDungeonDataFile(data: DataFile): IDungeon[] {
    data.dungeons?.forEach((dungeon) => {
      Object.setPrototypeOf(dungeon, Dungeon.prototype);
    });

    return data.dungeons!;
  }
}
