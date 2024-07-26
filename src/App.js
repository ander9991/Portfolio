import './index.css';
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import About from "./components/About";
import Tech from './components/Tech';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';


const App = () => {
  return (
      <div className="overflox-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
          <div className="fixed top-0 -z-10 h-full w-full">
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            </div>
        <div className="container mx-auto px-8">
          <NavBar />
          <Profile />
          <About />
          <Tech />
          <Experience />
          <Education />
          <Projects />
        </div>
      </div>
  );
};

export default App;
