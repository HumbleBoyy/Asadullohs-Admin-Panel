import {auth} from "../../firebase"
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
            <button onClick={()=> auth.signOut()}>Sign Out</button>
            <button type='submit'>Submit</button>
          </form>
      </div>
    </>
  )
}

export default AdminPanel
