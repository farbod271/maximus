import { Ambulance, HeartPulse, ShieldEllipsis, Router, Binary, PanelsTopLeft, Bug, BadgeEuro    } from 'lucide-react';
import Filter from './Filter' 
import ThreeScene from './ThreeScene';
import Typing from './Typing'

function Home() {
  return (
    <>
    <div className="home">
        <div className='view-height'>

            <div className='home-block'></div>
            {/* <div className="bg hidden md:block" style={{ backgroundImage: 'url(dark.jpg)' }}>
            <ThreeScene/>
              </div>         */}
              <div className="bg hidden md:block">
            <ThreeScene/>
              </div>   
            <div className='whoami'>
                <h1 className='text-6xl'>Servus, I'm Farbod</h1>
                <div className='explainer'>
                    <p className='text-3xl text-center'>
                    Code whisperer and hunter of bugs!
                    wields Django like a knight’s sword and React like a magic wand. 
                    When not battling bugs, I’m studying cybersecurity.
                    </p>
                    <div className='explainer-images text-center'>
{/* <img src="https://img.shields.io/badge/django-%23092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django"/> */}
<img src="https://img.shields.io/badge/cookiecutter-%23D4AA00?style=for-the-badge&logo=cookiecutter&logoColor=white" alt="Cookiecutter"/>
<img src="https://img.shields.io/badge/docker-%232496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
<img src="https://img.shields.io/badge/nginx-%23009639?style=for-the-badge&logo=nginx&logoColor=white" alt="Nginx"/>
<img src="https://img.shields.io/badge/redis-%23DC382D?style=for-the-badge&logo=redis&logoColor=white" alt="Redis"/>
<img src="https://img.shields.io/badge/javascript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" alt="JavaScript"/>
<img src="https://img.shields.io/badge/Postgres-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"/>
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Git"/>
<img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux"/>
<img src="https://img.shields.io/badge/node.js-%23339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
<img src="https://img.shields.io/badge/Express.js%20-white?style=for-the-badge&logo=express&labelColor=%23000000" alt="Express.js"/>
<img src="https://img.shields.io/badge/mongodb-%2347A248?style=for-the-badge&logo=mongodb&logoColor=white&labelColor=%2347A248" alt="MongoDB"/>
<img src="https://img.shields.io/badge/telegram-%232496ED?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram"/>
<img src="https://img.shields.io/badge/HTML5-%23E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
<img src="https://img.shields.io/badge/css-%231572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
<img src="https://img.shields.io/badge/Bootstrap-%237952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap"/>
                    </div>
                </div>
            </div>
        </div>
        <section className='intro-section bg-slate-900'>
        <Binary size={200} className='rotate-45' />
        <div className='middle-of-section'>
        <h1>Freelance Web Developer</h1>
          <p>I'm a Full-stack developer.<br/> I'm most comfortable using django for the backend and vanilla javascript for the frontend.<br/>
             if extensive frontend work is required, React and the MERN stack is my go-to.
             in conjuction with thses I employ docker, MongoDB, PostgreSQL, Nginx and Redis to build scalable and secure applications.
             </p>
        </div>
        <PanelsTopLeft size={200} className='-rotate-45'/>

        </section>
        <section className='intro-section bg-gray-800'>
        <ShieldEllipsis size={200} className='-rotate-45'/>
        <div className='middle-of-section'>
        <h1>Cybersecurity Student</h1>
          <p>I’m studyig Cybersecurity currently<br/>
              learning about web application penetration testing, network security, cryptography, and digital forensics. <br/>
              I’m also studying for the CompTIA Security+ certification. <br/>
              looking to get into the cybersecurity field as a penetration tester or security analyst.
          </p>
        </div>
        <Router size={200} className='rotate-45 -translate-y-10' />

        </section>
        <section className='intro-section test bg-yellow-500'>
        <Bug size={200} className='rotate-45' />
        <div className='middle-of-section'>
          <h1>Bug Bounty Hunter</h1>
          <p>I particupate in public bug bounty programms in hackerone and integriti
            still a beginner but my passion for cybersecurity and my experience as a developer keeps me going.
          </p>
        </div>
        <BadgeEuro size={200} className='-rotate-45' />
        </section>
        <section className='intro-section bg-sky-900'>
        <HeartPulse size={200} className='-rotate-45'/>
        <div className='middle-of-section'>
        <h1>Former Occupational Therapist!</h1>
          <p>interesingly I'm a licensed Ergotherapist having had experience in many collabrative contexts.  <br/>
            my patients ranged from children with autism to elderly with dementia. <br/>
            I have worked in ICU, CCU and other hospital settings, schools, and private clinics.
          </p>
        </div>
        <Ambulance size={200} className='ambulance' />
        </section>
    </div>
    <Filter/> 
    <Typing/>
    </>
  )
}

export default Home