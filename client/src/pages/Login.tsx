import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

function Login() {

  const navigate = useNavigate()

  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);


  const [state, setState] = useState('Sign Up')

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [country, setCountry] = useState('')
  const [birthday, setBirthday] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneLada, setPhoneLada] = useState('')
  const [phone, setPhone] = useState('')

  const onSubitHandler = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      axios.defaults.withCredentials = true

      if (state === 'Sign Up') {
        const {data} = await axios.post(backendUrl + '/api/auth/register', 
        {name, surname, country, birthday, email, password, phoneLada, phone})

        if (data.success) {
          setIsLoggedin(true)
          getUserData()
          navigate('/')
        }else{
          toast.error(data.message)
        }
      }else{
        const {data} = await axios.post(backendUrl + '/api/auth/login', 
          { email, password })
  
          if (data.success) {
            setIsLoggedin(true)
            getUserData()
            navigate('/')
          }else{
            toast.error(data.message)
          }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen px-6
    sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400'>
      <img onClick={
        ()=> navigate('/')
      } src={assets.logo} alt="" className='absolute left-5 sm:left-20
      top-5 w-28 sm:w-32 cursor-pointer'/>
      <div className='bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96
      text-indigo-300 text-sm'>

        <h2 className='text-3x1 font-semibold text-white text-center mb-3'>
          {state === 'Sign Up' ? 'Create Account' : 'Login'}</h2>

        <p className='text-center text-sm mb-6'>
          {state === 'Sign Up' ? 'Create your account' : 'Login to your account!'}</p>

        <form onSubmit={onSubitHandler}>
          {state === 'Sign Up' && (
            // Nombre
            <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5
            rounded-full bg-[#333A5C]'>
            <img src={assets.person_icon} alt="" />
              <input onChange={e => setName(e.target.value)} 
                value={name}
                className='bg-transparent outline-none'
                type="text" placeholder='Name' 
                autoComplete="given-name" required/>
            </div>
          )}

          {state === 'Sign Up' && (
            // Apellido
            <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5
            rounded-full bg-[#333A5C]'>
            <img src={assets.person_icon} alt="" />
            <input onChange={e => setSurname(e.target.value)}
              value={surname}
              className='bg-transparent outline-none' type="text" placeholder='Surname' autoComplete="family-name" required/>
            </div>
          )}

          {state === 'Sign Up' && (
          // Country
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5
          rounded-full bg-[#333A5C]'>
            <img src={assets.mail_icon} alt="" />
            <select onChange={e => setCountry(e.target.value)} 
                value={country} 
            className="bg-transparent outline-none" name="" id="">
            <option value="">Select Country</option>
            <option value="USA">United States</option>
            <option value="CAN">Canada</option>
            <option value="MEX">Mexico</option>
            </select>
          </div>
          )}

          {state === 'Sign Up' && (
          // Birthday
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5
          rounded-full bg-[#333A5C]'>
            <img src={assets.person_icon} alt="" />
            <input onChange={e => setBirthday(e.target.value)}
              value={birthday}
            className='bg-transparent outline-none' type="date" placeholder='Birthday' required/>
          </div>
          )}

          // Email
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5
          rounded-full bg-[#333A5C]'>
            <img src={assets.mail_icon} alt="" />
            <input onChange={e => setEmail(e.target.value)}
              value={email}
            className='bg-transparent outline-none' type="email" placeholder='Email' autoComplete="email" required/>
          </div>

          // Password
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5
          rounded-full bg-[#333A5C]'>
            <img src={assets.lock_icon} alt="" />
            <input onChange={e => setPassword(e.target.value)}
              value={password}
            className='bg-transparent outline-none' type="password" placeholder='Password' required/>
          </div>

          {state === 'Sign Up' && (
          // PhoneLada
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5
          rounded-full bg-[#333A5C]'>
            <img src={assets.mail_icon} alt="" />
            <select onChange={e => setPhoneLada(e.target.value)}
              value={phoneLada}
            className="bg-transparent outline-none" name="" id="" autoComplete="tel-national" required>
            <option value="">Select Lada</option>
            <option value="+1">USA, Canada</option>
            <option value="+52">Mexico</option>
            <option value="+44">UK</option>
            </select>
          </div>
          )}
          
          {state === 'Sign Up' && (
          // Phone
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5
          rounded-full bg-[#333A5C]'>
            <img src={assets.mail_icon} alt="" />
            <input onChange={e => setPhone(e.target.value)}
              value={phone}
            className='bg-transparent outline-none' type="text" placeholder='Phone' autoComplete="tel" required/>
          </div>
          )}

          <p onClick={
            ()=> navigate('/reset-password')
          } className='mb-4 text-indigo-500 cursor-pointer'>Forgot password?</p>

          <button className='w-full py-2.5 rounded-full bg-gradient-to-r
          from-indigo-500 to-indigo-900 text-white font-medium'>{state}</button>
        </form>

        {state === 'Sign Up' ? (
          <p className='text-gray-400 text-center text-xs mt-4'>Already have 
          an account?{' '}
            <span onClick={()=> setState('Login')} className='text-blue-400 cursor-pointer underline'>Login here</span>
          </p>
          ) 
          : (
          <p className='text-gray-400 text-center text-xs mt-4'>Don't have an
          account?{' '}
            <span onClick={()=> setState('Sign Up')} className='text-blue-400 cursor-pointer underline'>Sign up</span>
          </p>
        )}
        
      </div>
    </div>
  )
}

export default Login
// 