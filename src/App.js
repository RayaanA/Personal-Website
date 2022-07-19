import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="body">
      <Navbar/>
      <div id = "container">
        <Intro></Intro>
        <About></About>
        <Work></Work>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
