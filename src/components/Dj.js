import "../App.css";
import LeafBox from "../UI/LeafBox";

const Dj = function (props) {
  const goToIntroductionHandler = function () {
    props.changeActive("Introduction");
  };
  console.log(props.items);
  return (
    <>
      <div className="container my-4 box">
        <h1>Voting Results</h1>
        <br />

        <h5>Sunshine of my life: {props.items[0].vote}</h5>

        <h5>{props.items[1].vote} :שלמים</h5>

        <h5>The one that I want: {props.items[2].vote}</h5>

        <button
          className="btn submit-btn-on shadow-none"
          onClick={goToIntroductionHandler}
        >
          Home
        </button>
      </div>
      <LeafBox />
    </>
  );
};

export default Dj;
