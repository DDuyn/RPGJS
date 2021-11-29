import { BasePartyModel } from "../../Party/Models/BasePartyModel";

export type PhaseDungeonModel = {
  Phase: number;
  Enemies: BasePartyModel;
  isFinished: boolean;
};
