import React from 'react'
import { Link } from "react-router-dom"
const Profile2 = () => {
  return (
    <div>

<h1 className="m-5"  >YOU HAVE NOT LOGIN</h1>

<h1 className="m-5">  
<Link to="/login" className="text-danger">
 <button className=''>CLICK Here </button>
</Link>  For Login / Register To See Your Profile
</h1>

    </div>
  )
}

export default Profile2