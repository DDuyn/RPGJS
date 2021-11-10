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

const BASE_ATTRIBUTE_MODEL: BaseAttributeModel = {
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
): BaseAttributeModel => {
  CharacterConstants.CHARACTER_BUILD_BY_CLASS[characterClass]();
  GenerateBaseLevelAttributes();
  return BASE_ATTRIBUTE_MODEL;
};

export const GenerateBasePrimaryAttributes = (
  attributes: BASE_PRIMARY_ATTRIBUTE
): void => {
  BASE_ATTRIBUTE_MODEL.Strength.SetValue(attributes.Strength);
  BASE_ATTRIBUTE_MODEL.Dextery.SetValue(attributes.Dextery);
  BASE_ATTRIBUTE_MODEL.Intelligence.SetValue(attributes.Intelligence);
  BASE_ATTRIBUTE_MODEL.MaxHealth.SetValue(attributes.MaxHealth);
};

export const GenerateBaseBattleAttributes = (
  attributes: BASE_BATTLE_ATTRIBUTE
): void => {
  BASE_ATTRIBUTE_MODEL.CurrenthHealth.SetValue(
    BASE_ATTRIBUTE_MODEL.MaxHealth.GetValue()
  );
  BASE_ATTRIBUTE_MODEL.Agility.SetValue(attributes.Agility);
  BASE_ATTRIBUTE_MODEL.Damage.SetValue(attributes.Damage);
  BASE_ATTRIBUTE_MODEL.Defense.SetValue(attributes.Defense);
  BASE_ATTRIBUTE_MODEL.Energy.SetValue(attributes.Energy);
  BASE_ATTRIBUTE_MODEL.Resistance.SetValue(attributes.Resistance);
  BASE_ATTRIBUTE_MODEL.Spell.SetValue(attributes.Spell);
};

const GenerateBaseLevelAttributes = (): void => {
  BASE_ATTRIBUTE_MODEL.Level.SetValue(1);
  BASE_ATTRIBUTE_MODEL.TotalExperience.SetValue(0);
  //TODO: Revisar experiencia necesaria.
  BASE_ATTRIBUTE_MODEL.NeededExperience.SetValue(200);
};
