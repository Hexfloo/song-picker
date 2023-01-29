import "../App.css";
import FormItem from "./FormItem";

const OptionsForm = function () {
  const songs = [
    {
      id: "song1",
      image:
        "https://res.cloudinary.com/hexfloo/image/upload/v1651402676/morandstav/%D7%A1%D7%98%D7%99%D7%91%D7%99_%D7%95%D7%95%D7%A0%D7%93%D7%A8_nnbb8e.png",
      description: "סלואו קליל",
      title: "Sunshine of my life",
      artist: "סטיבי וונדר",
    },
    {
      id: "song2",
      image:
        "https://res.cloudinary.com/hexfloo/image/upload/v1651402679/morandstav/%D7%A9%D7%9C%D7%9E%D7%99%D7%9D_%D7%A2%D7%99%D7%93%D7%9F_%D7%97%D7%91%D7%99%D7%91_agnzlz.png",
      description: "סלואו מרגש",
      title: "שלמים",
      artist: "עידן רפאל חביב",
    },
    {
      id: "song3",
      image:
        "https://res.cloudinary.com/hexfloo/image/upload/v1651402680/morandstav/%D7%92%D7%A8%D7%99%D7%962_d7aobp.png",
      description: "סלואו נוסטלגי",
      title: "The one that I want",
      artist: "גריז - קאבר אקוסטי",
    },
  ];

  if (localStorage.length > 0) {
    if (localStorage.getItem("ifVoted") === "true") {
      console.log("localStorage indicates you already voted, thanks!");
    }
  }

  const submitHandler = function () {
    localStorage.setItem("ifVoted", "true");
  };

  return (
    <>
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

        <form onSubmit={submitHandler} className="needs-validation" novalidate>
          {songs.map((song) => (
            <FormItem
              id={song.id}
              image={song.image}
              description={song.description}
              title={song.title}
              artist={song.artist}
            />
          ))}
          <button type="submit" class="btn submit-btn-on">
            לשלוח לדיג'יי
          </button>
        </form>
      </div>
    </>
  );
};

export default OptionsForm;
