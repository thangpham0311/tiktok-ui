import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Following from './pages/Following';
import Profile from './pages/Profile';
import DefaultLayout from './components/Layout/DefaultLayout';
import Upload from './pages/Upload';
import Seach from './pages/Seach';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DefaultLayout><Home/></DefaultLayout>}/>
          <Route path="/following" element={<DefaultLayout><Following/></DefaultLayout>}/>
          <Route path="/profile" element={<DefaultLayout><Profile/></DefaultLayout>}/>
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/seach" element={<Seach/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
