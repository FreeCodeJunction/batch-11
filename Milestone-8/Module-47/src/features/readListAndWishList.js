import { useEffect, useState } from "react";

export default function useListFeature(key) {
  const [myState, setMyState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || [];
  });
  console.log(key + " hook created", myState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(myState));
  }, [myState]);

  const addInTheState = (id) => {
    if (myState.includes(id)) {
      console.log(id + " is Already in the " + key);
      return;
    }
    setMyState((state) => [...state, id]);
  };

  const removeFromTheState = (id) => {
    if (!myState.includes(id)) {
      console.log("It's not in the list");
      return;
    }
    setMyState((state) => [...state.filter((myId) => myId !== id)]);
  };

  return [myState, addInTheState, removeFromTheState];
}
