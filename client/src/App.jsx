import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Jobs } from './pages/Jobs'
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
     
      <Navbar/>
      <Routes>

        <Route exact path='/' element={<Home/>} />
        <Route path='/jobs' element={<Jobs/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />


      </Routes>
      
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        className="mt-14 font-bold  "

      />
      
      <Footer/>




    </>
  )
}

export default App
