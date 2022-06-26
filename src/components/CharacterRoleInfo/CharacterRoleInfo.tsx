import { CHARACTER_ROLES } from "../../constants/characterRoles";
import { iCharacter } from "../../interfaces/iCharacter";

interface CharacterRoleInfoProps {
  character: iCharacter;
}

export function CharacterRoleInfo({ character }: CharacterRoleInfoProps) {
  const infoElementsByRole = (character: iCharacter): JSX.Element | null => {
    switch (character.role) {
      case CHARACTER_ROLES.ADVISOR:
        return <li>Asesora a: {character.assignTo}</li>;

      case CHARACTER_ROLES.FIGHTER:
        return (
          <>
            <li>Arma: {character.weapon}</li>
            <li>Destreza: {character.dexterity}</li>
          </>
        );

      case CHARACTER_ROLES.KING:
        return <li>Años de reinado: {character.reignYears}</li>;

      case CHARACTER_ROLES.SQUIRE:
        return (
          <>
            <li>Peloteo: {character.fawnerLevel}</li>
            <li>Sirve a: {character.assignTo}</li>
          </>
        );

      default:
        return null;
    }
  };

  return <ul className="list-unstyled">{infoElementsByRole(character)}</ul>;
}
