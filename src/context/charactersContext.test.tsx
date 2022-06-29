import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useContext } from "react";
import {
  CharactersContext,
  CharactersContextProvider,
  iCharacterContext,
} from "./charactersContext";

describe("Given CharactersContext component", () => {
  let TestComponent: () => JSX.Element;

  beforeEach(() => {
    TestComponent = () => {
      const { characters, killCharacter, speakConfig, speakCharacter } =
        useContext(CharactersContext) as iCharacterContext;
      return (
        <>
          {characters.length && (
            <>
              <p>Is alive: {characters[0].isAlive.toString()}</p>
              <button onClick={() => killCharacter(1)}>kill</button>
            </>
          )}
          <p>Message visible: {speakConfig.visible.toString()}</p>
          <button onClick={() => speakCharacter(1)}>speak</button>
        </>
      );
    };
  });

  describe("When kill character 1", () => {
    test("Then should be 'Is alive: false'", async () => {
      render(
        <CharactersContextProvider>
          <TestComponent />
        </CharactersContextProvider>
      );

      await screen.findByText(/Is alive: true/i);
      const killButton = screen.getByText("kill");
      userEvent.click(killButton);
      screen.getByText(/Is alive: false/i);
    });
  });

  describe("When speak character 1", () => {
    test("Then should be 'Message visible: true'", async () => {
      render(
        <CharactersContextProvider>
          <TestComponent />
        </CharactersContextProvider>
      );

      screen.getByText(/Message visible: false/i);
      const speakButton = screen.getByText("speak");
      userEvent.click(speakButton);
      screen.getByText(/Message visible: true/i);
      await screen.findByText(/Message visible: false/i, undefined, {
        timeout: 2100,
      });
    });
  });
});
