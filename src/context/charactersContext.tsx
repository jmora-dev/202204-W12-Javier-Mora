import { createContext, useState } from "react";
import { charactersData } from "../data/charactersData";
import { iCharacter } from "../interfaces/iCharacter";
import { iSpeakCharacterConfig } from "../interfaces/iSpeakCharacterConfig";

export interface iCharacterContext {
  characters: Array<iCharacter>;
  speakConfig: iSpeakCharacterConfig;
  killCharacter: (id: number) => void;
  speakCharacter: (id: number) => void;
}

export const CharactersContext = createContext<undefined | iCharacterContext>(
  undefined
);

export function CharactersContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [characters, setCharacters] =
    useState<Array<iCharacter>>(charactersData);
  const [speakConfig, setSpeakConfig] = useState<iSpeakCharacterConfig>({
    visible: false,
  });

  const killCharacter = (id: number) => {
    setCharacters(
      characters.map((character) =>
        character.id !== id
          ? { ...character }
          : { ...character, isAlive: false }
      )
    );
  };

  const speakCharacter = (id: number) => {
    const character = characters.find((character) => character.id === id);
    if (character) {
      setSpeakConfig({
        ...speakConfig,
        visible: true,
        role: character.role,
        imgSrc: character.img,
        imgAltText: `${character.name} - ${character.family}`,
      });
      setTimeout(() => {
        setSpeakConfig({ ...speakConfig, visible: false });
      }, 2000);
    }
  };

  const value = {
    characters,
    speakConfig,
    killCharacter,
    speakCharacter,
  };

  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
}
