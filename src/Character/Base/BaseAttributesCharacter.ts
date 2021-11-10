import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { Agility } from "../../Attributes/BattleAttributes/Agility";
import { CurrentHealth } from "../../Attributes/BattleAttributes/CurrentHealth/CurrentHealth";
import { Damage } from "../../Attributes/BattleAttributes/Damage";
import { Defense } from "../../Attributes/BattleAttributes/Defense";
import { Energy } from "../../Attributes/BattleAttributes/Energy";
import { Resistance } from "../../Attributes/BattleAttributes/Resistance";
import { Spell } from "../../Attributes/BattleAttributes/Spell";
import { Level } from "../../Attributes/LevelAttributes/Level";
import { NeededExperience } from "../../Attributes/LevelAttributes/NeededExperience";
import { TotalExperience } from "../../Attributes/LevelAttributes/TotalExperience";
import { Dextery } from "../../Attributes/PrimaryAttributes/Dextery";
import { Intelligence } from "../../Attributes/PrimaryAttributes/Intelligence";
import { MaxHealth } from "../../Attributes/PrimaryAttributes/MaxHealth";
import { Strength } from "../../Attributes/PrimaryAttributes/Strength";
import { AttributeType } from "../../Shared/Enums/AttributeType";

export abstract class BaseAttributeCharacter {
  //Primary Attributes
  public Strength: Strength = new Strength();
  public Dextery: Dextery = new Dextery();
  public Intelligence: Intelligence = new Intelligence();
  public MaxHealth: MaxHealth = new MaxHealth();

  //Battle Attributes
  public CurrentHealth: CurrentHealth = new CurrentHealth();
  public Damage: Damage = new Damage();
  public Defense: Defense = new Defense();
  public Spell: Spell = new Spell();
  public Resistance: Resistance = new Resistance();
  public Agility: Agility = new Agility();
  public Energy: Energy = new Energy();

  // Level Attributes
  public Level: Level = new Level();
  public NeededExperience: NeededExperience = new NeededExperience();
  public TotalExperience: TotalExperience = new TotalExperience();

  private ListAttributes: Map<Map<string, BaseAttribute>, AttributeType> =
    new Map();

  protected BuildAttributes(): void {
    //TODO: Revisar inicialización de experiencia.
    this.Level.SetValue(1);
    this.NeededExperience.SetValue(100);
    this.TotalExperience.SetValue(0);
    this.CurrentHealth.SetValue(this.MaxHealth.GetValue());
  }

  protected FillListAttributes(): void {
    this.ListAttributes.clear();
    Object.entries(this).forEach((attribute) => {
      const baseAttribute = attribute[1] as BaseAttribute;
      if (attribute[0] !== "ListAttributes")
        this.ListAttributes.set(
          new Map().set(attribute[0], baseAttribute),
          baseAttribute.GetTag()
        );
    });
  }

  public GetListAttributes(): Map<Map<string, BaseAttribute>, AttributeType> {
    return this.ListAttributes;
  }

  public GetAttributesByType(
    attributeType: AttributeType
  ): Map<string, BaseAttribute> {
    const listAttributes: Map<string, BaseAttribute> = new Map();

    this.ListAttributes.forEach((tag, attribute) => {
      if (tag === attributeType) {
        attribute.forEach((baseAttribute, name) => {
          listAttributes.set(name, baseAttribute);
        });
      }
    });

    return listAttributes;
  }

  public GetValueByAttribute(attributeSearched: string): number {
    let value = 0;
    for (const attribute of this.ListAttributes.entries()) {
      if (attribute[0].has(attributeSearched)) {
        value = attribute[0].get(attributeSearched)!.GetValue();
        break;
      }
    }
    return value;
  }
}
