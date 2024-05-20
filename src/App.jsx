import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet, Link } from 'react-router-dom'
import Home from './pages/home'



function App() {
  const [currentPage, setCurrentPage] = useState('/')

  return (
    <>
      <div className="flex flex-col gap-4  pt-4 " >
        <div className='font-orbit text-3xl mx-auto'>LeoVince <span className="font-mono text-lg">- Fan Site</span></div>
        <div className="flex gap-12 justify-center items-center h-12 bg-[url('./images/carbon.jpg')] bg-repeat bg-contain text-white font-bold">
          <p onClick={() => setCurrentPage('/')} ><Link to={'/'}>Home</Link></p>
          <p onClick={() => setCurrentPage('exhausts')}><Link to={'/exhausts'}>Exhausts</Link></p>
          <p onClick={() => setCurrentPage('contacts')}><Link to={'/contacts'}>Contact</Link></p>
        </div>
      </div>
      <div className='flex justify-center pt-10'>
        <div className="shadow-lg max-w-4xl ">
          {currentPage === '/' ? <Home /> : <Outlet />}
        </div>
      </div>
      <div>footer</div>
    </>

  )
}
export default App
