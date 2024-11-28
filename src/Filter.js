import React from 'react'
import { useState } from "react";
import './styles.css'
import { Github, Hash  } from 'lucide-react';
import { tagToSvgMap } from './svgs';
// import { motion, AnimatePresence } from 'framer-motion';


function Filter() {

  const RandomId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const projects = [
    {
      key: RandomId(),
      title: 'Deggenhub',
      content: "this is a passion project that tried to connect the lovely people of Deggendorf",
      tags: ['cookiecutter', 'django', 'docker', 'nginx', 'redis', 'javascript', 'postgres', 'git', 'linux', 'html5', 'css', 'bootstrap'],
      github: 'https://github.com/farbod271/Deggenhub',
      demo: 'https://deggenhub.de'
    },
    {
      key: RandomId(),
      title: 'Liebess',
      content: "A demo prject made for a restaurant but its not a production ready project!",
      tags: ['nodejs', 'express', 'mongodb', 'nginx', 'html5', 'css', 'bootstrap'],
      github: 'https://github.com/farbod271/liebess',
      demo: '#'
    },
    {
      key: RandomId(),
      title: 'ERL checker bot',
      content: "A bot that checks availability of ERL apartments. this has no affiliation with ERL",
      tags: ['telegram', 'linux', 'git'],
      github: 'https://github.com/farbod271/ERL',
      demo: 'https://t.me/erlcheckerbot'
    },
    {
      key: RandomId(),
      title: 'Typing app',
      content: "A simple clone of keybr.com",
      tags: ['nodejs', 'express','web', 'html5', 'css', 'bootstrap'],
      github: '#',
      demo: '#'
    },
    {
      key: RandomId(),
      title: 'Blog app',
      content: "The Blog app in this portfolio",
      tags: ['nodejs', 'express','web', 'mongodb', 'nginx', 'html5', 'css', 'bootstrap'],
      github: '#',
      demo: '#'
    }
  ];
const [selectedTags, setSelectedTags] = useState([]);


const filteredProjects = projects.filter((project) => {
  if (selectedTags.length === 0) return true;
  return (
    selectedTags.every((tag) => project.tags.includes(tag))
    );
});

const handleSelected = (tag) => {
  setSelectedTags((prev) =>
    prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
  );
};



  return (
    <>
<div className='filter-container text-center'>
<div className="flex gap-2 justify-center">
      </div>
    <div className='mb-3'>
        <div className={`rounded-xl inline cursor-pointer bg-slate-600 text-white w-fit px-2  py-1 text-center ${
            selectedTags.includes('client')
              ? " border-slate-900 text-white border-2"
              : "  border-2  "
          }`} onClick={() => handleSelected('client')}>for clients</div>
        <div className={`rounded-xl inline cursor-pointer bg-slate-600 text-white w-fit px-2 py-1 text-center ${
            selectedTags.includes('web')
              ? " border-slate-900 text-white border-2"
              : "  border-2  "
          }`} onClick={() => handleSelected('web')}>web application</div>
    </div>


<div className="all-svgs">
        {Object.keys(tagToSvgMap).map((tag) => {
          const SvgComponent = tagToSvgMap[tag];
          return <SvgComponent key={tag} className={`inline cursor-pointer ${
            selectedTags.includes(tag)
              ? " border-slate-900 text-white border-2"
              : "  border-2  "
          }`}  onClick={() => handleSelected(tag)}
          />;
        })}
      </div>
    </div>

    <div className='item-container flex gap-4 justify-center'>
      {filteredProjects.map((project) => (
        <div key={project.key} className=' list-items my-6 rounded-3xl text-center border-slate-600 relative'>
          <h1 className='text-white text-2xl my-2'>{project.title}</h1>
          <div className='scale-75 origin-top'>
          {project.tags.map((tag) => {
              const SvgComponent = tagToSvgMap[tag];
              return SvgComponent ? <SvgComponent key={tag} className="inline" /> : null;
            })}
          </div>
          <button className='bg-slate-600 absolute w-9 h-9 rounded-full top-2 right-2 text-xl text-white flex justify-center items-center'>i</button>
          <a href={`${project.github}`} className='bg-slate-600 absolute w-9 h-9 rounded-full bottom-2 right-2 text-white flex justify-center items-center'>    <Github /></a>
          <a href='https://google.com' className='bg-slate-600 w-16 h-9 rounded-full visit text-white flex justify-center items-center'>visit</a>
          <button className='bg-slate-600 absolute w-9 h-9 rounded-full bottom-2 left-2 text-white flex justify-center items-center'>    <Hash /></button>
        </div>
      ))}  
    </div>

    
    </>
  )
}

export default Filter