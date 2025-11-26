//skills section
import { useState } from "react";
import "./skills.css"
import { v4 as uuidv4 } from "uuid";
function Skills({ setskillsInfo, skillsInfo }) {
let[status,setstatus]=useState(false)
  function handleChange(value,index,type){
    let clone=[...skillsInfo]
    clone[index] = { ...clone[index], [type]: value };

    setskillsInfo(clone)
  }
  function Remove(index){
    let clone =[...skillsInfo]
    clone.splice(index,1)
    setskillsInfo(clone)
  }
function Add(){
  let clone=[...skillsInfo]
  clone.push({      name: "",
      id: uuidv4()})
          setskillsInfo(clone)

}
function toggleClosed(){
  let clone=!status
  setstatus(clone)
}
  return (
    <div className="skillsSection"> 
      <div onClick={toggleClosed}>Skills Section {status ? "►" : "▼"}</div>
          <div  className={`skills ${status ?"open":""}`}> 
      {skillsInfo.map((value, index) => (
        <div>
          <input className="skillInput"
          placeholder="Skill"
          value={value.name}
          onChange={(e)=>{handleChange(e.target.value,index,"name")}}
          ></input>
          <button  className ="remove" onClick={()=>{Remove(index)}}>X</button>

    </div>



))}
    </div>

<button className="add" onClick={Add}>Add Skill</button>
    </div>
  );
}

export default Skills;
