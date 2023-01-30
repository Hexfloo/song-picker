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
  const [activeComponent, setActiveComponent] = useState("Introduction");
  const [votes, setVotes] = useState(INITIAL_VOTES);
  const [didVote, setDidVote] = useState(localStorage["ifVoted"]);

  const changeActivePage = function (active) {
    setActiveComponent(active);
  };

  const addVote = function (newVote) {
    const newVotesObj = votes.map((song) => {
      if (song.id === newVote) {
        song.votes++;
      }
    });
    setVotes(newVotesObj);
    setDidVote(true);
    console.log("set did vote to true and add localStorage - ENABLE FEATURE!");
    localStorage.setItem("ifVoted", "true");
  };
  return (
    <div className="App text-center">
      {activeComponent === "Introduction" && !didVote && (
        <Introduction changeActive={changeActivePage} />
      )}
      {activeComponent === "OptionsForm" && !didVote && (
        <OptionsForm onCastVote={addVote} changeActive={changeActivePage} />
      )}
      {(activeComponent === "Thanks" || didVote) && <Thanks />}
      {/* <Dj items={votes} /> */}
    </div>
  );
}

export default App;
