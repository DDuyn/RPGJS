import { BaseCharacterModel } from "../../../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../../../Shared/Enums/AttributeModifyType";
import { ValueType } from "../../../../Shared/Enums/ValueType";
import { BaseSkill } from "../../../../Skills/Base/BaseSkill";

const BASE_PERCENT_HEALTH_RECOVER: number = 0.2;

export const RecoverCurrentHealth = (character: BaseCharacterModel): number => {
  let currentHealth = character.Attributes.GetListAttributes().CurrentHealth.GetValue();
  const maxHealth = character.Attributes.GetListAttributes().MaxHealth.GetValue();

  if (CurrentHealthIsEqualsMaxHealth(currentHealth, maxHealth))
    return maxHealth;

  if (!HasPassiveHealthSkill(character))
    return (
      currentHealth + Math.round(currentHealth * BASE_PERCENT_HEALTH_RECOVER)
    );

  const passiveSkill = GetHealthSkillPassive(character);
  currentHealth = passiveSkill.InitSkill(character) as number;

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
  return character.Skills.HasPassiveSkillByModifierType(
    AttributeModifyType.HEALTH
  );
};

const GetHealthSkillPassive = (character: BaseCharacterModel): BaseSkill => {
  return character.Skills.GetPassiveSkillByModifierType(
    AttributeModifyType.HEALTH
  );
};

const IsValueSkillPercentDamage = (skill: BaseSkill): boolean => {
  return skill.GetSkillValueType() === ValueType.PERCENT;
};
