import React, { useRef } from 'react'
import { auth, db, storage } from '../../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore/lite';

const AdminPanel = () => {
    const form = useRef();

    const addNewProject = (e) => {
      e.preventDefault();
      const name = form.current[0]?.value;
      const description = form.current[1]?.value;
      const url = form.current[2]?.value;
      const gitHubUrl = form.current[3]?.value;
      const ImageUrl = form.current[4]?.files[0];

      const storageRef = ref(storage,  `projectsImageCollection/${ImageUrl.name}`)

      uploadBytes(storageRef, ImageUrl)
      .then((snapshot)=>  {
        getDownloadURL(snapshot.ref)
        .then((downLoadUrl)=> {
             saveProjects({
                name,
                description,
                url,
                gitHubUrl,
                ImageUrl: downLoadUrl,
             })
        }, (error) => {
            console.log(error)
            saveProjects({
                name,
                description,
                url,
                gitHubUrl,
                ImageUrl: null,
             })
          })
      }, (error) => {
        console.log(error)
        saveProjects({
            name,
            description,
            url,
            gitHubUrl,
            ImageUrl: null,
         })
      })
    }

    const saveProjects = async(projects) => {
        console.log(projects)

        try{
            await addDoc(collection(db, 'asadullohs'), projects);
            window.location.reload(false)
        }catch(err){
           console.log(err)
        }
    }
  return (
    <>
      <div className='dasboard'>
          <form ref={form} onSubmit={addNewProject}>
            <input type="text" placeholder='Project Name'/>
            <textarea type="text" placeholder='Description'/>
            <input type="text" placeholder='Project Domain Link'/>
            <input type="text" placeholder='GitHub Reposotory Link'/>
            <input type="file" placeholder='image'/>
            <button onClick={() => auth.signOut()}>Sign Out</button>
            <button type='submit'>Submit</button>
          </form>
      </div>
    </>
  )
}

export default AdminPanel
