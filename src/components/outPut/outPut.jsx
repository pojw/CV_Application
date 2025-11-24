//right output side

function OutPutDisplay({ personalInfo }) {
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
    </div>
  );
}

export default OutPutDisplay;
