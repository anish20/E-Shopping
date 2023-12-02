const { createContext, useState } = require("react");

export const NavbarContext=createContext();

export const NavbarContextProvider=({children})=>{
    const [openSideBar,setOpenSideBar]=useState(false);
  const handleOpenSidebar=(event)=>{
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setOpenSideBar(!openSideBar);
  }
    return(
        <NavbarContext.Provider value={{openSideBar,handleOpenSidebar}}>{children}</NavbarContext.Provider>
    )
}