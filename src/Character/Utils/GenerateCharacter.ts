import { LIST_ATTRIBUTES } from "../../Attributes/Constants/ListAttributes";
import { BATTLE_ATTRIBUTE } from "../../Attributes/Models/Base/BattleAttributeModel";
import { LEVEL_ATTRIBUTE } from "../../Attributes/Models/Base/LevelAttributeModel";
import { PRIMARY_ATTRIBUTE } from "../../Attributes/Models/Base/PrimaryAttributeModel";

export const GenerateBasePrimaryAttributes = (
  attributes: PRIMARY_ATTRIBUTE
): void => {
  LIST_ATTRIBUTES.Strength.SetValue(attributes.Strength);
  LIST_ATTRIBUTES.Dextery.SetValue(attributes.Dextery);
  LIST_ATTRIBUTES.Intelligence.SetValue(attributes.Intelligence);
  LIST_ATTRIBUTES.MaxHealth.SetValue(attributes.MaxHealth);
};

export const GenerateBaseBattleAttributes = (
  attributes: BATTLE_ATTRIBUTE
): void => {
  LIST_ATTRIBUTES.CurrentHealth.SetValue(LIST_ATTRIBUTES.MaxHealth.GetValue());
  LIST_ATTRIBUTES.Agility.SetValue(attributes.Agility);
  LIST_ATTRIBUTES.Damage.SetValue(attributes.Damage);
  LIST_ATTRIBUTES.Defense.SetValue(attributes.Defense);
  LIST_ATTRIBUTES.Energy.SetValue(attributes.Energy);
  LIST_ATTRIBUTES.Resistance.SetValue(attributes.Resistance);
  LIST_ATTRIBUTES.Spell.SetValue(attributes.Spell);
};

export const GenerateBaseLevelAttributes = (
  attributes: LEVEL_ATTRIBUTE
): void => {
  LIST_ATTRIBUTES.Level.SetValue(attributes.Level);
  LIST_ATTRIBUTES.TotalExperience.SetValue(attributes.TotalExperience);
  //TODO: Revisar experiencia necesaria.
  LIST_ATTRIBUTES.NeededExperience.SetValue(attributes.NeededExperience);
};
