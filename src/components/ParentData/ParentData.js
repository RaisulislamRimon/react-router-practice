import React from "react";
import ChildData from "../ChildData/ChildData";

const ParentData = () => {
  const data = "i am from parentData";
  const handleChildData = (childData) => {
    console.log(childData);
  };
  return (
    <div>
      <h1>ParentData</h1>
      <ChildData data={data} onChildData={handleChildData} />
    </div>
  );
};

export default ParentData;
