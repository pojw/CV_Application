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
    { id: uuidv4(), school: "", degree: "", start: "", end: "", closed: false },
  ]);

  let [experInfo, setexperInfo] = useState([
    {
      id: uuidv4(),
      company: "",
      position: "",
      start: "",
      end: "",
      location: "",
      description: "",
      closed: false,
    },
  ]);

  let [skillsInfo, setskillsInfo] = useState([
    {
      name: "",
      id: uuidv4(),
    },
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
        //experince info states
        experInfo={experInfo}
        setexperInfo={setexperInfo}
        //skills section
        skillsInfo={skillsInfo}
        setskillsInfo={setskillsInfo}
      ></FormCreation>
      <OutPutDisplay
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        experInfo={experInfo}
        skillsInfo={skillsInfo}

      ></OutPutDisplay>
    </div>
  );
}

export default Page;
