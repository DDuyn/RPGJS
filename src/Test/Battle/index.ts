import { Attributes } from "../../Attributes/Constants/Attributes";
import { Battle } from "../../Battle/Battle";
import { Action } from "../../Battle/Enums/Action";
import { CharacterInBattleModel } from "../../Battle/Models/CharacterInBattleModel";
import { Undead } from "../../Character/EnemyCharacters/Undead/Undead";
import { Mage } from "../../Character/PlayerCharacters/Mage/Mage";
import { Warrior } from "../../Character/PlayerCharacters/Warrior/Warrior";
import { Party } from "../../Party/Party";
import { Regenerate } from "../../Skills/PassiveSkill/Regenerate";

const warrior = new Warrior("Ragnar");
const mage = new Mage("Merlin");
const undead = new Undead(1, 4);
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

//TODO: Generar random
const enemyInBattle: CharacterInBattleModel[] = [
  {
    Character: undead,
    Action: Action.WAIT,
    IsStarter: true,
    IsCombat: true,
    IsDead: false,
  },
  {
    Character: undead,
    Action: Action.WAIT,
    IsStarter: false,
    IsCombat: false,
    IsDead: false,
  },
];

console.log(
  warrior.GetData().Name,
  warrior.GetValueByAttribute(Attributes.CURRENTHEALTH)
);

console.log(
  undead.GetData().Name,
  undead.GetValueByAttribute(Attributes.CURRENTHEALTH),
  undead.GetValueByAttribute(Attributes.LEVEL)
);

warrior.PurchaseSkill(regenerate);

const battle = new Battle();

const partyPlayer = new Party(playerInBattle);
const partyEnemy = new Party(enemyInBattle);

battle.InitBattle(partyPlayer.GetData(), partyEnemy.GetData());
let currentCombatient = battle.GetCombatient();

/*battle.SetSkill(
  currentCombatient.Character.GetSkill("Attack"),
  currentCombatient.Character.GetData().Type
); */
battle.SetSkill(undead.GetSkill("Attack"), undead.GetData().Type);

battle.SwitchCombatient(partyPlayer.GetCharacter(mage.GetData().Name));
battle.Combat();

currentCombatient = battle.GetCombatient();
battle.SetSkill(
  currentCombatient.Character.GetSkill("Attack"),
  currentCombatient.Character.GetData().Type
);
battle.SetSkill(undead.GetSkill("Attack"), undead.GetData().Type);

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
console.log(
  "Vida Main before",
  undead.GetData().Name,
  undead.GetValueByAttribute(Attributes.CURRENTHEALTH),
  undead.GetValueByAttribute(Attributes.TOTALEXPERIENCE)
);

partyPlayer
  .GetData()
  .LootParty?.Weapons?.forEach((w) => console.log(w.GetData()));
