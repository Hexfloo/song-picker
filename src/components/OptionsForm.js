import "../App.css";
import FormItem from "./FormItem";
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

        <div>
          {songs.map((song) => (
            <FormItem
              info={song}
              selectedSong={selectedSong}
              handleRadioChange={handleRadioChange}
            />
          ))}
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
