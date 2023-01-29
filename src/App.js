import { useState } from "react";
import "./App.css";
import Introduction from "./components/Introduction";
import OptionsForm from "./components/OptionsForm";
import Thanks from "./components/Thanks";
import Dj from "./components/Dj";

function App() {
  const [isForm, setIsForm] = useState(false);
  return (
    <div className="App text-center">
      {/* <Introduction /> */}
      <OptionsForm />
      {/* <Thanks /> */}
      {/* <Dj /> */}
    </div>
  );
}

export default App;
