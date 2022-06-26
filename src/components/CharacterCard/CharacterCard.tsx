import { iCharacter } from "../../interfaces/iCharacter";
import { CharacterEmoji } from "../CharacterEmoji/CharacterEmoji";
import { CharacterRoleInfo } from "../CharacterRoleInfo/CharacterRoleInfo";

interface CharacterCardProps {
  character: iCharacter;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div
      className={
        "card character__card" + character.isAlive
          ? ""
          : " character__card--isDead"
      }
    >
      <img
        src={character.img}
        alt={character.name + " - " + character.family}
        className="character__picture card-img-top"
      />
      <div className="card-body">
        <h2 className="character__name card-title h4">{character.name}</h2>
        <div className="character__info">
          <ul className="list-unstyled">
            <li>{`Edad: ${character.age} años`}</li>
            <li>
              Estado:
              <i
                className={
                  "fas" + character.isAlive
                    ? " fa-thumbs-up"
                    : " fa-thumbs-down"
                }
              ></i>
            </li>
          </ul>
        </div>
        <div className="character__overlay">
          <CharacterRoleInfo character={character} />
          <div className="character__actions">
            <button className="character__action btn">habla</button>
            <button className="character__action btn">muere</button>
          </div>
        </div>
      </div>
      <CharacterEmoji role={character.role} />
    </div>
  );
}
