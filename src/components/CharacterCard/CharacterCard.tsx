import { iCharacter } from "../../interfaces/iCharacter";
import { CharacterEmoji } from "../CharacterEmoji/CharacterEmoji";
import { CharacterRoleInfo } from "../CharacterRoleInfo/CharacterRoleInfo";

interface CharacterCardProps {
  character: iCharacter;
  killCharacter: () => void;
  speakCharacter: () => void;
}

export function CharacterCard({
  character,
  killCharacter,
  speakCharacter,
}: CharacterCardProps) {
  return (
    <div className="card character__card">
      <img
        src={character.img}
        alt={character.name + " - " + character.family}
        className={
          "character__picture card-img-top" +
          (character.isAlive ? "" : " character__picture--isDead")
        }
      />
      <div className="card-body">
        <h2 className="character__name card-title h4">{character.name}</h2>
        <div className="character__info">
          <ul className="list-unstyled">
            <li>{`Edad: ${character.age} años`}</li>
            <li>
              {"Estado: "}
              <i
                className={
                  "fas" +
                  (character.isAlive ? " fa-thumbs-up" : " fa-thumbs-down")
                }
              ></i>
            </li>
          </ul>
        </div>
        <div className="character__overlay">
          <CharacterRoleInfo character={character} />
          <div className="character__actions">
            <button className="character__action btn" onClick={speakCharacter}>
              habla
            </button>
            <button className="character__action btn" onClick={killCharacter}>
              muere
            </button>
          </div>
        </div>
      </div>
      <CharacterEmoji role={character.role} />
    </div>
  );
}
