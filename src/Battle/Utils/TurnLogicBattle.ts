import { Attributes } from "../../Attributes/Constants/Attributes";
import { Utils } from "../../Shared/Utils/Utils";
import { CharacterInBattleModel } from "../Models/CharacterInBattleModel";
import { TurnBattleModel } from "../Models/TurnBattleModel";

export const TurnLogicBattle = (turnBattle: TurnBattleModel): void => {
  CharacterDoSkill(turnBattle.First, turnBattle.Second);
  if (!IsCombatientDead(turnBattle.Second))
    CharacterDoSkill(turnBattle.Second, turnBattle.First);

  IsCombatientDead(turnBattle.First);
  console.log(
    turnBattle.First.Character.GetData().Name,
    turnBattle.First.IsDead
  );
};

const CharacterDoSkill = (
  attacker: CharacterInBattleModel,
  defender: CharacterInBattleModel
): void => {
  if (!Utils.IsUndefined(attacker.Skill)) {
    if (attacker.Skill?.GetData().IsCastSelf)
      attacker.Character.DoSkill(attacker.Skill);
    else attacker.Character.DoSkill(attacker.Skill!, defender.Character);

    console.log(
      attacker.Character.GetData().Name,
      attacker.Skill?.GetName(),
      attacker.Character.GetValueModifiedByAttribute(Attributes.CURRENTHEALTH),
      defender.Character.GetData().Name,
      defender.Skill?.GetName(),
      defender.Character.GetValueModifiedByAttribute(Attributes.CURRENTHEALTH)
    );

    attacker.Skill = undefined;
  }
};

const IsCombatientDead = (character: CharacterInBattleModel): boolean => {
  const currentHealth = character.Character.GetValueModifiedByAttribute(
    Attributes.CURRENTHEALTH
  );
  if (currentHealth <= 0) character.IsDead = true;

  return character.IsDead;
};
