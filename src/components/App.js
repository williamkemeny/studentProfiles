import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBarComp/searchbar";
import "./App.css";

const App = () => {
  const [studentInfo, setstudentInfo] = useState([]);

  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => res.json())
      .then((data) => {
        const newStudentInfo = data.students.map((x) => {
          return x;
        });
        setstudentInfo(newStudentInfo);
      })
      .catch((e) => console.log(e));
  }, []);

  const hasStudents = studentInfo.length > 0;

  return (
    <div className="App">
      {hasStudents ? (
        <SearchBar students={studentInfo} />
      ) : (
        <h2 className="Loading">Loading</h2>
      )}
    </div>
  );
};

export default App;
