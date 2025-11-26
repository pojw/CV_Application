//education section

import "./education.css";
import { v4 as uuidv4 } from "uuid";
import InputDiv from "../textbox/textbox";
function Education({ educationInfo, setEducaitonInfo }) {
  function NewEducation() {
    let clone = [...educationInfo];
    clone.push({
      id: uuidv4(),
      school: "",
      degree: "",
      start: "",
      end: "",
      closed: false,
    });
    setEducaitonInfo(clone);
  }
  function remove(index) {
    let clone = [...educationInfo];
    clone.splice(index, 1);
    setEducaitonInfo(clone);
  }

  function toggleClosed(index) {
    let clone = [...educationInfo];
    clone[index].closed = !clone[index].closed;
    setEducaitonInfo(clone);
  }
  return (
    <div className="educationSection"> Education Section
      {educationInfo.map((value, index) => (
        <div key={value.id}>
          <div
            onClick={() => {
              toggleClosed(index);
            }}
          >
            {" "}
            {value.school || "Untitiled School"}
            {value.closed ? "►" : "▼"}
          </div>
          <div className={`education ${value.closed ? "open" : ""}`}>
            <InputDiv
              info="School"
              value={value.school}
              onChange={(val) => {
                let clone = [...educationInfo];
                clone[index] = { ...clone[index], school: val };

                setEducaitonInfo(clone);
              }}
            ></InputDiv>
            <InputDiv
              info="Degree"
              value={value.degree}
              onChange={(val) => {
                let clone = [...educationInfo];
                clone[index] = { ...clone[index], degree: val };

                setEducaitonInfo(clone);
              }}
            ></InputDiv>
            <InputDiv
              info="Start Date"
              value={value.start}
              onChange={(val) => {
                let clone = [...educationInfo];
                clone[index] = { ...clone[index], start: val };

                setEducaitonInfo(clone);
              }}
            ></InputDiv>
            <InputDiv
              info="End Date"
              value={value.end}
              onChange={(val) => {
                let clone = [...educationInfo];
                clone[index] = { ...clone[index], end: val };

                setEducaitonInfo(clone);
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
      <button className="add" onClick={NewEducation}>Add Education</button>
    </div>
  );
}
export default Education;
