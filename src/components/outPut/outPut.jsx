//right output side

function OutPutDisplay({ personalInfo }) {
  return (
    <div>
      <div>{personalInfo.name}</div>
      <div>{personalInfo.email}</div>
    </div>
  );
}

export default OutPutDisplay;
