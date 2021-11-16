import { Service } from "typedi";
import { ILootManager } from "../Interface/ILootManager";
import { BaseLootModel } from "../Models/BaseLootModel";

@Service()
export class LootManager implements ILootManager {
  private Loot: BaseLootModel;

  GetLoot(): BaseLootModel {
    return this.Loot;
  }
  SetLoot(loot: BaseLootModel): void {
    this.Loot = loot;
  }
}
