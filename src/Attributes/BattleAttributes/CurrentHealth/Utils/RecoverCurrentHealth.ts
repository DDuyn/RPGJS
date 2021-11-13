import { BaseCharacterModel } from "../../../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../../../Shared/Enums/AttributeModifyType";
import { ValueType } from "../../../../Shared/Enums/ValueType";
import { BaseSkillModel } from "../../../../Skills/Models/Base/BaseSkillModel";

const BASE_PERCENT_HEALTH_RECOVER: number = 0.2;

export const RecoverCurrentHealth = (character: BaseCharacterModel): number => {
  let currentHealth =
    character.Attributes.GetListAttributes().CurrentHealth.GetValue();
  const maxHealth =
    character.Attributes.GetListAttributes().MaxHealth.GetValue();

  if (CurrentHealthIsEqualsMaxHealth(currentHealth, maxHealth))
    return maxHealth;

  if (!HasPassiveHealthSkill(character))
    return (
      currentHealth + Math.round(currentHealth * BASE_PERCENT_HEALTH_RECOVER)
    );

  const passiveSkill = GetHealthSkillPassive(character);
  currentHealth = passiveSkill.LogicSkill(character) as number;

  if (!IsValueSkillPercentDamage(passiveSkill)) return currentHealth;

  return (
    currentHealth + Math.round(currentHealth * BASE_PERCENT_HEALTH_RECOVER)
  );
};

const CurrentHealthIsEqualsMaxHealth = (
  currentHealth: number,
  maxHealth: number
): boolean => {
  return currentHealth >= maxHealth;
};

const HasPassiveHealthSkill = (character: BaseCharacterModel): boolean => {
  return character.SkillManager.HasPassiveSkillByModifierType(
    AttributeModifyType.HEALTH
  );
};

const GetHealthSkillPassive = (
  character: BaseCharacterModel
): BaseSkillModel => {
  return character.SkillManager.GetPassiveSkillByModifierType(
    AttributeModifyType.HEALTH
  );
};

const IsValueSkillPercentDamage = (skill: BaseSkillModel): boolean => {
  return skill.ValueType === ValueType.PERCENT;
};
