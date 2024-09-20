import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import AdminPanel from './AdminPanel';
import Login from '../Login/Login';

const Dashboard = () => {

    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(()=> {
        onAuthStateChanged(auth, (user)=> {
            if(user){
                setUser(user)
            }else(
                setUser(null)
            )
        })
        
    },[])
  return (
    <>
      {user ? <AdminPanel/> : <Login/>}
    </>
  )
}

export default Dashboard
