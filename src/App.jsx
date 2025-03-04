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
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
const App = () => {
  return (
    <div>
     
      <Header/>
      <main>
     <Hero/>
     <About/>
     <Skill/>
     <Work/>
     </main>
    </div>
  )
}

export default App
