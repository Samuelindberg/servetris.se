import Navbar from "./components/Navbar";
import IntroPage from "./components/intropage/IntroPage";
import ServiceSection from "./components/servicespage/ServiceSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroPage />
      <ServiceSection />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
