//right output side

function OutPutDisplay({ personalInfo,        skillsInfo
, educationInfo, experInfo }) {
  return (
    <div>
      <div>
        <div>Name</div>
        <div>{personalInfo.name}</div>
      </div>
      <div>
        <div>email</div>
        <div>{personalInfo.email}</div>
      </div>
      <div>
        <div>Phone Number</div>
        <div>{personalInfo.phone}</div>
      </div>
      <div>
        <div>Address</div>
        <div>{personalInfo.address}</div>
      </div>

      {educationInfo.map((value) => (
        <div key={value.id}>
          <div>
            <div>School</div>
            <div>{value.school}</div>
          </div>
          <div>
            <div>Degree</div>
            <div>{value.degree}</div>
          </div>
          <div>
            <div>Start Date</div>
            <div>{value.start}</div>
          </div>
          <div>
            <div>End Date</div>
            <div>{value.end}</div>
          </div>
        </div>
      ))}
      {experInfo.map((value) => (
        <div>
          <div>
            <div>Position</div>
            <div>{value.position}</div>
          </div>
          <div>
            <div>Company</div>
            <div>{value.company}</div>
          </div>
          <div>
            <div>Start</div>
            <div>{value.start}</div>
          </div>
          <div>
            <div>End</div>
            <div>{value.end}</div>
          </div>
          <div>
            <div>Description</div>
            <div>{value.description}</div>
          </div>
        </div>
      ))}
      <div>Skills</div>
      {skillsInfo.map((value)=>(
        <div>
         { value.name}
        </div>
      ))}
    </div>
  );
}

export default OutPutDisplay;
