import "../App.css";
const Dj = function (props) {
  return (
    <>
      <div class="container my-4 box">
        <h1>Voting Results</h1>
        <br />

        <h5>Sunshine of my life: {props.items[0].song1}</h5>

        <h5>{props.items[1].song2} :שלמים</h5>

        <h5>The one that I want: {props.items[2].song3}</h5>

        <a href="/">
          <button class="btn submit-btn-on shadow-none">Home</button>
        </a>
      </div>
      <div class="m-0 leaf-box">
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

export default Dj;
