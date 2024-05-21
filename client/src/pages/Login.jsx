import React, { useEffect, useState } from 'react';
import { MetaData } from '../components/MetaData';
import { AiOutlineMail, AiOutlineUnlock, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { TbLoader2 } from 'react-icons/tb';
import { loginUser } from '../actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {
  const { loading, isLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eyeTog, setEyeTog] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    dispatch(loginUser(data));

    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  return (
    <>
      <MetaData title="Login" />
      <div className="bg-gray-950 min-h-screen pt-14 md:px-20 px-3 text-white flex items-center justify-center">
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
          <form onSubmit={loginHandler} className="flex flex-col gap-6">
            <div className="text-center mb-6">
              <p className="text-4xl font-semibold">Login</p>
            </div>

            <div className="flex items-center bg-white rounded-lg overflow-hidden">
              <div className="text-gray-600 px-3">
                <AiOutlineMail size={20} />
              </div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                placeholder="Email"
                type="text"
                className="outline-none text-black w-full py-3 px-2"
              />
            </div>

            <div className="flex items-center bg-white rounded-lg overflow-hidden">
              <div className="text-gray-600 px-3">
                <AiOutlineUnlock size={20} />
              </div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                placeholder="Password"
                type={eyeTog ? 'text' : 'password'}
                className="outline-none text-black w-full py-3 px-2"
              />
              <div className="text-gray-600 px-3 cursor-pointer" onClick={() => setEyeTog(!eyeTog)}>
                {eyeTog ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
              </div>
            </div>

            <button
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex justify-center items-center"
            >
              {loading ? <TbLoader2 className="animate-spin" size={24} /> : 'Login'}
            </button>

            <div className="text-center text-sm pt-4">
              <p>
                Don't have an account?{' '}
                <Link to="/register" className="text-yellow-400 underline">
                  Register
                </Link>{' '}
                here.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
