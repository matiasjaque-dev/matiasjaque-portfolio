import Header from './components/Header';
import React from 'react';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
