import { useContext } from "react";
import {
  CharactersContext,
  iCharacterContext,
} from "../../context/charactersContext";
import { CharacterCard } from "../CharacterCard/CharacterCard";

export function CharacterList() {
  const { characters, killCharacter, speakCharacter } = useContext(
    CharactersContext
  ) as iCharacterContext;

  return (
    <ul className="characters-list row list-unstyled">
      {characters.map((character) => (
        <li key={character.name} className="character col">
          <CharacterCard
            character={character}
            killCharacter={() => killCharacter(character.id)}
            speakCharacter={() => speakCharacter(character.id)}
          />
        </li>
      ))}
    </ul>
  );
}
