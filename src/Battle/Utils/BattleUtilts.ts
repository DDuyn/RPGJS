import { AttributeConstants } from "../../Attributes/Constants/AttributeConstants";
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
  SyncCharactersInCombat();
  SyncCharactersCurrentHealth();
};

const SyncCharactersInCombat = (): void => {
  PARTY_IN_BATTLE.Characters.forEach((characterBattle) => {
    if (characterBattle.IsCombat) {
      const character = GetCharacterFromParty(
        characterBattle,
        PARTY.Characters
      );
      console.log(character.Character.GetData().Name);
      character.IsCombat = true;
    }
  });
};

const SyncCharactersCurrentHealth = (): void => {
  PARTY_IN_BATTLE.Characters.forEach((characterBattle) => {
    const character = GetCharacterFromParty(characterBattle, PARTY.Characters);
    const currentHealth = characterBattle.Character.GetValueByAttribute(
      AttributeConstants.CURRENTHEALTH
    );
    character.Character.SetValueInAttribute(
      currentHealth,
      AttributeConstants.CURRENTHEALTH
    );
  });
};

const GetCharacterFromParty = (
  character: CharacterInBattleModel,
  characters: CharacterInBattleModel[]
): CharacterInBattleModel => {
  return characters.find(
    (c) => c.Character.GetData().Name === character.Character.GetData().Name
  )!;
};
