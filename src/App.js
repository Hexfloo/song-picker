import { useState } from "react";
import "./App.css";
import OptionsForm from "./components/OptionsForm";
/* import Introduction from "./components/Introduction";
import Thanks from "./components/Thanks";
import Dj from "./components/Dj"; */

const INITIAL_VOTES = [{ song1: 2 }, { song2: 4 }, { song3: 1 }];

function App() {
  const [votes, setVotes] = useState(INITIAL_VOTES);

  const addVote = function (newVote) {
    setVotes((...prevVotes) => {
      prevVotes.forEach((song) => {
        if (song === newVote) {
          song++;
        }
      });
    });
  };
  return (
    <div className="App text-center">
      {/* <Introduction /> */}
      <OptionsForm onCastVote={addVote} />
      {/* <Thanks /> */}
      {/* <Dj items={votes} /> */}
    </div>
  );
}

export default App;
