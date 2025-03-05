// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// //import HomePage from './view/Home';
// import Header from './components/Header';

// function App() {
//   return (
//     <div className="h-screen">
    
//       <Header/>
//     </div>
//   );
// }

// export default App;
//import {ReactL}
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from '@gsap/react'



gsap.registerPlugin(useGSAP,ScrollTrigger)
 import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ReactLenis from 'lenis/react'
const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');
  
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          start:'-200 bottom',
          end:'bottom 80%',
          trigger: element,
          scrub: true,
          markers:true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      });
    });
    ``
    
  });
  
  return (
   <ReactLenis root>
     <div>
     
     <Header/>
     <main>
    <Hero/>
    <About/>
    <Skill/>
    <Work/>
    <Review/>
    <Contact/>
    <Footer/>
    </main>
   </div>
   </ReactLenis>
  )
}

export default App
