import { IDungeon } from "../../Dungeon/Interfaces/IDungeon";
import { IWeapon } from "../../Weapons/Interfaces/IWeapon";

export type BaseLootModel = {
  Weapons?: IWeapon[];
  Dungeons: IDungeon[];
};
