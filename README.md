# Open Dungeon

Welcome to **Open Dungeon**! This project is a treasure trove of JSON files crafted for enhancing your adventures in AI Dungeon, all based on original lore. Dive into a world where your choices shape the story, and every turn holds the potential for new discoveries.

## Getting Started

To integrate Open Dungeon into your game, follow these simple steps:

1. **Minify** your JSON files using a reliable tool.
2. Place the minified JSON in the **Story Cards** section or the **Backstory Module** of AI Dungeon:
   - For **Story Cards**: Add them to your library for quick access during gameplay.
   - For **Backstory**: Assign them to your **Player Character** to enrich your personal narrative.

## Player Customization

### For Characters

- **Backstory Module**: If you're stepping into the shoes of a character, place their minified JSON contents in the backstory module. This will weave your character's narrative into the fabric of your gameplay.

### For Custom Species

- **Story Cards Section**: Should you decide to play as one of the unique species, add their minified JSON contents to the Story Cards section. This allows you to draw upon the species' attributes during your game.

### Defining Your Narrative

- **Character Files**: Add a `"you"` property to your character's JSON to establish your identity in the game. Define their background and species to bring them to life.
- **Species Files**: If you opt for a custom species, ensure the `"you"` property reflects that you are perceived as this species within the game's universe.


## Compatibility

- **Mixtral Model**: Premium model, recommend for JSON handling and scripting.
- **MythoMax Model**: Free version with variable performance; version **0.18** is recommended over **0.19** for better compatibility.
- **Tiefighter Model**: Experimental and showing promise. Currently on par with MythoMax, but improvements are expected.

## Motivation

The discovery of AI Dungeon's JSON parsing capabilities was serendipitous, unearthed during a leisurely perusal of a wiki article. This undocumented feature has since opened doors to a more streamlined and efficient gameplay experience. By employing JSON, I've been able to refine game mechanics and enrich character development without overwhelming the system.

Despite JSON's tendency to consume a significant portion of AI Dungeon's character limit, even when minified, its token usage remains minimal when distilled to the essentials. This efficiency allows for an array of possibilities:

- **Descriptive Brevity**: An array of succinct phrases or keywords can vividly portray the appearance of species like the Velorians, or outline the intricacies of a magic system.
- **Rule Application**: JSON enables the implementation of specific world rules, adding depth and consistency to the game environment.
- **NPC Integration**: While Non-Player Characters (NPCs) typically require more elaborate lore, the streamlining of other elements through JSON ensures there's ample space for these characters to be woven into the narrative.

The motivation behind Open Dungeon's use of JSON is to maximize the narrative space, allowing for a richer and more immersive storytelling experience.

## Contribution

Your contributions are what make Open Dungeon a collaborative and ever-evolving project. If you have ideas or enhancements, feel free to fork the repository and submit a pull request.

## License

Open Dungeon is released into the public domain under the [Unlicense](LICENSE). This means you are free to use, modify, and distribute the files as you see fit, without any restrictions.