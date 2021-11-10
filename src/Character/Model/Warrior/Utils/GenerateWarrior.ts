import { Utils } from "../../../../Shared/Utils/Utils";
import { GenerateBasePrimaryAttributes } from "../../Base/Utils/GenerateCharacter";

export const GenerateWarrior = (): void => {
  GeneratePrimaryAttributes();
  //GenerateBattleAttributes();
};

const GeneratePrimaryAttributes = (): void => {
  const strength = Utils.Random(40, 60);
  const dextery = Utils.Random(15, 25);
  const intelligence = Utils.Random(5, 15);
  const maxhealth = Utils.Random(250, 450);
  GenerateBasePrimaryAttributes({
    Strength: strength,
    Dextery: dextery,
    Intelligence: intelligence,
    MaxHealth: maxhealth,
  });
};
/*
const GenerateBattleAttributes = (): void => {
  BASE_ATTRIBUTE_MODEL.CurrenthHealth.SetValue(
    BASE_ATTRIBUTE_MODEL.CurrenthHealth.GetValue()
  );
  BASE_ATTRIBUTE_MODEL.Agility.SetValue(Utils.Random(20, 30));
  BASE_ATTRIBUTE_MODEL.Damage.SetValue(Utils.Random(100, 250));
  BASE_ATTRIBUTE_MODEL.Defense.SetValue(Utils.Random(100, 250));
  BASE_ATTRIBUTE_MODEL.Energy.SetValue(Utils.Random(20, 30));
  BASE_ATTRIBUTE_MODEL.Resistance.SetValue(Utils.Random(45, 80));
  BASE_ATTRIBUTE_MODEL.Spell.SetValue(Utils.Random(10, 20));
}; */
