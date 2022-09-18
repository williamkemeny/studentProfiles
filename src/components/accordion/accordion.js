import React, { useState } from "react";

const Accordion = (props) => {
  const createGrades = (grades) => {
    const gradeObject = [];
    for (let i = 0; i < grades.length; i++) {
      gradeObject.push(
        <p key={props.students.grades + i}>
          Test {i + 1}: {grades[i]}%
        </p>
      );
    }
    return gradeObject;
  };

  function average(grades) {
    let sum = 0;
    let length = grades.length;
    for (let i = 0; i < length; i++) {
      sum += parseInt(grades[i]);
    }
    return sum / length;
  }

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="studentInfo">
        <div className="row">
          <img
            className="image"
            src={props.students.pic}
            alt={props.students.firstName}
          />
          <div>
            <p className="Name">
              {props.students.firstName.toUpperCase()}{" "}
              {props.students.lastName.toUpperCase()}
            </p>
            <p>Email: {props.students.email}</p>
            <p>Company: {props.students.company}</p>
            <p>Skill: {props.students.skill}</p>
            <p>Average: {average(props.students.grades)}%</p>
          </div>
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div className="plusMinus">{isActive ? "-" : "+"}</div>
          </div>
        </div>
      </div>
      {isActive && (
        <div className="accordion-content">
          {createGrades(props.students.grades)}
        </div>
      )}
    </div>
  );
};

export default Accordion;
