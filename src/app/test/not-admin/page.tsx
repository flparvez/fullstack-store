import Link from 'next/link'
import React from 'react'

const NotAdmin = () => {

  
  return (
    <div>
      <h2 className='text-center mt-8 text-5xl'>You Are Not Admin Contact First parvez</h2>
      <h2 className='text-center text-xl my-4'>  <Link href='/profile'> Login As Admin</Link></h2>
    </div>
  )
}

export default NotAdmin
