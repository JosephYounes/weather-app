import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Weather from './pages/Weather.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="weather" element={<Weather />} />
        {/* Optional 404 route */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;