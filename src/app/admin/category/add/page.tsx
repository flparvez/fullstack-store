import { auth } from '@/auth';
import React from 'react'
import AddCategory from './AddCategory';

const page =async () => {
    const session = await auth();
    const user = session?.user;
   
  return (
    <div>
      <AddCategory user={user} />
    </div>
  )
}

export default page
