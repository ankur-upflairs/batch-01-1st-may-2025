import React, { createContext, useState } from "react";
import ComA from "./ComA";
export const userContext = createContext(null);

/* export createcontext -> value -> provider
-> usecontext */


function Context() {
  const [user, setUser] = useState({ name: "sunil" });

  return (
    <userContext.Provider value={user} >
      <div>
        <ComA />
      </div>
    </userContext.Provider>
  );
}


export default Context;
