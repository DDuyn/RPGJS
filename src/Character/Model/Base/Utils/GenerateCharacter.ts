import { Agility } from "../../../../Attributes/BattleAttributes/Agility";
import { CurrentHealth } from "../../../../Attributes/BattleAttributes/CurrentHealth/CurrentHealth";
import { Damage } from "../../../../Attributes/BattleAttributes/Damage";
import { Defense } from "../../../../Attributes/BattleAttributes/Defense";
import { Energy } from "../../../../Attributes/BattleAttributes/Energy";
import { Resistance } from "../../../../Attributes/BattleAttributes/Resistance";
import { Spell } from "../../../../Attributes/BattleAttributes/Spell";
import { Level } from "../../../../Attributes/LevelAttributes/Level";
import { NeededExperience } from "../../../../Attributes/LevelAttributes/NeededExperience";
import { TotalExperience } from "../../../../Attributes/LevelAttributes/TotalExperience";
import { BaseAttributeModel } from "../../../../Attributes/Models/Base/BaseAttributeModel";
import { Dextery } from "../../../../Attributes/PrimaryAttributes/Dextery";
import { Intelligence } from "../../../../Attributes/PrimaryAttributes/Intelligence";
import { MaxHealth } from "../../../../Attributes/PrimaryAttributes/MaxHealth";
import { Strength } from "../../../../Attributes/PrimaryAttributes/Strength";

let BASE_ATTRIBUTE_MODEL: BaseAttributeModel;

export const GenerateBaseCharacterAttributes = (): BaseAttributeModel => {
  BASE_ATTRIBUTE_MODEL = {
    Strength: new Strength(),
    Dextery: new Dextery(),
    Intelligence: new Intelligence(),
    MaxHealth: new MaxHealth(),
    CurrenthHealth: new CurrentHealth(),
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

  return BASE_ATTRIBUTE_MODEL;
};

export const GenerateBasePrimaryAttributes = ({
  Strength,
  Dextery,
  Intelligence,
  MaxHealth,
}: {
  Strength: number;
  Dextery: number;
  Intelligence: number;
  MaxHealth: number;
}): void => {
  BASE_ATTRIBUTE_MODEL.Strength.SetValue(Strength);
  BASE_ATTRIBUTE_MODEL.Dextery.SetValue(Dextery);
  BASE_ATTRIBUTE_MODEL.Intelligence.SetValue(Intelligence);
  BASE_ATTRIBUTE_MODEL.MaxHealth.SetValue(MaxHealth);
};
