//experince seciton
import"./exper.css"
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
    <div className="experSection">
      <div >Experince Section</div>
      {experInfo.map((value, index) => (
        <div key={value.id}>
          <div
            onClick={() => {
              toggleClosed(index);
            }}
          >
            {value.position || "Untitiled Position"} {value.closed ? "►" : "▼"}
          </div>
          <div className={`exper ${value.closed ? "open" : ""}`}>
            <InputDiv
              info="Position"
              value={value.position}
              onChange={(val) => {
                handleChange(val, index, "position");
              }}
            ></InputDiv>
            <InputDiv
              info="Company"
              value={value.company}
              onChange={(val) => {
                handleChange(val, index, "company");
              }}
            ></InputDiv>
            <InputDiv
              info="Start"
              value={value.start}
              onChange={(val) => {
                handleChange(val, index, "start");
              }}
            ></InputDiv>
            <InputDiv
              info="End"
              value={value.end}
              onChange={(val) => {
                handleChange(val, index, "end");
              }}
            ></InputDiv>
       
            <InputDiv
              info="Description"
              value={value.description}
              onChange={(val) => {
                handleChange(val, index, "description");
              }}
            ></InputDiv>
            <button
            className="remove"
              onClick={() => {
                remove(index);
              }}
            >
              X
            </button>
          </div>
        </div>
      ))}
      <button
      className="add"
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
