
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Learnmore from './components/Learnmore';
import Navigation from './components/Navigation';



function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <About/>
      <Learnmore/>
      <Footer/>
    </div>
  );
}

export default App;
