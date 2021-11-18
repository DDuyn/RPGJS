import { ICharacter } from "../../../../../Character/Interfaces/ICharacter";
import { AttributeModifyType } from "../../../../../Shared/Enums/AttributeModifyType";
import { ValueType } from "../../../../../Shared/Enums/ValueType";
import { BaseSkillModel } from "../../../../../Skills/Models/Base/BaseSkillModel";
import { AttributeConstants } from "../../../../Constants/AttributeConstants";

const BASE_PERCENT_HEALTH_RECOVER: number = 0.2;

export const RecoverCurrentHealth = (character: ICharacter): number => {
  let currentHealth = character.GetValueByAttribute(
    AttributeConstants.CURRENTHEALTH
  );
  const maxHealth = character.GetValueByAttribute(AttributeConstants.MAXHEALTH);

  if (CurrentHealthIsEqualsMaxHealth(currentHealth, maxHealth))
    return maxHealth;

  if (!HasPassiveHealthSkill(character))
    return (
      currentHealth + Math.round(currentHealth * BASE_PERCENT_HEALTH_RECOVER)
    );

  const passiveSkill = GetHealthSkillPassive(character);
  passiveSkill.LogicSkill(character);

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

const HasPassiveHealthSkill = (character: ICharacter): boolean => {
  return !!character
    .GetData()
    .Skills.find((s) => s.AttributeModifier === AttributeModifyType.HEALTH);
};

const GetHealthSkillPassive = (character: ICharacter): BaseSkillModel => {
  return character
    .GetData()
    .Skills.find((s) => s.AttributeModifier === AttributeModifyType.HEALTH)!;
};

const IsValueSkillPercentDamage = (skill: BaseSkillModel): boolean => {
  return skill.ValueType === ValueType.PERCENT;
};
