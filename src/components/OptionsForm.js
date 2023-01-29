const OptionsForm = function () {
  return (
    <div id="song-picker-page">
      <h2>
        עזרו לנו לבחור <br /> את שיר החופה
      </h2>
      <hr />
      <p>
        בחרו שיר מתוך הרשימה
        <br /> ולחצו לשלוח לדיגיי
      </p>

      <form
        action="/thanks"
        method="POST"
        className="needs-validation"
        novalidate
      >
        <input
          type="radio"
          className="btn-check"
          name="song"
          id="song1"
          value="song1"
          autocomplete="off"
          onclick="enableSubmit()"
        />
        <label className="btn radio-button shadow-none" for="song1">
          <img
            src={
              "https://res.cloudinary.com/hexfloo/image/upload/v1651402676/morandstav/%D7%A1%D7%98%D7%99%D7%91%D7%99_%D7%95%D7%95%D7%A0%D7%93%D7%A8_nnbb8e.png"
            }
            alt="song-1-image"
            className="my-0"
          />
          <p className="my-0 text-muted">סלואו קליל</p>
          <h5 className="my-0">Sunshine of my life</h5>
          <p className="my-0">סטיבי וונדר</p>
        </label>
        <br />
        <input
          type="radio"
          className="btn-check"
          name="song"
          id="song2"
          value="song2"
          autocomplete="off"
          onclick="enableSubmit()"
        />
        <label className="btn radio-button shadow-none" for="song2">
          <img
            src="https://res.cloudinary.com/hexfloo/image/upload/v1651402679/morandstav/%D7%A9%D7%9C%D7%9E%D7%99%D7%9D_%D7%A2%D7%99%D7%93%D7%9F_%D7%97%D7%91%D7%99%D7%91_agnzlz.png"
            alt="song-1-image"
            className="my-0"
          />
          <p className="my-0 text-muted">סלואו מרגש</p>
          <h5 className="my-0">שלמים</h5>
          <p className="my-0">עידן רפאל חביב</p>
        </label>
        <br />
        <input
          type="radio"
          className="btn-check"
          name="song"
          id="song3"
          value="song3"
          autocomplete="off"
          onclick="enableSubmit()"
        />
        <label className="btn radio-button shadow-none" for="song3">
          <img
            src="https://res.cloudinary.com/hexfloo/image/upload/v1651402680/morandstav/%D7%92%D7%A8%D7%99%D7%962_d7aobp.png"
            alt="song-1-image"
            className="my-0"
          />
          <p className="my-0 text-muted">סלואו נוסטלגי</p>
          <h5 className="my-0">The one that I want</h5>
          <p className="my-0">גריז - קאבר אקוסטי</p>
        </label>
        <br />
        <button className="btn submit-btn-on" onclick="ifVoted()" disabled>
          לשלוח לדיגיי
        </button>
      </form>
    </div>
  );
};

export default OptionsForm;
