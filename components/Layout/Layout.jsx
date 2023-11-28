import React from 'react'
import TopNavigation from '../TopHeader/TopNavigation'

const Layout = ({children}) => {
  return (
    <>
        <TopNavigation/>
       {children}
    </>
  )
}

export default Layout
