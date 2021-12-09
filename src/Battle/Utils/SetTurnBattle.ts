import { Attributes } from "../../Attributes/Constants/Attributes";
import { Utils } from "../../Shared/Utils/Utils";
import { Action } from "../Enums/Action";
import { CharacterInBattleModel } from "../Models/CharacterInBattleModel";
import { TurnBattleModel } from "../Models/TurnBattleModel";

let turnBattle: TurnBattleModel;

export const SetTurnBattle = (
  player: CharacterInBattleModel,
  enemy: CharacterInBattleModel
): TurnBattleModel => {
  turnBattle = { First: player, Second: enemy };

  const agilityPlayer = CalculateAgility(player);
  const agilityEnemy = CalculateAgility(enemy);

  if (agilityEnemy > agilityPlayer) EnemyIsMostFastThanPlayer(player, enemy);
  if (agilityEnemy === agilityPlayer) EnemyEqualsFastAsPlayer(player, enemy);

  return turnBattle;
};

const CalculateAgility = (character: CharacterInBattleModel): number => {
  //TODO: Generar método para definir turnos.
  return character.Action === Action.SWITCH
    ? 0
    : character.Character.GetValueModifiedByAttribute(Attributes.AGILITY);
};

const EnemyIsMostFastThanPlayer = (
  player: CharacterInBattleModel,
  enemy: CharacterInBattleModel
): void => {
  turnBattle.First = enemy;
  turnBattle.Second = player;
};

const EnemyEqualsFastAsPlayer = (
  player: CharacterInBattleModel,
  enemy: CharacterInBattleModel
): void => {
  const characters: CharacterInBattleModel[] = [player, enemy];
  turnBattle.First =
    Utils.GetRandomElementFromList<CharacterInBattleModel>(characters);
  turnBattle.Second = characters.find(
    (character) => character !== turnBattle.First
  )!;
};
