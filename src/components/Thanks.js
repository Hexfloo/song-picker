import "../App.css";
import LeafBox from "../UI/LeafBox";

const Thanks = function (props) {
  const goToDjHandler = function () {
    props.changeActive("Dj");
  };
  return (
    <div id="thanks-page">
      <div className="box" id="thanks-box">
        <h1>תודה!</h1>
        <p>הדיג'יי קיבל את ההצבעה שלך</p>
        <button
          className="btn submit-btn-on shadow-none"
          onClick={goToDjHandler}
        >
          לתוצאות
        </button>
      </div>
      <LeafBox />
    </div>
  );
};

export default Thanks;
