//personal information

import "./personal.css"
import InputDiv from "../textbox/textbox";
function Personal({ personalInfo, setpersonalInfo }) {
  function toggleClosed(){
    let clone={...personalInfo}
    clone.closed=!clone.closed
    setpersonalInfo(clone)
  }
  return (
    <div className="personal">
      <div onClick={toggleClosed}>Personal Section {personalInfo.closed ? "►" : "▼"}</div>
      <div   className={`personalSection ${personalInfo.closed ?"open":""}`}>
         <InputDiv
        info="Name"
        value={personalInfo.name}
        onChange={(val) => setpersonalInfo({ ...personalInfo, name: val })}
      ></InputDiv>
      <InputDiv
        info="Email"
        value={personalInfo.email}
        onChange={(val) => setpersonalInfo({ ...personalInfo, email: val })}
      ></InputDiv>
      <InputDiv
        info="Phone Number"
        value={personalInfo.phone}
        onChange={(val) => setpersonalInfo({ ...personalInfo, phone: val })}
      ></InputDiv>
      <InputDiv
        info="Address"
        value={personalInfo.address}
        onChange={(val) => setpersonalInfo({ ...personalInfo, address: val })}
      ></InputDiv>
      </div>
 
      </div>

      
  
  );
}

export default Personal;
