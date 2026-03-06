import './App.css';
import { Com } from './components/organisms/com/com';
import { Footer } from './components/moleclues/footer/footer';
import { NavBar } from './components/moleclues/navBar/navBar';

function App() {

  return (
    <div className='page'>
      <NavBar />
      <Com />
      <Footer />
    </div>
  )
}

export default App
