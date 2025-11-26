//right output side
import "./outPut.css"
function OutPutDisplay({ personalInfo,        skillsInfo
, educationInfo, experInfo }) {
  return (
    <div className="rightSide">
      <div className="personalOut"> 
         <div className="NameOut">
        <div>{personalInfo.name}</div>
      </div>
      <div className="infoOut">
           
        <div>{personalInfo.email}</div>
                <div>{personalInfo.phone}</div>
                        <div>{personalInfo.address}</div>


      
   </div>
      </div>
      
    <div>
      <div className="header">Education Section</div>
    {educationInfo.map((value) => (
        <div className="educationOut" key={value.id}>
          <div>
            <div className="heavy">{value.school}</div>
            <div>{value.degree}</div>

          </div>

          <div>
            <div>{value.start}-{value.end}</div>
          </div>
    
        </div>
      ))}
    </div>
        <div className="header"> Experince Section</div>

      {experInfo.map((value) => (
        <div className="educationOut" key={value.id}>  
        <div className="job"> 
            <div>{value.start} </div>
              
           <div>{ value.end}</div>

    

        </div>

          <div className="job">
                        <div className="heavy">{value.company}</div>

            <div className="heavy">{value.position}</div>
                        <div>{value.description}</div>

          
        </div>
        </div>
      ))}
      <div className="header">Skills</div>
      <div className="skillOut">
 {skillsInfo.map((value)=>(
        <div>
         { value.name}
        </div>
      ))}
      </div>
     
    </div>
  );
}

export default OutPutDisplay;
