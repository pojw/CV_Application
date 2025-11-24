//Form left side
import "./form.css";
import Personal from "../personal/personal";
function FormCreation({ personalInfo, setpersonalInfo }) {
  return (
    <div className="LeftSide">
      <Personal
        personalInfo={personalInfo}
        setpersonalInfo={setpersonalInfo}
      ></Personal>
      <div>blank 2</div>
      <div>blank 3</div>
      <div>blank 4</div>
    </div>
  );
}

export default FormCreation;
