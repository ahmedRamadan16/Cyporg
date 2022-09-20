import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {Container} from 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Browse from './pages/browse/Browse';
import Details from './pages/details/Details';
import Streams from './pages/streams/Streams';
import Footer from './components/Footer';
import Profile from './pages/profile/profile';
function App() {
  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="browse" element={<Browse/>} />
        <Route path="details" element={<Details />} />
        <Route path="streams" element={<Streams/>} />
        <Route path="profile" element={<Profile/>} />

      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
