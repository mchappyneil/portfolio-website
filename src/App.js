import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Photography from './components/Photography';
import CollectionPage from './components/Collections';
import Dashboard from './components/Dashboard';
import Skills from './components/Skills'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="photography" element={<Photography />} />
        <Route path="/collection/:collectionName" element={<CollectionPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="skills" element={<Skills />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
