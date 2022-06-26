import { CharactersContextProvider } from "../../context/charactersContext";
import { CharacterList } from "../CharacterList/CharacterList";
import { CharacterMessage } from "../CharacterMessage/CharacterMessage";

function App() {
  return (
    <CharactersContextProvider>
      <div className="app container">
        <CharacterList />
      </div>
      <CharacterMessage />
    </CharactersContextProvider>
  );
}

export default App;
