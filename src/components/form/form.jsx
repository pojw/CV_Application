//Form left side
import "./form.css";
import Personal from "../personal/personal";
import Education from "../education/education";
import Exper from "../exper/exper";
import Skills from "../skills/skills";
function FormCreation({
  personalInfo,
  setpersonalInfo,
  educationInfo,
  setEducaitonInfo,
  experInfo,
  setexperInfo,

  skillsInfo,
  setskillsInfo,
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

      <Exper experInfo={experInfo} setexperInfo={setexperInfo}></Exper>

      <Skills setskillsInfo={setskillsInfo} skillsInfo={skillsInfo}></Skills>
    </div>
  );
}

export default FormCreation;
