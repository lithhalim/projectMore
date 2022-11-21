import React, { useState } from "react";



//use to create the context 
export const PageSelect_Context=React.createContext(null);


export function PageSelect_Provider(props) {

const [showCreatItem,setshowCreatItem]=useState(false);


  return (
    <PageSelect_Context.Provider value={{showCreatItem,setshowCreatItem}}>
        {props.children}
    </PageSelect_Context.Provider>
  ) 
}
