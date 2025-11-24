//Form left side
import "./form.css";
import Personal from "../personal/personal";
import Education from "../education/education";
function FormCreation({
  personalInfo,
  setpersonalInfo,
  educationInfo,
  setEducaitonInfo,
}) {
  return (
    <div className="LeftSide">
      <Personal
        personalInfo={personalInfo}
        setpersonalInfo={setpersonalInfo}
      ></Personal>
      <Education
        educationInfo={educationInfo}
        setEducaitonInfo={setEducaitonInfo}
      ></Education>
      <div>blank 3</div>
      <div>blank 4</div>
    </div>
  );
}

export default FormCreation;
