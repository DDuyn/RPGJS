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
import { CharacterClass } from "../../../../Shared/Enums/CharacterClass";
import { CharacterConstants } from "../../../Constants/CharacterConstants";

export const LIST_ATTRIBUTES = {
  Strength: new Strength().BuildAttribute(),
  Dextery: new Dextery().BuildAttribute(),
  Intelligence: new Intelligence().BuildAttribute(),
  MaxHealth: new MaxHealth().BuildAttribute(),
  CurrentHealth: new CurrentHealth().BuildAttribute(),
  Agility: new Agility().BuildAttribute(),
  Damage: new Damage().BuildAttribute(),
  Defense: new Defense().BuildAttribute(),
  Energy: new Energy().BuildAttribute(),
  Resistance: new Resistance().BuildAttribute(),
  Spell: new Spell().BuildAttribute(),
  Level: new Level().BuildAttribute(),
  NeededExperience: new NeededExperience().BuildAttribute(),
  TotalExperience: new TotalExperience().BuildAttribute(),
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
): BaseAttributeModel[] => {
  if (characterClass !== CharacterClass.NONE)
    CharacterConstants.CHARACTER_BUILD_BY_CLASS[characterClass]();
  GenerateBaseLevelAttributes();
  return Object.values(LIST_ATTRIBUTES);
};

export const GenerateBasePrimaryAttributes = (
  attributes: BASE_PRIMARY_ATTRIBUTE
): void => {
  LIST_ATTRIBUTES.Strength.Value = attributes.Strength;
  LIST_ATTRIBUTES.Dextery.Value = attributes.Dextery;
  LIST_ATTRIBUTES.Intelligence.Value = attributes.Intelligence;
  LIST_ATTRIBUTES.MaxHealth.Value = attributes.MaxHealth;
};

export const GenerateBaseBattleAttributes = (
  attributes: BASE_BATTLE_ATTRIBUTE
): void => {
  LIST_ATTRIBUTES.CurrentHealth.Value = LIST_ATTRIBUTES.MaxHealth.Value;
  LIST_ATTRIBUTES.Agility.Value = attributes.Agility;
  LIST_ATTRIBUTES.Damage.Value = attributes.Damage;
  LIST_ATTRIBUTES.Defense.Value = attributes.Defense;
  LIST_ATTRIBUTES.Energy.Value = attributes.Energy;
  LIST_ATTRIBUTES.Resistance.Value = attributes.Resistance;
  LIST_ATTRIBUTES.Spell.Value = attributes.Spell;
};

const GenerateBaseLevelAttributes = (): void => {
  LIST_ATTRIBUTES.Level.Value = 1;
  LIST_ATTRIBUTES.TotalExperience.Value = 0;
  //TODO: Revisar experiencia necesaria.
  LIST_ATTRIBUTES.NeededExperience.Value = 200;
};
