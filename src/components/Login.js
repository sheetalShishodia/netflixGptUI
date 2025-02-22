import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import { checkValidData } from '../utils/validate';

const Login = () => {
    const [isSignInForm, setSignInForm] = useState();
    const [validationError, setValidationError] = useState();
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm)
    }
    const handleSubmit = () => {
        const message = checkValidData(email.current.value, password.current.value)
        console.log(email.current.value)
        setValidationError(message)
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>
                )}
                <input type="text" ref={email} placeholder="Email address" className="p-4 my-4 w-full bg-gray-700"/>
                <input type="text" ref={password} placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
                <p className="text-red-500 font-bold text-lg py-2">{validationError}</p>
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleSubmit}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ?
                        "New to Netflix? Sign Up Now" : "Already registered? Sign In now"}
                </p>

            </form>
        </div>
    )
}

export default Login