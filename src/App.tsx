import { Routes, Route, Link } from 'react-router-dom';
import { useCounterStore } from './hook/useCounterStore';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import AboutPage from './pages/AboutPage'; // Import the AboutPage

// Define a component for the main content (previously the whole App)
const HomePageContent = () => {
  const count = useCounterStore((state) => state.count);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={decrement}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="mt-6 flex justify-center">
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded transition">
          Tailwind Button
        </button>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <nav style={{ padding: '10px', borderBottom: '1px solid #eee', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePageContent />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
