//Main layout
import "./page.css";
import FormCreation from "../form/form.jsx";
import OutPutDisplay from "../outPut/outPut.jsx";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function Page() {
  let [personalInfo, setpersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  let [educationInfo, setEducaitonInfo] = useState([
    { id: uuidv4(), school: "", degree: "", start: "", end: "" },
  ]);
  return (
    <div className="Container">
      <FormCreation
        //personal info states
        personalInfo={personalInfo}
        setpersonalInfo={setpersonalInfo}
        // education info states

        educationInfo={educationInfo}
        setEducaitonInfo={setEducaitonInfo}
      ></FormCreation>
      <OutPutDisplay personalInfo={personalInfo}></OutPutDisplay>
    </div>
  );
}

export default Page;
