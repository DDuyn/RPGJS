import { Attributes } from "../../Attributes/Constants/Attributes";
import { Battle } from "../../Battle/Battle";
import { Action } from "../../Battle/Enums/Action";
import { CharacterInBattleModel } from "../../Battle/Models/CharacterInBattleModel";
import { Mage } from "../../Character/PlayerCharacters/Mage/Mage";
import { Warrior } from "../../Character/PlayerCharacters/Warrior/Warrior";
import { Cave } from "../../Dungeon/Cave/Cave";
import { IDungeon } from "../../Dungeon/Interfaces/IDungeon";
import { BaseLootModel } from "../../Loot/Models/BaseLootModel";
import { Party } from "../../Party/Party";
import { Regenerate } from "../../Skills/PassiveSkill/Regenerate";

const warrior = new Warrior("Ragnar");
const mage = new Mage("Merlin");
const regenerate = new Regenerate(warrior, 1);

const playerInBattle: CharacterInBattleModel[] = [
  {
    Character: warrior,
    Action: Action.WAIT,
    IsStarter: true,
    IsCombat: true,
    IsDead: false,
  },
  {
    Character: mage,
    Action: Action.WAIT,
    IsStarter: false,
    IsCombat: false,
    IsDead: false,
  },
];

warrior.PurchaseSkill(regenerate);
const cave = new Cave(1);

const logic = (
  characters: CharacterInBattleModel[],
  dungeon: IDungeon
): BaseLootModel => {
  console.log(dungeon.GetData().Name);
  const battle = new Battle();
  const partyPlayer = new Party(characters);
  const enemies = battle.InitBattle(partyPlayer.GetData(), dungeon.GetData());
  let currentCombatient = battle.GetCombatient();

  let i = 0;
  while (battle.HasEnemiesLive()) {
    while (!enemies[i].IsDead && !currentCombatient.IsDead) {
      battle.SetSkill(
        currentCombatient.Character.GetSkill("Attack"),
        currentCombatient.Character.GetData().Type
      );

      battle.Combat();
    }

    if (currentCombatient.IsDead) {
      battle.EndBattle();
      break;
    }
    battle.NextEnemy();
    i++;
  }

  if (!currentCombatient.IsDead) battle.EndBattle();

  console.log(
    "Vida Main before",
    warrior.GetData().Name,
    warrior.GetValueModifiedByAttribute(Attributes.CURRENTHEALTH),
    warrior.GetValueByAttribute(Attributes.TOTALEXPERIENCE)
  );
  console.log(
    "Vida Main before",
    mage.GetData().Name,
    mage.GetValueModifiedByAttribute(Attributes.CURRENTHEALTH),
    mage.GetValueModifiedByAttribute(Attributes.TOTALEXPERIENCE)
  );
  return partyPlayer.GetData().LootParty!;
};

const loot1 = logic(playerInBattle, cave);
const loot2 = logic(playerInBattle, loot1.Dungeons[0]);
