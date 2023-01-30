import "../App.css";
import LeafBox from "../UI/LeafBox";

const Introduction = function (props) {
  const goToVotingHandler = function () {
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
          <a onClick={goToVotingHandler}>
            <button className="btn submit-btn-on shadow-none">להצבעה</button>
          </a>
        </p>
      </div>
      <LeafBox />
    </>
  );
};

export default Introduction;
