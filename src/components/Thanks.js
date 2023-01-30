import "../App.css";
import LeafBox from "../UI/LeafBox";

const Thanks = function () {
  return (
    <div id="thanks-page">
      <div className="box" id="thanks-box">
        <h1>תודה!</h1>
        <p>הדיג'יי קיבל את ההצבעה שלך</p>
      </div>
      <LeafBox />
    </div>
  );
};

export default Thanks;
