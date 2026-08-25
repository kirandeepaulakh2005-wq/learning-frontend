import Header from "./Components/Header"
import AboutMe from "./Components/AboutMe"
import Project from "./Components/Project"
import Skills from "./Components/Skills"
import Education from "./Components/Education"
import Hobbies from "./Components/Hobbies"
import Extracurricular from "./Components/Extracurricular"
import Contact from "./Components/Contact"

function App() {

  return (
    <>
    <div className="bg-slate-100 px-5 py-8">
      <div className="bg-white max-w-4xl mx-auto rounded-xl shadow-lg"> 
            <Header />
            <AboutMe />
            <Project />
            <Skills />
            <Education />
            <Hobbies />
            <Extracurricular />
            <Contact />  
     </div>
</div>
    </>
  )
}

export default App
