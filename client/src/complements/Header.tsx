import { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContent } from '../context/AppContext'

function Header() {

  const context = useContext(AppContent);

  if (!context) {
    throw new Error("AppContent debe estar dentro de AppContextProvider");
  }

  const { userData } = context;

  return (
    <div className='flex flex-col items-center mt-20 px-4 text-center
    text-gray-800'>
      <img src={assets.header_img} alt=""
      className='w-36 h-36 rounded-full mb-6' />

      <h1 className='flex items-center gap-2 text-xl sm:text-3x1
      font-medium mb-2'>Hey {userData ? userData.name : 'Developer'}!
      <img className='w-8 aspect-square'
      src={assets.hand_wave} alt="" />
      </h1>

      <h2 className='text-3x1 sm:text-5x1 font-semibold mb-4'>Welcome to our app</h2>

      <p className='mb-8 max-w-md'>Let's start with a quick product tour and we will have you up and running in no time!</p>

      <button className='border border-gray-500 rounded-full px-8 py-2.5
      hover:bg-gray-100 transition-all'>Get Started</button>
    </div>
  )
}

export default Header
