import React, { useState } from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//stored data
import initialStore from "./utils/initialStore.js";

//pages
import Header from "./pages/header.jsx";
import Home from "./pages/home.jsx";
import Projects from "./pages/projects.jsx";
import About from "./pages/about.jsx";
import ProjectInfo from "./pages/projectinfo.jsx";
import Contact from "./pages/contact.jsx";

//css
import css from "./styles/app.module.css";

//font_awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  fas, 
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import { 
  faLinkedin, 
  faSquareGithub,
} from '@fortawesome/free-brands-svg-icons'


library.add(fas, faLinkedin, faSquareGithub, faBars)

//adding all the app information the homepage from the imported pages
export default function App() {

//usestate information from initialstore
const [personalInfo, setpersonalInfo] = useState(initialStore.personalInfo);
const [skills, setskills] = useState(initialStore.skills);
const [projects, setprojects] = useState(initialStore.projects);
const [contacts, setcontacts] = useState(initialStore.contacts);

  return (
    < >
      <Router basename={process.env.PUBLIC_URL}>
        <Header/>
          <div className={css.application}>
            <Routes>
                <Route path = "/" element = { <Home personalInfo = {personalInfo} skills = {skills}/>}/>
                <Route path = "/about" element = { <About/> }/>
                <Route path = "/projects" element = { <Projects projects = {projects}/> }/>
                <Route path = "/projects/:id" element = {<ProjectInfo projects = {projects}/>}/>
                <Route path = "/contact" element = { <Contact contacts = {contacts}/> }/>
            </Routes>
          </div>
      </Router>
    </>
  );
}


