//experince seciton
import { v4 as uuidv4 } from "uuid";
import InputDiv from "../textbox/textbox";
function Exper({ experInfo, setexperInfo }) {
  function NewExper() {
    let clone = [...experInfo];
    clone.push({
      id: uuidv4(),
      company: "",
      position: "",
      start: "",
      end: "",
      location: "",
      description: "",
      closed: false,
    });
    setexperInfo(clone);
  }

  function remove(index) {
    let clone = [...experInfo];
    clone.splice(index, 1);
    setexperInfo(clone);
  }

  function toggleClosed(index) {
    let clone = [...experInfo];
    clone[index].closed = !clone[index].closed;
    setexperInfo(clone);
  }
  function handleChange(val, index, tupe) {
    let clone = [...experInfo];
    clone[index] = { ...clone[index], [tupe]: val };
    setexperInfo(clone);
  }
  return (
    <div>
      <div>Experince Section</div>
      {experInfo.map((value, index) => (
        <div key={value.id}>
          <div
            onClick={() => {
              toggleClosed(index);
            }}
          >
            {value.position || "Untitiled Position"} {value.closed ? "►" : "▼"}
          </div>
          <div className={`education ${value.closed ? "open" : ""}`}>
            <InputDiv
              info="position"
              value={value.position}
              onChange={(val) => {
                handleChange(val, index, "position");
              }}
            ></InputDiv>
            <InputDiv
              info="company"
              value={value.company}
              onChange={(val) => {
                handleChange(val, index, "company");
              }}
            ></InputDiv>
            <InputDiv
              info="start"
              value={value.start}
              onChange={(val) => {
                handleChange(val, index, "start");
              }}
            ></InputDiv>
            <InputDiv
              info="end"
              value={value.end}
              onChange={(val) => {
                handleChange(val, index, "end");
              }}
            ></InputDiv>
            <InputDiv
              info="location"
              value={value.location}
              onChange={(val) => {
                handleChange(val, index, "location");
              }}
            ></InputDiv>
            <InputDiv
              info="description"
              value={value.description}
              onChange={(val) => {
                handleChange(val, index, "description");
              }}
            ></InputDiv>
            <button
              onClick={() => {
                remove(index);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={() => {
          NewExper();
        }}
      >
        Add Experinece
      </button>
    </div>
  );
}

export default Exper;
