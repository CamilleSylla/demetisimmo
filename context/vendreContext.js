import React, { useState, createContext} from "react";

export const VendreContext = createContext();




export function VendreProvider(props) {
    const [open, setOpen] = useState(false)
  return (
    <VendreContext.Provider value={[open, setOpen]}>
      {props.children}
    </VendreContext.Provider>
  );
}