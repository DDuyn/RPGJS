import { BaseAttributeCharacter } from "../../Character/Classes/Base/BaseAttributesCharacter";
import { BaseCharacter } from "../../Character/Classes/Base/BaseCharacter";
import { Loot } from "../../Loot/Loot";
import { Utils } from "../../Shared/Utils/Utils";
import { CharacterInBattle } from "../Type/CharacterInBattle";

export class PartyOld {
  private party: CharacterInBattle[] = [];
  //TODO: Sistema de inventario
  private lootParty: Loot[] = [];

  public AddCharacterToParty(
    character: BaseCharacter,
    isStarter: boolean
  ): boolean {
    if (this.party.length >= 3) return false;
    const characterToBattle: CharacterInBattle = {
      character: character,
      isStarter: isStarter,
      isDead: false,
      isCombat: isStarter,
    };
    this.party.push(characterToBattle);

    return true;
  }

  public GetParty(): CharacterInBattle[] {
    return this.party;
  }

  public AddLootToParty(loot: Loot): void {
    this.lootParty.push(loot);
  }

  public GetCharacterStarter(): CharacterInBattle {
    return this.party.find((character) => character.isStarter)!;
  }

  public GetCharacterFromParty(characterName: string): CharacterInBattle {
    return this.party.find(
      (character) => character.character.GetCharacterName() === characterName
    )!;
  }

  public OutFromParty(characterName: string): BaseCharacter {
    return this.party.find(
      (characterInBattle) =>
        characterInBattle.character.GetCharacterName() === characterName
    )!.character;
  }

  public PartyGainExperience(totalExperience: number): void {
    const experience = Utils.Rounded(
      totalExperience / this.CountCharactersCombat()
    );

    this.party.forEach((characterInBattle) => {
      if (characterInBattle.isCombat)
        characterInBattle.character.GainExperience(experience);
    });
  }

  public ResetPartyEndBattle(): void {
    this.party.forEach((characterInBattle) => {
      if (!characterInBattle.isStarter) characterInBattle.isCombat = false;
    });
  }

  public RecoverPartyCurrenthHealth(partyFromBattle: Party): void {
    this.party.forEach((character) => {
      const characterFound = partyFromBattle.GetCharacterFromParty(
        character.character.GetCharacterName()
      );

      console.log(
        characterFound.character.GetCharacterName(),
        characterFound.character
          .GetCharacterAttributes<BaseAttributeCharacter>()
          .CurrentHealth.GetValue()
      );

      if (character.isCombat && !character.isDead) {
        const healthRecovered = characterFound.character.GetHealthRecovered();
        character.character
          .GetCharacterAttributes<BaseAttributeCharacter>()
          .CurrentHealth.SetValue(healthRecovered);
      }
    });
  }

  public SetCharacterIsCombat(character: CharacterInBattle): void {
    const characterFound = this.party.find((characterParty) => {
      return (
        characterParty.character.GetCharacterName() ===
        character.character.GetCharacterName()
      );
    });
    characterFound!.isCombat = true;
  }

  public SetCharacterIsDead(characater: CharacterInBattle): void {
    const characterFound = this.party.find((characterParty) => {
      return (
        characterParty.character.GetCharacterName() ===
        characater.character.GetCharacterName()
      );
    });
    characterFound!.isDead = true;
  }

  private CountCharactersCombat(): number {
    return this.party.filter((character) => character.isCombat).length;
  }
}
