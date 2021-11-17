import { BaseLootModel } from "../../Loot/Models/BaseLootModel";
import { BaseInventoryModel } from "../Models/BaseInventoryModel";

export interface IInventoryManager {
  GetInventory(): BaseInventoryModel;
  SetInventory(loot: BaseLootModel): void;
}
