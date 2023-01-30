import { useState } from "react";
import "./App.css";
import OptionsForm from "./components/OptionsForm";
import Introduction from "./components/Introduction";
import Thanks from "./components/Thanks";
import Results from "./components/Results";

const INITIAL_VOTES = [
  { id: "song1", vote: 1 },
  { id: "song2", vote: 1 },
  { id: "song3", vote: 1 },
];

function App() {
  const [activeComponent, setActiveComponent] = useState("Introduction");
  const [votes, setVotes] = useState(INITIAL_VOTES);
  const [didVote, setDidVote] = useState(false);

  const changeActivePage = function (active) {
    setActiveComponent(active);
  };

  const addVote = function (newVote) {
    const newVotesObj = votes.map((song) => {
      if (song.id === newVote) {
        return { id: song.id, vote: (song.vote += 1) };
      }
      return song;
    });
    setVotes(newVotesObj);
    setDidVote(true);
    localStorage.setItem("ifVoted", "true");
  };
  return (
    <div className="App text-center">
      {activeComponent === "Introduction" && (
        <Introduction changeActive={changeActivePage} didVote={didVote} />
      )}
      {activeComponent === "OptionsForm" && (
        <OptionsForm onCastVote={addVote} changeActive={changeActivePage} />
      )}
      {activeComponent === "Thanks" && !(activeComponent === "Results") && (
        <Thanks changeActive={changeActivePage} />
      )}
      {activeComponent === "Results" && (
        <Results items={votes} changeActive={changeActivePage} />
      )}
    </div>
  );
}

export default App;
