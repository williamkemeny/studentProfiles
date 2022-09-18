import { useEffect, useState } from "react";

function GetSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) {
    return savedValue;
  } else {
    return initialValue;
  }
}

export default function SaveToLocalStorage(key, initialValue) {
  let [value, setValue] = useState(() => {
    return GetSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
