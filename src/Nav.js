import React from 'react'
import { Outlet, NavLink, Link} from "react-router-dom";
import { Rss, SunMoon, Presentation   } from 'lucide-react';

function Nav() {
  return (
    <>
    <nav className='text-xl'>
        <div>
        <NavLink className={'header nav-item text-4xl'} to="/">Farbod.eu</NavLink>
        </div>
        <div className='items flex'>
        <NavLink className={'nav-item'} to="/">    <Presentation />
        </NavLink>
        <NavLink className={'nav-item'} to="/">
        <Rss />
        </NavLink>
        <button className='nav-item'>
        <SunMoon />
        </button>
        </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Nav