import React, { useEffect, useState }  from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const useProfile = () => {
    const[user]=useAuthState(auth)
    const [profiles, setProfiles] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/profile/${user?.email}`)
        .then((res)=>res.json())
        .then((data)=>{
            setProfiles(data)
            
        })
            },[user])
    return [profiles,setProfiles]
};

export default useProfile;