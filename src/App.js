
import './App.css';
import Banner from './components/banner/Banner';
import Card from './components/card/Card';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Home from './components/homes/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Hero/>
      <Banner/>
      <Card/>
    </div>
  );
}

export default App;
