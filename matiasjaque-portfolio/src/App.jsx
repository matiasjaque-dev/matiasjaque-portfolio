import Header from './components/Header';
import React from 'react';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <div>
        <h1>Hello World</h1>
      </div>
    </>
  );
}

export default App;
