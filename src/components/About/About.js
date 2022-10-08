import React from "react";

const About = () => {
  const data = [
    {
      id: 1,
      name: "Rimon",
    },
    {
      id: 2,
      name: "MD",
    },
    {
      id: 3,
      name: "Raisul",
    },
    {
      id: 4,
      name: "Islam",
    },
    {
      id: 5,
      name: "Rimon",
    },
    {
      id: 6,
      name: "MD Raisul Islam Rimon",
    },
  ];

  return (
    <div>
      <h1>This is about component</h1>
      <h2>Data : {data.length}</h2>
      {/* {data.map((singleData, idx) => (
        <li key={idx}>
          {singleData.id} {singleData.name}
        </li>
      ))} */}
      {data.map((singleData) => (
        <li key={singleData.id}>
          {singleData.id} {singleData.name}
        </li>
      ))}
    </div>
  );
};

export default About;
