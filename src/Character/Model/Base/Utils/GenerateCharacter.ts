import { Attribute } from "../../../../Attributes/Attribute";
import { Agility } from "../../../../Attributes/Models/BattleAttributes/Agility";
import { CurrentHealth } from "../../../../Attributes/Models/BattleAttributes/CurrentHealth/CurrentHealth";
import { Damage } from "../../../../Attributes/Models/BattleAttributes/Damage";
import { Defense } from "../../../../Attributes/Models/BattleAttributes/Defense";
import { Energy } from "../../../../Attributes/Models/BattleAttributes/Energy";
import { Resistance } from "../../../../Attributes/Models/BattleAttributes/Resistance";
import { Spell } from "../../../../Attributes/Models/BattleAttributes/Spell";
import { Level } from "../../../../Attributes/Models/LevelAttributes/Level";
import { NeededExperience } from "../../../../Attributes/Models/LevelAttributes/NeededExperience";
import { TotalExperience } from "../../../../Attributes/Models/LevelAttributes/TotalExperience";
import { Dextery } from "../../../../Attributes/Models/PrimaryAttributes/Dextery";
import { Intelligence } from "../../../../Attributes/Models/PrimaryAttributes/Intelligence";
import { MaxHealth } from "../../../../Attributes/Models/PrimaryAttributes/MaxHealth";
import { Strength } from "../../../../Attributes/Models/PrimaryAttributes/Strength";
import { CharacterClass } from "../../../../Shared/Enums/CharacterClass";
import { CharacterConstants } from "../../../Constants/CharacterConstants";

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

export type BASE_PRIMARY_ATTRIBUTE = {
  Strength: number;
  Dextery: number;
  Intelligence: number;
  MaxHealth: number;
};

export type BASE_BATTLE_ATTRIBUTE = {
  Agility: number;
  Damage: number;
  Defense: number;
  Energy: number;
  Resistance: number;
  Spell: number;
};

export const GenerateBaseCharacterAttributes = (
  characterClass: CharacterClass
): Attribute[] => {
  if (characterClass !== CharacterClass.NONE)
    CharacterConstants.CHARACTER_BUILD_BY_CLASS[characterClass]();
  GenerateBaseLevelAttributes();

  return Object.values(LIST_ATTRIBUTES);
};

export const GenerateBasePrimaryAttributes = (
  attributes: BASE_PRIMARY_ATTRIBUTE
): void => {
  LIST_ATTRIBUTES.Strength.SetValue(attributes.Strength);
  LIST_ATTRIBUTES.Dextery.SetValue(attributes.Dextery);
  LIST_ATTRIBUTES.Intelligence.SetValue(attributes.Intelligence);
  LIST_ATTRIBUTES.MaxHealth.SetValue(attributes.MaxHealth);
};

export const GenerateBaseBattleAttributes = (
  attributes: BASE_BATTLE_ATTRIBUTE
): void => {
  LIST_ATTRIBUTES.CurrentHealth.SetValue(LIST_ATTRIBUTES.MaxHealth.GetValue());
  LIST_ATTRIBUTES.Agility.SetValue(attributes.Agility);
  LIST_ATTRIBUTES.Damage.SetValue(attributes.Damage);
  LIST_ATTRIBUTES.Defense.SetValue(attributes.Defense);
  LIST_ATTRIBUTES.Energy.SetValue(attributes.Energy);
  LIST_ATTRIBUTES.Resistance.SetValue(attributes.Resistance);
  LIST_ATTRIBUTES.Spell.SetValue(attributes.Spell);
};

const GenerateBaseLevelAttributes = (): void => {
  LIST_ATTRIBUTES.Level.SetValue(1);
  LIST_ATTRIBUTES.TotalExperience.SetValue(0);
  //TODO: Revisar experiencia necesaria.
  LIST_ATTRIBUTES.NeededExperience.SetValue(200);
};
