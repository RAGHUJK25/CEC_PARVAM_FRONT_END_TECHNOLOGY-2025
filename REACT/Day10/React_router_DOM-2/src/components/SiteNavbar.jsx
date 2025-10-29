import React from 'react'
import { NavLink } from "react-router-dom"

const SiteNavbar = () => {
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Careers">Careers</NavLink>
        <NavLink to="/Projects">Projects</NavLink>
        <NavLink to="/Services">Services</NavLink>
    </div>
  );
};

export default SiteNavbar