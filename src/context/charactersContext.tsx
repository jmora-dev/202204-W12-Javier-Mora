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
    text: "",
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
    setSpeakConfig({ ...speakConfig, visible: true, text: "" });
    setTimeout(() => {
      setSpeakConfig({ ...speakConfig, visible: false, text: "" });
    }, 3000);
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
