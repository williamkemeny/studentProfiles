import { useState } from "react";
import "./searchbar.css";
import TagCreate from "../tagcreation/tagcreate";
import SaveToLocalStorage from "../savetolocalstorage/savetolocalstorage";

const SearchBar = (props) => {
  const students = props.students;
  const [searchValue, setSearchValue] = useState("");
  const [searchTagValue, setSearchTagValue] = useState("");

  for (let i = 0; i < students.length; i++) {
    students[i]["fullName"] = students[i].firstName + students[i].lastName;
    students[i]["tags"] = [];
    SaveToLocalStorage(students[i].id, students[i].tags);
  }

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleTagInputChange = (event) => {
    setSearchTagValue(event.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
    setSearchTagValue("");
  };
  const filteredStudents = students.filter((students) => {
    return students.fullName.toLowerCase().includes(searchValue.toLowerCase());
  });
  const shouldDisplay = searchValue.length > 0;

  return (
    <div>
      <input
        className={"search-display"}
        type="text"
        value={searchValue}
        placeholder="Search By Name"
        onChange={handleInputChange}
      />
      <hr />
      <input
        className={"search-display"}
        type="text"
        value={searchTagValue}
        placeholder="Search By Tag"
        onChange={handleTagInputChange}
      />
      <hr />
      {shouldDisplay && (
        <button className={"search-display"} onClick={handleClear}>
          clear
        </button>
      )}
      <ul key={students.email}>
        {filteredStudents.map((students) => {
          return (
            <div key={students.email + students.lastname}>
              <TagCreate students={students} filter={searchTagValue} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
