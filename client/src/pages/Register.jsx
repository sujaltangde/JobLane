import React, { useState, useEffect } from 'react';
import { MetaData } from '../components/MetaData';
import { AiOutlineMail, AiOutlineUnlock, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { MdPermIdentity, MdOutlineFeaturedPlayList } from 'react-icons/md';
import { BsFileEarmarkText } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';
import { TbLoader2 } from 'react-icons/tb';
import { registerUser } from '../actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';

export const Register = () => {
  const { loading, isLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [eyeTog, setEyeTog] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [skills, setSkills] = useState('');

  const [avatar, setAvatar] = useState('');
  const [avatarName, setAvatarName] = useState('');

  const [resume, setResume] = useState('');
  const [resumeName, setResumeName] = useState('');

  const avatarChange = (e) => {
    if (e.target.name === 'avatar') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
          setAvatarName(e.target.files[0].name);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const resumeChange = (e) => {
    if (e.target.name === 'resume') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setResume(reader.result);
          setResumeName(e.target.files[0].name);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const registerHandler = (e) => {
    e.preventDefault();

    const skillsArr = skills.split(',');
    const data = {
      name,
      email,
      password,
      avatar,
      resume,
      skills: skillsArr,
    };

    dispatch(registerUser(data));

    setName('');
    setEmail('');
    setPassword('');
    setAvatar('');
    setAvatarName('');
    setResume('');
    setResumeName('');
    setSkills('');
  };

  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  return (
    <>
      <MetaData title="Register" />
      <div className="bg-gray-950 min-h-screen pt-14 md:px-20 px-3 text-white flex items-center justify-center">
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-lg">
          <form onSubmit={registerHandler} className="flex flex-col gap-4">
            <div className="text-center mb-4">
              <p className="text-3xl font-semibold">Register</p>
            </div>

            {/* Name */}
            <div className="flex items-center bg-white rounded-lg overflow-hidden">
              <div className="text-gray-600 px-3">
                <MdPermIdentity size={20} />
              </div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Full name"
                type="text"
                className="outline-none text-black w-full py-2 px-2"
              />
            </div>

            {/* Email */}
            <div className="flex items-center bg-white rounded-lg overflow-hidden">
              <div className="text-gray-600 px-3">
                <AiOutlineMail size={20} />
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
                type="email"
                className="outline-none text-black w-full py-2 px-2"
              />
            </div>

            {/* Password */}
            <div className="flex items-center bg-white rounded-lg overflow-hidden">
              <div className="text-gray-600 px-3">
                <AiOutlineUnlock size={20} />
              </div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                type={eyeTog ? 'text' : 'password'}
                className="outline-none text-black w-full py-2 px-2"
              />
              <div className="text-gray-600 px-3 cursor-pointer" onClick={() => setEyeTog(!eyeTog)}>
                {eyeTog ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
              </div>
            </div>

            {/* Profile */}
            <div>
              <div className="flex items-center bg-white rounded-lg overflow-hidden">
                <div className="text-gray-600 px-3">
                  {avatar.length === 0 ? (
                    <CgProfile size={20} />
                  ) : (
                    <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                  )}
                </div>
                <label htmlFor="avatar" className="outline-none w-full cursor-pointer text-black px-2 py-2">
                  {avatarName.length === 0 ? (
                    <span className="text-gray-500 font-medium">Select Profile Pic...</span>
                  ) : (
                    avatarName
                  )}
                </label>
                <input
                  id="avatar"
                  name="avatar"
                  required
                  onChange={avatarChange}
                  placeholder="Profile"
                  accept="image/*"
                  type="file"
                  className="hidden"
                />
              </div>
              <p className="text-xs text-gray-400">Please select an image file</p>
            </div>

            {/* Resume */}
            <div>
              <div className="flex items-center bg-white rounded-lg overflow-hidden">
                <div className="text-gray-600 px-3">
                  <BsFileEarmarkText size={20} />
                </div>
                <label htmlFor="resume" className="outline-none w-full cursor-pointer text-black px-2 py-2">
                  {resumeName.length === 0 ? (
                    <span className="text-gray-500 font-medium">Select Resume...</span>
                  ) : (
                    resumeName
                  )}
                </label>
                <input
                  id="resume"
                  name="resume"
                  required
                  onChange={resumeChange}
                  placeholder="Resume"
                  accept="application/pdf,application/msword"
                  type="file"
                  className="hidden"
                />
              </div>
              <p className="text-xs text-gray-400">Please select a PDF or DOC file</p>
            </div>

            {/* Skills */}
            <div className="flex items-start bg-white rounded-lg overflow-hidden">
              <div className="text-gray-600 px-3 pt-2">
                <MdOutlineFeaturedPlayList size={20} />
              </div>
              <textarea
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="Skills (comma separated)"
                className="outline-none text-black w-full py-2 px-2"
                rows="3"
              />
            </div>

            {/* Register Button */}
            <div>
              <button
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex justify-center items-center w-full text-lg"
              >
                {loading ? <TbLoader2 className="animate-spin" size={24} /> : 'Register'}
              </button>
            </div>

            <div className="text-center text-sm pt-4">
              <p>
                Already have an account?{' '}
                <Link to="/login" className="text-yellow-400 underline">
                  Login
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

export default Register;
