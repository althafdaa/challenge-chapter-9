import React from "react"


const RegisterForm = () => {
    return (
        <div className=" min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-[#f1f1f1] px-12 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center text-bold">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 pr-12 rounded mb-4"
                        name="username"
                        placeholder="Username" 
                        required/>
                        
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 pr-12 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" 
                        required/>

                    <input 
                        type="email"
                        className="block border border-grey-light w-full p-3 pr-12 rounded mb-4"
                        name="email"
                        placeholder="Email" 
                        required/>

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 pr-12 rounded mb-4"
                        name="password"
                        placeholder="Password" 
                        required/>
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 pr-12 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        required />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-500 hover:text-black focus:outline-none my-1"
                    >Create Account</button>

                    {/* <div className="text-center text-sm text-blue-400 mt-4 whitespace-normal">
                        By signing up, you agree to the 
                        <a className="underline border-b border-grey-dark text-grey-dark " href="../">
                            Terms of Service 
                        </a> and 
                        <a className="underline border-b border-grey-dark text-grey" href="../">
                            Privacy Policy
                        </a>
                    </div> */}
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue-600" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;