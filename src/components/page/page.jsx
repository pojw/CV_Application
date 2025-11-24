//Main layout
import "./page.css";
import FormCreation from "../form/form.jsx";
import OutPutDisplay from "../outPut/outPut.jsx";
import { useState } from "react";
function Page() {
  let [personalInfo, setpersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  return (
    <div className="Container">
      <FormCreation
        personalInfo={personalInfo}
        setpersonalInfo={setpersonalInfo}
      ></FormCreation>
      <OutPutDisplay personalInfo={personalInfo}></OutPutDisplay>
    </div>
  );
}

export default Page;
