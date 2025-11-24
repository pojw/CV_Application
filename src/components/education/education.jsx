//education section
import InputDiv from "../textbox/textbox";
function Education({ educationInfo, setEducaitonInfo }) {
  return (
    <div>
      {educationInfo.map((value, index) => (
        <InputDiv info="School" value={value.school}></InputDiv>
      ))}
    </div>
  );
}
export default Education;
