import { useState } from "react";
import "./App.css";
import OptionsForm from "./components/OptionsForm";
import Introduction from "./components/Introduction";
import Thanks from "./components/Thanks";
import Dj from "./components/Dj";

const INITIAL_VOTES = [
  { id: "song1", votes: 1 },
  { id: "song2", votes: 1 },
  { id: "song3", votes: 1 },
];

function App() {
  const [votes, setVotes] = useState(INITIAL_VOTES);
  const [didVote, setDidVote] = useState(false);

  const addVote = function (newVote) {
    const newVotesObj = votes.map((song) => {
      if (song.id === newVote) {
        song.votes++;
      }
    });
    setVotes(newVotesObj);
    setDidVote(true);
    //setDidVote(true); ADD IT BACK WHEN FINISHED!!!!!@#$%^&*(*&^%$#@)
    console.log("set did vote to true and add localStorage");
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
