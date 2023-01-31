import "../App.css";
import LeafBox from "../UI/LeafBox";

const Introduction = function (props) {
  const goToVotingHandler = function () {
    if (props.didVote === true) {
      props.changeActive("Thanks");
      return;
    }
    props.changeActive("OptionsForm");
  };

  return (
    <>
      <div className="box">
        <h2>
          עזרו לנו לבחור <br /> את שיר החופה
        </h2>
        <hr className="mt-3" />
        <p className="mt-3 mb-0">
          בעמוד הבא יופיעו שלושה שירים
          <br />
          בחרו את השיר האהוב עליכם והצביעו
          <br />
          <br />
          השיר שיזכה במירב הקולות יהיה
          <br />
          <b>שיר החופה שלנו.</b>
          <br />
          <button className="btn submit-btn-on" onClick={goToVotingHandler}>
            להצבעה
          </button>
        </p>
      </div>
      <LeafBox />
    </>
  );
};

export default Introduction;
