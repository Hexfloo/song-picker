import "../App.css";
const Dj = function (props) {
  return (
    <>
      <div className="container my-4 box">
        <h1>Voting Results</h1>
        <br />

        <h5>Sunshine of my life: {props.items[0].votes}</h5>

        <h5>{props.items[1].votes} :שלמים</h5>

        <h5>The one that I want: {props.items[2].votes}</h5>

        <a href="/">
          <button className="btn submit-btn-on shadow-none">Home</button>
        </a>
      </div>
      <div className="m-0 leaf-box">
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
