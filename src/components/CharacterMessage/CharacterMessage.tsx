import { useContext } from "react";
import { CHARACTER_ROLES } from "../../constants/characterRoles";
import {
  CharactersContext,
  iCharacterContext,
} from "../../context/charactersContext";

const messageByRole = {
  [CHARACTER_ROLES.ADVISOR]: "No sé por qué, pero creo que voy a morir pronto",
  [CHARACTER_ROLES.FIGHTER]: "Primero pego y luego pregunto",
  [CHARACTER_ROLES.KING]: "Vais a morir todos",
  [CHARACTER_ROLES.SQUIRE]: "Soy un loser",
};

export function CharacterMessage() {
  const { speakConfig } = useContext(CharactersContext) as iCharacterContext;

  console.log(speakConfig);

  return (
    <div className={"comunications" + (speakConfig.visible ? " on" : "")}>
      {speakConfig.visible && (
        <>
          <p className="comunications__text display-1">
            {messageByRole[speakConfig.role as CHARACTER_ROLES]}
          </p>
          <img
            className="comunications__picture"
            src={speakConfig.imgSrc}
            alt={speakConfig.imgAltText}
          />
        </>
      )}
    </div>
  );
}
