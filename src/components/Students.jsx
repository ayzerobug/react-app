import React from "react";

const studentNames = ["Ayomide", "Temi", "Seun", "Bola", "Jasper", "Oyekunle"];

const Students = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <ul>
        {studentNames.map((studentName) => (
          <li>{studentName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
