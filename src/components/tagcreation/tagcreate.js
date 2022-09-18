import { useEffect, useState } from "react";
import SaveToLocalStorage from "../savetolocalstorage/savetolocalstorage";
import Accordion from "../accordion/accordion";

const TagCreate = (props) => {
  const [value, setValue] = SaveToLocalStorage(
    props.students.id,
    props.students.tags
  );
  const [isActive, setIsActive] = useState(
    value.join("").includes(props.filter)
  );
  useEffect(() => {
    setIsActive(value.join("").includes(props.filter));
  }, [props.filter]);

  const createTag = (tag) => {
    const tagObject = [];
    for (let i = 0; i < tag.length; i++) {
      tagObject.push(
        <p key={props.students.email + i} className="tags">
          {tag[i]}
        </p>
      );
    }
    return tagObject;
  };

  const [tagValue, setTagValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && tagValue !== "") {
      setValue(value.concat(tagValue));
      setTagValue("");
    }
  };

  const handleTagInputChange = (event) => {
    setTagValue(event.target.value);
  };

  return (
    <div>
      {isActive && (
        <div key={props.students.id} className="list">
          <li key={props.students.id}>
            <div>
              <Accordion students={props.students} />
            </div>
          </li>
          <div className="create-tags">
            <input
              className={"search-display-tag"}
              type="text"
              value={tagValue}
              placeholder="Add a tag"
              onKeyDown={handleKeyDown}
              onChange={handleTagInputChange}
            />
            <hr className="tag-hr" />
            <div className="tag-list row">{createTag(value)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TagCreate;
