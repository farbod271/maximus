import React from 'react'
import { useState } from "react";
import './styles.css'
import { Github, Hash  } from 'lucide-react';
import { tagToSvgMap } from './svgs';
import { motion, AnimatePresence } from 'framer-motion';


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


const ProjectCard = ({ project }) => {

  const [activeView, setActiveView] = useState(null);



  const handleInfoClick = () => {
    setActiveView('info');
  };
  
  const handleTagsClick = () => {
    setActiveView('tags');
  };
  const handleClose = () => {
    setActiveView(null);
  };


  const renderContent = () => {
    switch(activeView) {
      case 'info':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-white text-center p-6 rounded-3xl"
          >
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-sm">{project.content}</p>
            <button 
              onClick={handleClose}
              className=" absolute top-3 right-3 w-6 bg-red-500 rounded-lg text-slate-50"
            >
              X
            </button>
          </motion.div>
        );
      case 'tags':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-white text-center rounded-3xl"
          >
            <h2 className="text-sm font-bold m-0">Technologies</h2>
            <div className=' scale-75 translate-y-8 origin-top '>
            {project.tags.map((tag) => {
                const SvgComponent = tagToSvgMap[tag];
                return SvgComponent ? <SvgComponent key={tag} className="inline" /> : null;
              })}
            </div>
            <button 
              onClick={handleClose}
              className=" absolute top-3 right-3 w-6 bg-red-500 rounded-lg text-slate-50"
            >
              X
            </button>
          </motion.div>
        );
      default:
        return null;
    }
  };
  

  return(
      <div key={project.key} className=' list-items my-6 rounded-3xl text-center flex-shrink-0 border-slate-600 relative'>
              <AnimatePresence>
        {activeView && (
          <motion.div
            key={activeView}
            initial={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '9999px',
              top: activeView === 'info' ? '1rem' : 'auto',
              bottom: activeView === 'tags' ? '1rem' : 'auto',
              right: activeView === 'info' ? '1rem' : 'auto',
              left: activeView === 'tags' ? '1rem' : 'auto',
              borderRadius: '1.5rem',
              position: 'absolute',
            }}
            animate={{ 
              width: '100%', 
              height: '100%', 
              borderRadius: '1.5rem',
              top: 0, 
              bottom: 0, 
              left: 0, 
              right: 0 
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`bg-slate-600 absolute z-40 flex items-center justify-center rounded-3xl`}
          >
            {renderContent()}
          </motion.div>
        )}
      </AnimatePresence>
    {!activeView && (
      <>
      <h1 className='text-white text-2xl my-10'>{project.title}</h1>
      <button onClick={handleInfoClick} className='bg-slate-600 absolute w-9 h-9 rounded-full top-2 right-2 text-xl text-white flex justify-center items-center'>i</button>
      <button onClick={handleTagsClick} className='bg-slate-600 absolute w-9 h-9 rounded-full bottom-2 left-2 text-white flex justify-center items-center'>    <Hash /></button>
      <a href={`${project.github}`} target="_blank" rel="noopener noreferrer"  className='bg-slate-600 absolute w-9 h-9 rounded-full bottom-2 right-2 text-white flex justify-center items-center'>    <Github /></a>
      <a href={`${project.demo}`} target="_blank" rel="noopener noreferrer" className='bg-slate-600 w-16 h-9 rounded-full visit text-white flex justify-center items-center'>visit</a>
      </>
    )}
    </div>
)};


  return (
    <div className='relative'>
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

    <div id='hello' className='item-container sm:justify-normal md:justify-center flex gap-4'>
      {filteredProjects.map((project) => (
        <ProjectCard key={project.key} project={project} />
      ))}  
    </div>

    
    </div>
  )
}

export default Filter