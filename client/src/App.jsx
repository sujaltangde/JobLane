import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Jobs } from './pages/Jobs'
import { Contact } from './pages/Contact'
import { About } from './pages/About'



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
      <Footer/>

    </>
  )
}

export default App
