import { ICharacter } from "../../../../../Character/Interfaces/ICharacter";
import { PassiveType } from "../../../../../Shared/Enums/PassiveType";
import { Utils } from "../../../../../Shared/Utils/Utils";
import { ISkill } from "../../../../../Skills/Interfaces/ISkill";
import { Attributes } from "../../../../Constants/Attributes";

const BASE_PERCENT_HEALTH_RECOVER: number = 0.2;

export const RecoverCurrentHealth = (character: ICharacter): number => {
  const currentHealth = character.GetValueByAttribute(Attributes.CURRENTHEALTH);
  const maxHealth = character.GetValueByAttribute(Attributes.MAXHEALTH);
  const differenceHealth = maxHealth - currentHealth;

  if (currentHealth >= maxHealth) return maxHealth;

  const passiveSkill = GetHealthSkillPassive(character);

  if (Utils.IsNull(passiveSkill) || Utils.IsUndefined(passiveSkill))
    return BaseRecoverHealth(currentHealth, differenceHealth);

  character.DoSkill(passiveSkill);

  return BaseRecoverHealth(
    character.GetValueByAttribute(Attributes.CURRENTHEALTH),
    differenceHealth
  );
};

const BaseRecoverHealth = (
  currentHealth: number,
  differenceHealth: number
): number => {
  return (
    currentHealth + Math.round(differenceHealth * BASE_PERCENT_HEALTH_RECOVER)
  );
};

const GetHealthSkillPassive = (character: ICharacter): ISkill => {
  return character
    .GetData()
    .Skills.find((s) => s.GetData().PassiveType === PassiveType.HEALTH)!;
};
