import React, { useEffect, useState } from "react";
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import './App.css'

import Splash from "./components/main-splash/Splash";
import Skills from "./components/skills/Skills";
import Experience from "./components/work experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/contact/Contact";


import {BrowserRouter as Router} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';



function App() {
  const [windowDimension, setWindowDimension] = useState(null);
  const [navbarOpen, setNavbarOpen] = useState(false)

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
  }

  window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  const isMobile = windowDimension <= 740;

  /*
 
  */
  return (
        <>  
            <Router>
                {isMobile? (
                      <div className="nav-wrapper">
                          <div className="logo">Vivekjyoti Banerjee</div>
                          <div className={`items-m ${navbarOpen ? " showMenu" : ""}`}>
                              <Link className="nav-link" to = "/#Experience"   onClick= {() => closeMenu()} >
                                   <div className="item"> Experience </div> 
                              </Link>

                              <Link className="nav-link" to = "/#Skills"   onClick= {() => closeMenu()} >
                                   <div className="item"> Skills </div>
                              </Link>
                            
                              <Link className="nav-link" to = "/#Projects" onClick= {() => closeMenu()}  >
                                   <div className="item"> Projects</div> 
                              </Link>

                              <Link className="nav-link" to = "/#Contact" onClick= {() => closeMenu()} >
                                   <div className="item"> Contact</div> 
                              </Link>
                          
                              
                          </div>
                          <button className="nav-hamburger" onClick={handleToggle}> 
                              {navbarOpen ? (
                                <MdClose style={{ color: "#7b7b7b", width: "20px", height: "20px" }} />
                              ) : (
                                <FiMenu style={{ color: "#7b7b7b", width: "20px", height: "20px" }} />
                              )}
                          </button>
                      </div>
                ): (
                      <div className="nav-wrapper">
                          <div className="logo">Vivekjyoti Banerjee</div>
                          <div className="items">

                              <Link to = "/#Experience"  className="nav-link"  onClick= {() => closeMenu()} >
                                  <div className="item"> Experience </div> 
                              </Link>

                              <Link to = "/#Skills"   className="nav-link" onClick= {() => closeMenu()} >
                                   <div className="item"> Skills </div> 
                              </Link>
                            
                              <Link to = "/#Projects" className="nav-link" onClick= {() => closeMenu()}  >
                                    <div className="item"> Projects</div>  
                              </Link>

                              <Link to = "/#Contact" className="nav-link" onClick= {() => closeMenu()} >
                                   <div className="item"> Contact</div> 
                              </Link>
                             
                          </div>
                      </div>
                )}

                <Splash />

                <div id="Skills">
                   <Skills />
                </div>
                <div id="Experience">
                   <Experience />
                </div>

                <div id="Projects">
                   <Projects />
                </div>
               
                <div id="Contact">
                   <Contact />
                </div>
               
            </Router>
        </> 
  );
}

 

export default App;
