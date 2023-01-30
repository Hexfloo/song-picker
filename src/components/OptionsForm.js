import "../App.css";
/* import FormItem from "./FormItem"; */
import { useState, Fragment } from "react";

const OptionsForm = function (props) {
  const [selectedSong, setSelectedSong] = useState("");

  const songs = [
    {
      id: 1,
      identifier: "song1",
      image:
        "https://res.cloudinary.com/hexfloo/image/upload/v1651402676/morandstav/%D7%A1%D7%98%D7%99%D7%91%D7%99_%D7%95%D7%95%D7%A0%D7%93%D7%A8_nnbb8e.png",
      description: "סלואו קליל",
      title: "Sunshine of my life",
      artist: "סטיבי וונדר",
    },
    {
      id: 2,
      identifier: "song2",
      image:
        "https://res.cloudinary.com/hexfloo/image/upload/v1651402679/morandstav/%D7%A9%D7%9C%D7%9E%D7%99%D7%9D_%D7%A2%D7%99%D7%93%D7%9F_%D7%97%D7%91%D7%99%D7%91_agnzlz.png",
      description: "סלואו מרגש",
      title: "שלמים",
      artist: "עידן רפאל חביב",
    },
    {
      id: 3,
      identifier: "song3",
      image:
        "https://res.cloudinary.com/hexfloo/image/upload/v1651402680/morandstav/%D7%92%D7%A8%D7%99%D7%962_d7aobp.png",
      description: "סלואו נוסטלגי",
      title: "The one that I want",
      artist: "גריז - קאבר אקוסטי",
    },
  ];

  const submitHandler = function () {
    props.onCastVote(selectedSong);
    props.changeActive("Thanks");
  };

  const handleRadioChange = function (event) {
    setSelectedSong(event.target.htmlFor);
  };

  return (
    <Fragment>
      <div id="song-picker-page">
        <h2>
          עזרו לנו לבחור <br /> את שיר החופה
        </h2>
        <hr />
        <p>
          בחרו שיר מתוך הרשימה
          <br />
          ולחצו לשלוח לדיג'יי
        </p>

        <div className="needs-validation" noValidate>
          <input
            type="radio"
            className="btn-check"
            name="song"
            value={songs[0].identifier}
            autoComplete="off"
            checked={selectedSong === songs[0].identifier}
            onChange={handleRadioChange}
          />
          <label
            className="btn radio-button shadow-none"
            htmlFor={songs[0].identifier}
            onClick={handleRadioChange}
          >
            <img src={songs[0].image} alt="artist" className="my-0" />
            <p className="my-0 text-muted">{songs[0].description}</p>
            <h5 className="my-0">{songs[0].title}</h5>
            <p className="my-0">{songs[0].artist}</p>
          </label>

          <div key={songs[1].id}>
            <input
              type="radio"
              className="btn-check"
              name="song"
              value={songs[1].identifier}
              autoComplete="off"
              checked={selectedSong === songs[1].identifier}
              onChange={handleRadioChange}
            />
            <label
              className="btn radio-button shadow-none"
              htmlFor={songs[1].identifier}
              onClick={handleRadioChange}
            >
              <img src={songs[1].image} alt="artist" className="my-0" />
              <p className="my-0 text-muted">{songs[1].description}</p>
              <h5 className="my-0">{songs[1].title}</h5>
              <p className="my-0">{songs[1].artist}</p>
            </label>
          </div>

          <div key={songs[2].id}>
            <input
              type="radio"
              className="btn-check"
              name="song"
              value={songs[2].identifier}
              autoComplete="off"
              checked={selectedSong === songs[2].identifier}
              onChange={handleRadioChange}
            />
            <label
              className="btn radio-button shadow-none"
              htmlFor={songs[2].identifier}
              onClick={handleRadioChange}
            >
              <img src={songs[2].image} alt="artist" className="my-0" />
              <p className="my-0 text-muted">{songs[2].description}</p>
              <h5 className="my-0">{songs[2].title}</h5>
              <p className="my-0">{songs[2].artist}</p>
            </label>
          </div>

          <button
            type="submit"
            className="btn submit-btn-on"
            onClick={submitHandler}
            disabled={selectedSong === ""}
          >
            לשלוח לדיג'יי
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default OptionsForm;
