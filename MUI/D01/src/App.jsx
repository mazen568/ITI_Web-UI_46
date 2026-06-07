import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import CardsSection from "./components/CardsSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import CtaSection from "./components/CtaSection";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ backgroundColor: "#050505" }}>
      <Navbar />
      <Hero />
      <CardsSection />
      <FeaturesSection />
      <CtaSection />
      <Footer />
    </Box>
  );
}

export default App;
