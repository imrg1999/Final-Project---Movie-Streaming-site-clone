import {useState} from 'react'
import banner from '../assets/nfx-banner.jpg'
import {useNavigate} from 'react-router-dom'

const Signin = () => {
  const navigate = useNavigate();

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");


  return (
    <div className='min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center'
    style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner})`}}>
      
      <div className='max-w-[450px] w-full bg-black bg-opacity-75 rounded px-8 py-14 mt-8 text-white'>
        <h1 className='text-3xl font-medium mb-6 text-center'>Sign In</h1>

<form className='flex flex-col'>
        <input type="text" placeholder='Username' value={username}
        onChange={(e) => setUsername(e.target.value)}
         className='w-full h-[50px] bg-[#333] text-white rounded px-5 text-base mb-4'/>
        <input type="password" placeholder='Password' value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='w-full h-[50px] bg-[#333] text-white rounded px-5 text-base'/>

        <button type='submit' className='w-full bg-[#e50914] text-white py-2 rounded text-base mt-4
        hover:opacity-90 cursor-pointer'>
          Sign In
        </button>
  </form>

  <div className='mt-2 text-[#737373] text-sm'>
    <p>New to Netflix? 
      <span className='text-white font-medium cursor-pointer ml-2 hover:underline'
      onClick={() => navigate('/signup')}> Sign Up Now</span></p>
  </div>
      </div>
    </div>
  )
}

export default Signin