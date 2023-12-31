import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './components/AboutPage'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Projects from './components/Projects'
import 'bootstrap/dist/css/bootstrap.css'


export default function App() {
  const [currentPage, setCurrentPage] = useState("About")
  const renderPage = () => {
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'About') {
      return <AboutPage />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };


  return (
    <div >
        <Header setCurrentPage={setCurrentPage} />
          {renderPage()}
        <Footer />
    </div>
  )
}




// export default function App() {

//   const user = "Stark"

//   return (
//     <div>
//         <Header user={user} />
//           <BrowserRouter>
//             <Routes>
//               <Route path="/" element={<Welcome/>} />
//               <Route path="/about/*" element={<AboutPage/>} />
//               <Route path="/contact" element={<Contact user={user} />} />

//               <Route path="*" element={<NotFound />} />      
//             </Routes>
//           </BrowserRouter>
//         <Footer />
//     </div>
//   )
// }




// <>
// <div>
//   <a href="https://vitejs.dev" target="_blank">
//     <img src={viteLogo} className="logo" alt="Vite logo" />
//   </a>
//   <a href="https://react.dev" target="_blank">
//     <img src={reactLogo} className="logo react" alt="React logo" />
//   </a>
// </div>
// <h1>Vite + React</h1>
// <div className="card">
//   <button onClick={() => setCount((count) => count + 1)}>
//     count is {count}
//   </button>
//   <p>
//     Edit <code>src/App.jsx</code> and save to test HMR
//   </p>
// </div>
// <p className="read-the-docs">
//   Click on the Vite and React logos to learn more
// </p>
// </>