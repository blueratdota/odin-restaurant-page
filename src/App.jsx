import { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Outlet, Link } from 'react-router-dom'
import Home from './pages/home'



function App() {
  const [currentPage, setCurrentPage] = useState('/')

  return (
    <div className='flex flex-col min-h-screen'>
      <div className="flex flex-col gap-4 pt-4" >
        <div className='font-orbit text-3xl mx-auto'>LeoVince <span className="font-mono text-lg">- Fan Site</span></div>
        <div className="flex gap-12 justify-center items-center h-12 bg-[url('./images/carbon.jpg')] bg-repeat bg-contain text-white font-bold">
          <p onClick={() => setCurrentPage('/')} ><Link to={'/'}>Home</Link></p>
          <p onClick={() => setCurrentPage('exhausts')}><Link to={'/exhausts'}>Exhausts</Link></p>
          <p onClick={() => setCurrentPage('support')}><Link to={'/support'}>Support</Link></p>
        </div>
      </div>

      <div className='flex-1 max-w-[720px] mx-auto pt-10'>
        <div >
          {currentPage === '/' ? <Home /> : <Outlet />}
        </div>
      </div>


      <div className="bottom-0 mt-20 py-2  bg-[url('./images/carbon.jpg')] bg-repeat bg-contain text-white font-bold text-center" >
        <a
          className='flex justify-center content-center gap-2'
          href="https://github.com/blueratdota">
          <GitHubIcon />
          <p>AbsoluteAlpha</p>
        </a>
      </div>
    </div>

  )
}
export default App
