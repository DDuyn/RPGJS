import { BaseAttributeCharacter } from "../Character/Base/BaseAttributesCharacter";
import { CharacterType } from "../Shared/Enums/CharacterType";
import { Utils } from "../Shared/Utils/Utils";
import { BaseSkill } from "../Skills/Base/BaseSkill";
import { Loot } from "./Loot/Loot";
import { GenerateRandomLoot } from "./Loot/Utils/GenerateRandomLoot";
import { Party } from "./Party/Party";
import { CharacterInBattle } from "./Type/CharacterInBattle";

export class Battle {
  private static PlayerParty: Party;
  private static Loot: Loot;

  private static PlayerPartyForBattle: Party;
  private static EnemyPartyForBattle: Party;
  private static PlayerCombatient: CharacterInBattle;
  private static EnemyCombatient: CharacterInBattle;

  //TODO: Parámetrizar Dungeon
  public static InitBattle(playerParty: Party, enemyParty: Party): void {
    this.PlayerParty = playerParty;
    this.PlayerPartyForBattle = Utils.DeepClone<Party>(playerParty);
    this.EnemyPartyForBattle = Utils.DeepClone<Party>(enemyParty);

    this.PlayerCombatient = this.PlayerPartyForBattle.GetCharacterStarter();
    this.EnemyCombatient = this.EnemyPartyForBattle.GetCharacterStarter();
    this.Loot = GenerateRandomLoot(1);
  }

  public static Combat(): void {
    this.LogicCombat();
  }

  public static EndBattle(): void {
    //TODO: Base XP Level Dungeon
    //TODO: Calculate XP Level Enemies
    //TODO: Lógica muerte permanente
    //TODO: Contador de asesinatos
    this.PlayerParty.AddLootToParty(this.Loot);
    this.PlayerParty.PartyGainExperience(500);
    this.PlayerParty.RecoverPartyCurrenthHealth(this.PlayerPartyForBattle);
    this.PlayerParty.ResetPartyEndBattle();
  }

  public static SetSkillToBattle(
    skill: BaseSkill,
    characterType: CharacterType
  ): void {
    characterType === CharacterType.PLAYER
      ? (this.PlayerCombatient.skill = skill)
      : (this.EnemyCombatient.skill = skill);
  }

  public static SwitchCombatient(
    character: CharacterInBattle,
    characterType: CharacterType
  ): void {
    characterType === CharacterType.PLAYER
      ? (this.PlayerCombatient = character)
      : (this.EnemyCombatient = character);

    this.PlayerParty.SetCharacterIsCombat(character);
  }

  public static DeadLogic(character: CharacterInBattle): void {
    this.PlayerParty.SetCharacterIsDead(character);
  }

  private static LogicCombat(): void {
    //TODO: En caso de empate de agilidad randomizar quien ataca primero.
    if (
      this.GetAgilityInBattle(this.PlayerCombatient) >=
      this.GetAgilityInBattle(this.EnemyCombatient)
    ) {
      this.TurnLogic(this.PlayerCombatient, this.EnemyCombatient);
      if (!this.IsCombatientDead(this.EnemyCombatient))
        this.TurnLogic(this.EnemyCombatient, this.PlayerCombatient);
    } else {
      this.TurnLogic(this.EnemyCombatient, this.PlayerCombatient);
      if (!this.IsCombatientDead(this.PlayerCombatient))
        this.TurnLogic(this.PlayerCombatient, this.EnemyCombatient);
    }
  }

  private static TurnLogic(
    attacker: CharacterInBattle,
    defender: CharacterInBattle
  ): void {
    if (!attacker.skill?.IsCastSelf()) {
      const damage = this.DoSkillInBattle(attacker, defender) as number;
      defender.character.TakeDamage(damage);
    } else {
      attacker.character.DoSkill(attacker.skill!);
    }
  }

  private static DoSkillInBattle(
    attacker: CharacterInBattle,
    defender: CharacterInBattle
  ): number | void {
    return attacker.character.DoSkill(attacker.skill!, defender.character)!;
  }

  private static IsCombatientDead(defender: CharacterInBattle): boolean {
    return defender.character.IsCharacterDead();
  }

  private static GetAgilityInBattle(character: CharacterInBattle): number {
    return character.character
      .GetCharacterAttributes<BaseAttributeCharacter>()
      .Agility.GetValue();
  }
}
