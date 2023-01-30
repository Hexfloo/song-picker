import { useEffect, useState } from "react";
import "./App.css";
import OptionsForm from "./components/OptionsForm";
import Introduction from "./components/Introduction";
import Thanks from "./components/Thanks";
import Dj from "./components/Dj";

const INITIAL_VOTES = [
  { id: "song1", vote: 1 },
  { id: "song2", vote: 1 },
  { id: "song3", vote: 1 },
];

function App() {
  const [activeComponent, setActiveComponent] = useState("Introduction");
  const [votes, setVotes] = useState(INITIAL_VOTES);
  const [didVote, setDidVote] = useState(localStorage["ifVoted"]);

  const changeActivePage = function (active) {
    setActiveComponent(active);
  };
  useEffect(() => console.log(votes), [votes]);

  const addVote = function (newVote) {
    const newVotesObj = votes.map((song) => {
      if (song.id === newVote) {
        return { id: song.id, vote: (song.vote += 1) };
      }
      return song;
    });
    setVotes(newVotesObj);
    setDidVote(true);
    console.log("set did vote to true and add localStorage - ENABLE FEATURE!");
    localStorage.setItem("ifVoted", "true");
  };
  return (
    <div className="App text-center">
      {activeComponent === "Introduction" && (
        <Introduction changeActive={changeActivePage} />
      )}
      {activeComponent === "OptionsForm" && (
        <OptionsForm onCastVote={addVote} changeActive={changeActivePage} />
      )}
      {activeComponent === "Thanks" && (
        <Thanks changeActive={changeActivePage} />
      )}
      {activeComponent === "Dj" && (
        <Dj items={votes} changeActive={changeActivePage} />
      )}
    </div>
  );
}

export default App;
