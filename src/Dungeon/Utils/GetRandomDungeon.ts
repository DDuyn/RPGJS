import { DungeonType } from "../../Shared/Enums/DungeonType";
import { Utils } from "../../Shared/Utils/Utils";
import { Cave } from "../Cave/Cave";
import { Forest } from "../Forest/Forest";
import { IDungeon } from "../Interfaces/IDungeon";

const DUNGEON_TYPE = {
  CAVE: (level: number) => new Cave(level),
  FOREST: (level: number) => new Forest(level),
};

export const GetRandomDungeon = (level: number): IDungeon => {
  const dungeonType = Utils.GetRandomEnumKey<DungeonType>(DungeonType);
  return DUNGEON_TYPE[dungeonType](level);
};
