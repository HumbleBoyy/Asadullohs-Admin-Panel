import React, { useRef } from 'react'
import { auth, firestore, storage } from '../../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore/lite';

const AdminPanel = () => {
    
  return (
    <>
      <div className='dasboard'>
          <form>
            <input type="text" placeholder='Project Name'/>
            <textarea type="text" placeholder='Description'/>
            <input type="text" placeholder='Project Domain Link'/>
            <input type="text" placeholder='GitHub Reposotory Link'/>
            <input type="file" placeholder='image'/>
            <button>Sign Out</button>
            <button type='submit'>Submit</button>
          </form>
      </div>
    </>
  )
}

export default AdminPanel
