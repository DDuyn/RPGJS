import { Agility } from "../Models/BattleAttributes/Agility";
import { CurrentHealth } from "../Models/BattleAttributes/CurrentHealth/CurrentHealth";
import { Damage } from "../Models/BattleAttributes/Damage";
import { Defense } from "../Models/BattleAttributes/Defense";
import { Energy } from "../Models/BattleAttributes/Energy";
import { Resistance } from "../Models/BattleAttributes/Resistance";
import { Spell } from "../Models/BattleAttributes/Spell";
import { Level } from "../Models/LevelAttributes/Level";
import { NeededExperience } from "../Models/LevelAttributes/NeededExperience";
import { TotalExperience } from "../Models/LevelAttributes/TotalExperience";
import { Dextery } from "../Models/PrimaryAttributes/Dextery";
import { Intelligence } from "../Models/PrimaryAttributes/Intelligence";
import { MaxHealth } from "../Models/PrimaryAttributes/MaxHealth";
import { Strength } from "../Models/PrimaryAttributes/Strength";

export const LIST_ATTRIBUTES = {
  Strength: new Strength(),
  Dextery: new Dextery(),
  Intelligence: new Intelligence(),
  MaxHealth: new MaxHealth(),
  CurrentHealth: new CurrentHealth(),
  Agility: new Agility(),
  Damage: new Damage(),
  Defense: new Defense(),
  Energy: new Energy(),
  Resistance: new Resistance(),
  Spell: new Spell(),
  Level: new Level(),
  NeededExperience: new NeededExperience(),
  TotalExperience: new TotalExperience(),
};
