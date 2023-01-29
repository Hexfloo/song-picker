import "../App.css";
/* import FormItem from "./FormItem"; */
import { useState, Fragment } from "react";

const OptionsForm = function (props) {
  const [selectedSong, setSelectedSong] = useState("song1");

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

  /*
  if (localStorage.length > 0) {
    if (localStorage.getItem("ifVoted") === "true") {
      console.log("localStorage indicates you already voted, thanks!");
      return;
    }
  }
  */

  const submitHandler = function (event) {
    event.preventDefault();
    localStorage.setItem("ifVoted", "true");
    console.log(selectedSong);
    props.onCastVote(selectedSong);
  };

  const handleChange = function (event) {
    setSelectedSong(event.currentTarget.value);
    console.log(selectedSong);
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

        <form onSubmit={submitHandler} className="needs-validation" noValidate>
          {songs.map((song) => (
            <div key={song.id}>
              <input
                type="radio"
                className="btn-check"
                name="song"
                value={song.identifier}
                autoComplete="off"
                checked={selectedSong === song.identifier}
                onChange={(event) => {
                  setSelectedSong(event.target.value);
                }}
              />
              <label
                className="btn radio-button shadow-none"
                htmlFor={song.identifier}
              >
                <img src={song.image} alt="artist" className="my-0" />
                <p className="my-0 text-muted">{song.description}</p>
                <h5 className="my-0">{song.title}</h5>
                <p className="my-0">{song.artist}</p>
              </label>
            </div>
          ))}
          <button type="submit" className="btn submit-btn-on">
            לשלוח לדיג'יי
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default OptionsForm;
