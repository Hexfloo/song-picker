import "../App.css";
const FormItem = function (props) {
  return (
    <div>
      <input
        type="radio"
        className="btn-check"
        name="song"
        value={props.info.identifier}
        autoComplete="off"
        checked={props.selectedSong === props.info.identifier}
        onChange={props.handleRadioChange}
      />
      <label
        className="btn radio-button shadow-none"
        htmlFor={props.info.identifier}
        onClick={props.handleRadioChange}
      >
        <img src={props.info.image} alt="artist" className="my-0" />
        <p className="my-0 text-muted">{props.info.description}</p>
        <h5 className="my-0">{props.info.title}</h5>
        <p className="my-0">{props.info.artist}</p>
      </label>
    </div>
  );
};

export default FormItem;
