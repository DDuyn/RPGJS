import { AttributeConstants } from "../../Attributes/Constants/AttributeConstants";
import { CharacterInBattleModel } from "../Models/CharacterInBattleModel";
import { TurnBattleModel } from "../Models/TurnBattleModel";

export const TurnLogicBattle = (turnBattle: TurnBattleModel): void => {
  CharacterDoSkill(turnBattle.First, turnBattle.Second);
  if (!IsCombatientDead(turnBattle.Second))
    CharacterDoSkill(turnBattle.Second, turnBattle.First);
};

const CharacterDoSkill = (
  attacker: CharacterInBattleModel,
  defender: CharacterInBattleModel
): void => {
  if (attacker.Skill?.GetData().IsCastSelf)
    attacker.Character.DoSkill(attacker.Skill!);
  else attacker.Character.DoSkill(attacker.Skill!, defender.Character);
};

const IsCombatientDead = (character: CharacterInBattleModel): boolean => {
  const currentHealth = character.Character.GetValueByAttribute(
    AttributeConstants.CURRENTHEALTH
  );
  if (currentHealth <= 0) character.IsDead = true;

  return character.IsDead;
};
