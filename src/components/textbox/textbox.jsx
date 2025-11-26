//input section
function InputDiv({ info, value, onChange }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className="outer">
      <div>{info}</div>
      <input className="InputDiv"
        placeholder={`Enter ` + info}
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default InputDiv;
