import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProfile from '../Hooks/useProfile';
import './UpdateProfile.css'
import toast from 'react-hot-toast';
import '../nayeam/custom-form.css'
import { useNavigate } from 'react-router-dom';
const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const[profiles,setProfiles]=useProfile()
    const navigate = useNavigate()

   


    const Profile=(e)=>{
        e.preventDefault();
        const name= e.target.name.value;
        const email= e.target.email.value;
        const mobile= e.target.mobile.value;
        const address= e.target.address.value;
        const city= e.target.city.value;
        const state= e.target.state.value;
        const country= e.target.country.value;
        const company= e.target.company.value;
        const occupation= e.target.occupation.value;
        const experience= e.target.experience.value;
        const updateProfile ={name,email,mobile,address,city,state,country,company,occupation,experience}
        const url = `http://localhost:5000/profile/${user?.email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(updateProfile)
          })
          .then((res)=>res.json())
          .then((data)=>{
           setProfiles(data)
           navigate('/profile')
            toast.success('Update Done')
            e.target.reset()

          })
      
            
    }
    return (
      
        <div>
            <h1 className='my-3'>Update Profile</h1>
             <div className='form'>
            <form onSubmit={Profile}>

                <div class="custom-margin-bottom">
                    <input type="text"
                    readOnly
                    value={user?.displayName}
                        name='name' placeholder='Name' class="form-control3" />
                </div>

                <div class="custom-margin-bottom">
                    <input
                    readOnly
                    value={user?.email}
                    type="text"
                        name='email' placeholder='Email' class="form-control3" />
                </div>
                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='mobile' placeholder='Mobile number' class="form-control3" />
                </div>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='address' placeholder='Address' class="form-control3" />
                </div>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='city' placeholder='City' class="form-control3" />
                </div>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='state' placeholder='State' class="form-control3" />
                </div>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='country' placeholder='Country' class="form-control3" />
                </div>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='company' placeholder='Company Name' class="form-control3" />
                </div>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='occupation' placeholder='Occupation' class="form-control3" />
                </div>

                <div class="custom-margin-bottom">
                    <input required type="number"
                        name='experience' placeholder='Years of Experience' class="form-control3" />
                </div>

                <button className='submit-button' type='submit'>UPDATE PROFILE</button>

            </form>
        </div>
        </div>
    );
};

export default UpdateProfile;