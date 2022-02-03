  
import React, { useState, createContext} from "react";

export const TeamContext = createContext();




export function TeamProvider(props) {
    const [agent, setAgent] = useState(0)
  return (
    <TeamContext.Provider value={[agent, setAgent]}>
      {props.children}
    </TeamContext.Provider>
  );
}