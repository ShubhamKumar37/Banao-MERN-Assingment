
import './App.css';
import { Hero, NavBar } from './components';

function App() {
  return (
    <div className="h-screen max-h-full w-screen flex flex-col">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
