import "../App.css";

const Thanks = function () {
  return (
    <div id="thanks-page">
      <div className="box" id="thanks-box">
        <h1>תודה!</h1>
        <p>הדיג'יי קיבל את ההצבעה שלך</p>
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
    </div>
  );
};

export default Thanks;
