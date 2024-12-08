import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
import { Rss, Sun , Moon, Presentation   } from 'lucide-react';
import { useEffect, useState } from 'react';

function Nav() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

const darkToggle = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  setIsDarkMode(!isDarkMode);
}


  return (
    <>
    <nav className='text-xl'>
        <div>
        <NavLink className={'header nav-item text-4xl dark:text-white'} to="/">Farbod.eu</NavLink>
        </div>
        <div className='items flex'>
        <NavLink className={'nav-item dark:text-white hover:scale-125'} to="/projects">    <Presentation />
        </NavLink>
        <NavLink className={'nav-item dark:text-white hover:scale-125'} to="/posts">
        <Rss />
        </NavLink>
        <button onClick={darkToggle} className='nav-item dark:text-white hover:scale-125'>
          {isDarkMode ? <Sun/> : <Moon/>}
        </button>
        </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Nav