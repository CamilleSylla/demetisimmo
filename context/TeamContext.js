  
import React, { useState, createContext} from "react";

export const TeamContext = createContext();




export function TeamProvider(props) {
    const [active, setActive] = useState(0)
  return (
    <TeamContext.Provider value={[active, setActive]}>
      {props.children}
    </TeamContext.Provider>
  );
}