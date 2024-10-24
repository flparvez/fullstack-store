import React from 'react'
import {auth} from '../auth'
import Navbar from './Navbar'
const Navmain =async () => {
    const session = await auth()
    const user = session?.user
  return (
    <div>
      <Navbar user={user} />
    </div>
  )
}

export default Navmain