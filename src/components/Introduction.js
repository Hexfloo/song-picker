import "../App.css";

const Introduction = function () {
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
          <a href="/songpicker">
            <button className="btn submit-btn-on shadow-none">להצבעה</button>
          </a>
        </p>
      </div>
      <div className="leaf-box">
        <img
          src="https://res.cloudinary.com/hexfloo/image/upload/v1650201485/morandstav/leaf_ccso8c.png"
          alt="leaf"
          height="80px"
          width="auto"
        />
        <img
          src="https://res.cloudinary.com/hexfloo/image/upload/v1650201485/morandstav/Mor_and_Stav_whbk5y.png"
          alt="leaf"
          height="60px"
          width="auto"
        />
      </div>
    </>
  );
};

export default Introduction;