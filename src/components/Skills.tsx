import React from "react"
import { skills } from "../images/constant"

 

const Skills = () => {
  return (
    <div className="p-4">
    <h2 className="text-center font-bold text-2xl mb-3">Programming Skills</h2>
    <div className="flex justify-center flex-wrap my-5  gap-2">
      {skills.map((skill, index) => (
        <div key={index} className="px-3 py-1  text-white rounded-md">
          <img src={skill.src} alt={skill.alt} className="w-16 h-16" />
        </div>
      ))}
    </div>
  </div>
  );
};
  
export default Skills