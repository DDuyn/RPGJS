import { BaseLootModel } from "../Models/BaseLootModel";

export interface ILootManager {
  GetLoot(): BaseLootModel;
  SetLoot(loot: BaseLootModel): void;
}
