//personal information
import InputDiv from "../textbox/textbox";
function Personal({ personalInfo, setpersonalInfo }) {
  return (
    <div>
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
  );
}

export default Personal;
