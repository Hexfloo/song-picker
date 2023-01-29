import "../App.css";
const FormItem = function (props) {
  return (
    <div>
      <input
        type="radio"
        className="btn-check"
        name="song"
        id={props.id}
        value={props.id}
        autocomplete="off"
      />
      <label className="btn radio-button shadow-none" for="song3">
        <img src={props.image} alt="song-image" className="my-0" />
        <p className="my-0 text-muted">{props.description}</p>
        <h5 className="my-0">{props.title}</h5>
        <p className="my-0">{props.artist}</p>
      </label>
    </div>
  );
};

export default FormItem;
