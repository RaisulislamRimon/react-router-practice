import React from "react";

const ChildData = (props) => {
  const data = "this is data from childData";
  props.onChildData(data);
  return (
    <div>
      <h1>ChildData</h1>
      <p>{props.data}</p>
      {/* <p>{props.onChildData()}</p> */}
    </div>
  );
};

export default ChildData;
