//input section
function InputDiv({ info, value, onChange }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div>
      <div>{info}</div>
      <input
        placeholder={`Enter ` + info}
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default InputDiv;
