import { useState } from "react";
import "./App.css";
import OptionsForm from "./components/OptionsForm";
import Introduction from "./components/Introduction";
import Thanks from "./components/Thanks";
import Dj from "./components/Dj";

const INITIAL_VOTES = [{ song1: 1 }, { song2: 1 }, { song3: 1 }];

function App() {
  const [votes, setVotes] = useState(INITIAL_VOTES);
  const [didVote, setDidVote] = useState(false);

  const addVote = function (newVote) {
    setVotes();

    //setDidVote(true); ADD IT BACK WHEN FINISHED!!!!!@#$%^&*(*&^%$#@)
    console.log("set did vote to true and add localStorage");
    console.log(votes);
    localStorage.setItem("ifVoted", "true");
  };
  return (
    <div className="App text-center">
      {/* <Introduction /> */}
      {didVote ? <Thanks /> : <OptionsForm onCastVote={addVote} />}
      {/* <Dj items={votes} /> */}
    </div>
  );
}

export default App;
