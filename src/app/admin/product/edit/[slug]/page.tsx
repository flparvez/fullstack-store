import React from 'react'

import { auth } from '@/auth';
import EditProductForm from '../EditProductForm';
const Add = async({params}:any) => {
  const session = await auth();
  const user = session?.user
  return (
    <div>
      <EditProductForm params={params}  user={user}/>
    </div>
  )
}

export default Add
