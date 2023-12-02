"use client";
import { createContext, useEffect, useState } from "react";

export const ApplictaionContext=createContext();

export const ApplictaionContextProvider=({children})=>{
    const [openSideBar,setOpenSideBar]=useState(false);
    const [darkMode, setDarkMode] = useState(typeof window!=="undefined" && localStorage.getItem("darkMode") || false);


    const toggleDarkmode=()=>{
        setDarkMode(!darkMode);
    }
    // OpenSidebar
    const handleOpenSidebar=(event)=>{
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setOpenSideBar(!openSideBar);
    }

    // Pass all object
    const objectContext={
        openSideBar,
        handleOpenSidebar,
        toggleDarkmode,
        darkMode
    }

     // Dependency of Darkmode
    //  useEffect(()=>{
    //     localStorage.setItem("darkMode",darkMode)
    // },[darkMode])

    return(
        <ApplictaionContext.Provider value={objectContext}>
           {children}
            </ApplictaionContext.Provider>
    )

}