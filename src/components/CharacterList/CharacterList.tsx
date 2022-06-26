import { iCharacter } from "../../interfaces/iCharacter";
import { CharacterCard } from "../CharacterCard/CharacterCard";

interface CharacterListProps {
  characters: Array<iCharacter>;
}

export function CharacterList({ characters }: CharacterListProps) {
  return (
    <ul className="characters-list row list-unstyled">
      {characters.map((character) => (
        <li key={character.name}>
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
}
