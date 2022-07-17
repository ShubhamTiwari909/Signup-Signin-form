import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: ""
}
function Auth() {
  const [state, setState] = useState(initialState)
  const [signup, setSignup] = useState(false)
  const navigation = useNavigate()

  const { firstName, lastName, email, password, confirmPassword } = state

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({ ...state, [evt.target.name]: value });
  }

  const handleAuth = async (e) => {
    e.preventDefault()
    navigation('/')
  }
  return (
    <div className="grid grid-cols-1">
      <form className="grid grid-cols-1 p-4 border-x-2 border-x-blue-400 rounded-lg place-self-center my-6
         bg-gradient-to-r from-slate-700 via-neutral-800 to-slate-900"
        onSubmit={handleAuth}>
        <div className="text-center mb-10 text-2xl bg-clip-text text-transparent 
        bg-gradient-to-r from-blue-200 to-blue-500 font-bold" >
          {!signup ? "Sign in" : "Sign up"}
        </div>
        {signup && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 place-self-center my-2">
              <label className="text-slate-100 text-md md:text-lg">FirstName</label>
              <input type="text" placeholder="firstName" name="firstName" value={firstName} onChange={handleChange}
                className="px-2 py-1 rounded-lg bg-white text-slate-800 focus:outline-none border-b-2 border-b-blue-600" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 place-self-center my-2">
              <label className="text-slate-100 text-md md:text-lg">LastName</label>
              <input type="text" placeholder="lastName" name="lastName" value={lastName} onChange={handleChange}
                className="px-2 py-1 rounded-lg bg-white text-slate-800 focus:outline-none border-b-2 border-b-blue-600" />
            </div>
          </>

        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 place-self-center my-2">
          <label className="text-slate-100 text-md md:text-lg">Email</label>
          <input type="email" placeholder="Email" name="email" value={email} onChange={handleChange}
            className="px-2 py-1 rounded-lg bg-white text-slate-800 focus:outline-none border-b-2 border-b-blue-600" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 place-self-center my-2">
          <label className="text-slate-100 text-md md:text-lg">Password</label>
          <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange}
            className="px-2 py-1 rounded-lg text-slate-800 border-b-2 border-b-blue-600 focus:outline-none" />
        </div>
        {signup && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 place-self-center my-2">
              <label className="text-slate-100 text-md md:text-lg">Confirm Password</label>
              <input type="password" placeholder="ConfirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleChange}
                className="px-2 py-1 rounded-lg text-slate-800 border-b-2 border-b-blue-600 focus:outline-none" />
            </div>
          </>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 place-self-center my-4" >
          <label></label>
          <button type="submit" className="px-4 py-2 rounded-lg bg-transparent border-2 border-blue-400 text-blue-400">
            {!signup ? "Sign in" : "Sign up"}
          </button>
        </div>

        <div className="mt-3">
          {!signup ? (
            <>
              <div className="flex space-x-3 justify-center">
                <p className="text-slate-100  text-center">Not a member?
                </p>
                <button onClick={(e) => {
                  e.preventDefault()
                  setSignup(true)
                }}
                  className="text-blue-400 transition duration-200 ease-in-out">
                  Sign up
                </button>
              </div>
            </>
          ) :
            (
              <>
                <div className="flex space-x-3 justify-center">
                  <p className="text-slate-100 text-center">Already have an account?
                  </p>
                  <button onClick={(e) => {
                    e.preventDefault()
                    setSignup(false)
                  }}
                    className="text-blue-400 transition duration-200 ease-in-out">
                    Sign in
                  </button>
                </div>
              </>
            )
          }
        </div>
      </form>
    </div>
  )
}

export default Auth
