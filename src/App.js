
import './App.css';
import { Blogs, Hero, NavBar } from './components';

function App() {
  return (
    <div className="h-screen max-h-full w-full flex flex-col">
      <NavBar />
      <Hero />
      <Blogs />
    </div>
  );
}

export default App;
