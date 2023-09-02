import { useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Jobs } from './pages/Jobs'
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { MyProfile } from './pages/MyProfile'
import {AppliedJobs} from './pages/AppliedJobs'
import {SavedJobs} from './pages/SavedJobs'
import {Login} from './pages/Login'
import {Register} from './pages/Register'
import { JobDetails } from './pages/JobDetails'
import {useSelector, useDispatch} from 'react-redux'
import { logOrNot, me } from './actions/UserActions'


function App() {

  const dispatch = useDispatch()


  const { isLogin } = useSelector(state => state.user)

  
  useEffect(() => {

      dispatch(me());

  }, [dispatch,isLogin]);


  useEffect(() => {
    const LogOrNot = () => {
      dispatch(logOrNot());
    }
    LogOrNot()

  }, []);


  return (
    <>
     
      <Navbar/>
      <Routes>

        <Route exact path='/' element={<Home/>} />
        <Route path='/jobs' element={<Jobs/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<MyProfile/>} />
        <Route path='/applied' element={<AppliedJobs/>} />
        <Route path='/saved' element={<SavedJobs/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/details/:id' element={<JobDetails/>} />


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
