import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../../configs/firebase.config';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegisterForm = () => {
  const [form, setForm] = useState({
    userName: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  const { userName, fullName, email, password, confirmPassword } = form;

  const handleOnChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password isn't same with confirm password");
      return;
    }
    setLoading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const payload = {
        ...form,
        totalScore: 0,
        history: [],
        timestamp: serverTimestamp(),
      };

      delete payload.password;
      delete payload.confirmPassword;

      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, payload);

      await updateProfile(auth.currentUser, {
        displayName: fullName,
      });
      toast.success('Create account success');
      navigate('/login');
    } catch (error) {
      console.log(error);
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-[#f1f1f1] px-12 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center text-bold">Sign up</h1>
          {loading && (
            <div className="font-semibold py-2 px-4 mb-4 bg-yellow-200 rounded-lg">
              Loading...
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 pr-12 rounded mb-4"
              name="userName"
              value={userName}
              onChange={handleOnChange}
              placeholder="Username"
              required
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 pr-12 rounded mb-4"
              name="fullName"
              value={fullName}
              onChange={handleOnChange}
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              className="block border border-grey-light w-full p-3 pr-12 rounded mb-4"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Email"
              required
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 pr-12 rounded mb-4"
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Password"
              required
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 pr-12 rounded mb-4"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              required
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-500 hover:text-black focus:outline-none my-1"
            >
              Create Account
            </button>
          </form>

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
          <Link to="/login">
            <button className="text-grey-dark mt-6 underline">Log In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
