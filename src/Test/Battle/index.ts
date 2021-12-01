import { Attributes } from "../../Attributes/Constants/Attributes";
import { Battle } from "../../Battle/Battle";
import { Action } from "../../Battle/Enums/Action";
import { CharacterInBattleModel } from "../../Battle/Models/CharacterInBattleModel";
import { Mage } from "../../Character/PlayerCharacters/Mage/Mage";
import { Warrior } from "../../Character/PlayerCharacters/Warrior/Warrior";
import { Cave } from "../../Dungeon/Cave/Cave";
import { Party } from "../../Party/Party";
import { Regenerate } from "../../Skills/PassiveSkill/Regenerate";

const warrior = new Warrior("Ragnar");
const mage = new Mage("Merlin");
const regenerate = new Regenerate(warrior);

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

const battle = new Battle();

const partyPlayer = new Party(playerInBattle);

const cave = new Cave();

battle.InitBattle(partyPlayer.GetData(), cave.GetData());

let currentCombatient = battle.GetCombatient();

battle.SwitchCombatient(partyPlayer.GetCharacter(mage.GetData().Name));
battle.Combat();

currentCombatient = battle.GetCombatient();
battle.SetSkill(
  currentCombatient.Character.GetSkill("Attack"),
  currentCombatient.Character.GetData().Type
);

battle.Combat();
battle.EndBattle();

console.log(
  "Vida Main before",
  warrior.GetData().Name,
  warrior.GetValueByAttribute(Attributes.CURRENTHEALTH),
  warrior.GetValueByAttribute(Attributes.TOTALEXPERIENCE)
);
console.log(
  "Vida Main before",
  mage.GetData().Name,
  mage.GetValueByAttribute(Attributes.CURRENTHEALTH),
  mage.GetValueByAttribute(Attributes.TOTALEXPERIENCE)
);

partyPlayer
  .GetData()
  .LootParty?.Weapons?.forEach((w) => console.log(w.GetData()));
