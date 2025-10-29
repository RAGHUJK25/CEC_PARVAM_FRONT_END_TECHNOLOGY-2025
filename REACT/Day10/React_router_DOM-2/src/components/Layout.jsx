import React from 'react'
import SiteNavbar from "./SiteNavbar"
import { Outlet } from "React_router_DOM-2"
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
        <SiteNavbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout