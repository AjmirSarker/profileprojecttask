// 
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useProfile from '../Hooks/useProfile';
import './Profile.css'
const Profile = () => {
  const navigate=useNavigate()
  const[user]=useAuthState(auth)
  const[profiles,setProfiles]=useProfile()
  const GoUpdate=()=>{
navigate('/updateprofile')
  }

  return (
    <div className='my-5 p-5  rounded-3 border-dark container border shadow-lg'>
      <h2 className='text-info fw-bolder '>Profile Details</h2>
      <h3><span className='headline text-start'>Name: </span><span className='Data text-end'>{user?.displayName}</span></h3>
      <h3><span className='headline'>Email: </span><span className='Data'>{user?.email}</span></h3>
      <hr className='' />
      
      <h3><span className='headline'>Mobile: </span><span className='Data'>{profiles?.mobile}</span></h3>
      <h3><span className='headline'>Address: </span><span className='Data'>{profiles?.address}</span></h3>
      <h3><span className='headline'>City: </span><span className='Data'>{profiles?.city}</span></h3>
      <h3><span className='headline'>State: </span><span className='Data'>{profiles?.state}</span></h3>
      <h3><span className='headline'>Country: </span><span className='Data'>{profiles?.country}</span></h3>
      <h3><span className='headline'>Company: </span><span className='Data'>{profiles?.company}</span></h3>
      <h3><span className='headline'>Occupation: </span><span className='Data'>{profiles?.occupation}</span></h3>
      <h3><span className='headline'>Experience: </span><span className='Data'>{profiles?.experience} year</span></h3>
      <button className='submit-button' onClick={GoUpdate}>Update Profile</button>
      
    </div>
  );
};

export default Profile;