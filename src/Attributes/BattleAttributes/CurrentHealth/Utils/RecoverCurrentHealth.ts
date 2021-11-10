import { BaseAttributeCharacter } from "../../../../Character/Base/BaseAttributesCharacter";
import { BaseCharacter } from "../../../../Character/Base/BaseCharacter";
import { BaseSkillCharacter } from "../../../../Character/Base/BaseSkillCharacter";
import { AttributeModifyType } from "../../../../Shared/Enums/AttributeModifyType";
import { ValueType } from "../../../../Shared/Enums/ValueType";
import { BaseSkill } from "../../../../Skills/Base/BaseSkill";

const BASE_PERCENT_HEALTH_RECOVER: number = 0.2;

export const RecoverCurrentHealth = (character: BaseCharacter): number => {
  let currentHealth = character
    .GetCharacterAttributes<BaseAttributeCharacter>()
    .CurrentHealth.GetValue();
  const maxHealth = character
    .GetCharacterAttributes<BaseAttributeCharacter>()
    .MaxHealth.GetValue();

  if (CurrentHealthIsEqualsMaxHealth(currentHealth, maxHealth))
    return maxHealth;

  if (!HasPassiveHealthSkill(character.GetCharacterSkills()))
    return (
      currentHealth + Math.round(currentHealth * BASE_PERCENT_HEALTH_RECOVER)
    );

  const passiveSkill = GetHealthSkillPassive(character.GetCharacterSkills());
  currentHealth = passiveSkill.InitSkill(
    character.GetCharacterAttributes()
  ) as number;

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

const HasPassiveHealthSkill = (skills: BaseSkillCharacter): boolean => {
  return skills.HasPassiveSkillByModifierType(AttributeModifyType.HEALTH);
};

const GetHealthSkillPassive = (skills: BaseSkillCharacter): BaseSkill => {
  return skills.GetPassiveSkillByModifierType(AttributeModifyType.HEALTH);
};

const IsValueSkillPercentDamage = (skill: BaseSkill): boolean => {
  return skill.GetSkillValueType() === ValueType.PERCENT;
};
