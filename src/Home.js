import { Ambulance, HeartPulse, ShieldEllipsis, Router, Binary, PanelsTopLeft, Bug, BadgeEuro, Zap    } from 'lucide-react';
import Filter from './Filter' 
import ThreeScene from './ThreeScene';
import Typing from './Typing'
import { tagToSvgMap } from './svgs';
import { Rss, Presentation   } from 'lucide-react';
import {Link} from "react-router-dom";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';





function Home() {


const divVariants = {
  initial: {
    y: '-70px',
    x: '-270px',
  opacity: 0,
  rotate: '15deg',
},
  animate: { 
    x: 0,
    y: 0,
    opacity: 1,
    transition: { 
      duration: 1,
      ease: "easeOut"
    }
  }
};

const redVariants = {
  initial: {
    x: '500px',
  opacity: 0,
},
  animate: { 
    x: 0,
    y: 0,
    opacity: 1,
    transition: { 
      duration: 1,
      ease: "easeOut"
    }
  }
}


  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3, 
        staggerChildren: 0.5 
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          entry.target.querySelectorAll('div').forEach((div) => {
            div.classList.add('invisible');
          });             
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('div').forEach((div) => {
              div.classList.remove('invisible');
              div.classList.add('fade-in-up');
            });            
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    const cardElements = document.querySelectorAll('.intro-section');
    cardElements.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);


  return (
    <>
    <div className="home">
        <div className='view-height sm:w-full'>

            <motion.div className='home-block'
            variants={divVariants}
            initial="initial"
            animate="animate"
            >
              <motion.div className='home-block-red'
              variants={redVariants}
              initial="initial"
              animate="animate"
              ></motion.div>
            </motion.div>      
              <div className="bg hidden sm:block">
            <ThreeScene/>
              </div>   
            <motion.div className='whoami sm:w-full md:w-1/2'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            >
                <motion.h1 className='text-6xl' variants={cardVariants}>Servus, I'm Farbod</motion.h1>
                <div className='explainer'>
                    <motion.p className='lg:text-3xl text-2xl sm:mt-16 mt-20 text-center' variants={cardVariants}>
                    Code whisperer and hunter of bugs!
                    wields Django like a knight’s sword and React like a magic wand. 
                    When not battling bugs, I’m studying cybersecurity.
                    </motion.p>
                    <motion.div className='explainer-images text-center' variants={cardVariants}>
                      <div className="all-svgs">
                        {Object.keys(tagToSvgMap).map((tag) => {
                          const SvgComponent = tagToSvgMap[tag];
                          return <SvgComponent key={tag} 
                          className='inline cursor-pointer'/>;
                        })}
                      </div>
                    <div className='flex justify-center gap-7 mt-5'>
                    <div className='flex blog-btn gap-1 items-center text-xl rounded-sm text-slate-950 p-2'>
                      <div className='blog-btn-a'>
                      <Link to='/posts' className='flex items-center gap-1'>
                      <Rss size={16} />Blog
                      </Link>
                      </div>
                    </div>
                    <div className='flex gap-1 blog-btn items-center text-xl rounded-sm text-white p-2'>
                        <div className='blog-btn-a'>
                        <Link to='/projects' className='flex items-center gap-1'>
                        <Presentation size={16} />Portfolio
                        </Link>
                        </div>
                    </div>
                    </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
        <section className='intro-section relative bg-slate-900'>
          <motion.div 
          animate={{ y: [0, -5, 0], x: [0, 5, 0] }}

          transition={{
          duration: 5,
          repeat: Infinity, 
          ease: "easeInOut",
      }}>
            <Binary size={200} className='rotate-45 text-slate-800 absolute left-2 -top-20' />
          </motion.div>
        <div className='middle-of-section'>
        <h1>Freelance Web Developer</h1>
          <p className='sm:w-full'>I'm a Full-stack developer.<br/> I'm most comfortable using django for the backend and vanilla javascript for the frontend.<br/>
             if extensive frontend work is required, React and the MERN stack is my go-to.
             </p>
        </div>
        <motion.div 
          animate={{ y: [0, -5, 0], x: [0, 5, 0] }}
          transition={{
          duration: 5,
          repeat: Infinity, 
          ease: "easeInOut",
      }}>
        <PanelsTopLeft size={200} className='-rotate-45 text-slate-800 absolute right-2 -top-20'/>
          </motion.div>

        </section>
        <section className='intro-section bg-gray-800'>
        <motion.div 
          animate={{ y: [0, -5, 0], x: [0, 5, 0] }}

          transition={{
          duration: 5,
          repeat: Infinity, 
          ease: "easeInOut", 
      }}>
        <ShieldEllipsis size={200} className='-rotate-45  text-slate-900 absolute left-2 -top-20'/>
          </motion.div>
        <div className='middle-of-section'>
        <h1>Cybersecurity Student</h1>
          <p>I’m studyig Cybersecurity currently<br/>
              learning about web app pentesting, network security, cryptography, and digital forensics. <br/>
              looking to get into the cybersecurity field as a pentester or security analyst.
          </p>
        </div>
        <motion.div 
          animate={{ y: [0, -5, 0], x: [0, 5, 0] }}

          transition={{
          duration: 5,
          repeat: Infinity, 
          ease: "easeInOut", 
      }}>
        <Router size={200} className='rotate-45 -translate-y-10 text-slate-900 absolute right-2 -top-20' />
          </motion.div>

        </section>
        <section className='intro-section test bg-yellow-500'>
        <motion.div 
          animate={{ y: [0, -5, 0], x: [0, 5, 0] }}

          transition={{
          duration: 5,
          repeat: Infinity, 
          ease: "easeInOut", 
      }}>
        <Bug size={200} className='rotate-45  text-yellow-400 absolute left-2 -top-20' />
          </motion.div>
        <div className='middle-of-section'>
          <h1>Bug Bounty Hunter</h1>
          <p>I participate in public bug bounty programms in hackerone and integriti
            still a beginner but my passion for cybersecurity and my experience as a developer keeps me going.
          </p>
        </div>
        <motion.div 
          animate={{ y: [0, -5, 0], x: [0, 5, 0] }}

          transition={{
          duration: 5,
          repeat: Infinity, 
          ease: "easeInOut", 
      }}>
        <BadgeEuro size={200} className='-rotate-45 absolute text-yellow-400 right-2 -top-20' />
          </motion.div>
        </section>
        <section className='intro-section bg-sky-900'>
        <motion.div 
          animate={{ y: [0, -4, 0], x: [0, 4, 0] }}

          transition={{
          duration: 5,
          repeat: Infinity, 
          ease: "easeInOut", 
      }}>
        <HeartPulse size={200} className='-rotate-45  text-sky-800 absolute left-2 -top-20'/>
          </motion.div>
        <div className='middle-of-section'>
        <h1>Former Occupational Therapist!</h1>
          <p>interesingly I'm a licensed Ergotherapist having had experience patients ranging from children with autism to elderly with dementia. <br/>
            I have worked in ICU, CCU and other hospital settings, schools, and private clinics.
          </p>
        </div>
        <motion.div 
          animate={{ y: [0, -4, 0], x: [0, 4, 0] }}

          transition={{
          duration: 5,
          repeat: Infinity, 
          ease: "easeInOut", 
      }}>
        <Ambulance size={200} className='ambulance absolute text-sky-800 right-2 -top-20' />
          </motion.div>
        </section>
    </div>
    <Filter/> 
    <Typing/>
    </>
  )
}

export default Home