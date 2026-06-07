import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Stack from '@mui/material/Stack';

function App() {
  return (
    <Stack direction="column">
      <Navbar />
      <HeroSection />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </Stack>
  );
}

export default App;
