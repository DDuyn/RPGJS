import { BaseLootModel } from "../../Loot/Models/BaseLootModel";
import { IInventoryManager } from "../Interfaces/IInventoryManager";
import { BaseInventoryModel } from "../Models/BaseInventoryModel";

export class InventoryManager implements IInventoryManager {
  private Inventory: BaseInventoryModel;

  GetInventory(): BaseInventoryModel {
    return this.Inventory;
  }
  SetInventory(loot: BaseLootModel): void {
    this.Inventory = {
      Weapons: loot.Weapons,
    };
  }
}
