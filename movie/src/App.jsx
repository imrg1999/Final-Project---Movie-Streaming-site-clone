import { Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage'
import MoviePage from './Pages/MoviePage'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'


const App = () => {

 
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path={'/'} element={<Homepage />}/>
        <Route path={'/movie/:id'} element={<MoviePage/>}/>
        <Route path={'/signin'} element={<Signin/>} />
        <Route path={'/signup'} element={<Signup/>} />
      </Routes>
    </div>
  )
}

export default App