import { Attributes } from "../../Attributes/Constants/Attributes";
import { BasePartyModel } from "../../Party/Models/BasePartyModel";
import { CharacterInBattleModel } from "../Models/CharacterInBattleModel";

let PARTY: BasePartyModel;
let PARTY_IN_BATTLE: BasePartyModel;

export const SyncCharacterDataBattle = (
  party: BasePartyModel,
  partyInBattle: BasePartyModel
): void => {
  PARTY = party;
  PARTY_IN_BATTLE = partyInBattle;
  SyncCharacters();
};

const SyncCharacters = (): void => {
  PARTY_IN_BATTLE.Characters.forEach((characterBattle) => {
    const character = GetCharacterFromParty(characterBattle);
    SyncCharactersIsCombat(character, characterBattle);
    SyncCharactersCurrentHealth(character, characterBattle);
    SyncCharactersIsDead(character, characterBattle);
  });
};

const SyncCharactersIsCombat = (
  character: CharacterInBattleModel,
  characterBattle: CharacterInBattleModel
): void => {
  if (characterBattle.IsCombat) character.IsCombat = true;
};

const SyncCharactersCurrentHealth = (
  character: CharacterInBattleModel,
  characterBattle: CharacterInBattleModel
): void => {
  const currentHealth = characterBattle.Character.GetValueModifiedByAttribute(
    Attributes.CURRENTHEALTH
  );
  character.Character.SetValueModifiedInAttribute(
    currentHealth,
    Attributes.CURRENTHEALTH
  );
};

const SyncCharactersIsDead = (
  character: CharacterInBattleModel,
  characterBattle: CharacterInBattleModel
): void => {
  if (characterBattle.IsDead) character.IsDead = true;
};

const GetCharacterFromParty = (
  characterBattle: CharacterInBattleModel
): CharacterInBattleModel => {
  return PARTY.Characters.find(
    (c) =>
      c.Character.GetData().Name === characterBattle.Character.GetData().Name
  )!;
};
