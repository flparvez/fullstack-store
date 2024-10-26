import { auth } from '@/auth';
import React from 'react'
import EditCategorys from '../EditComp'
const Category =async ({params}) => {
  const session = await auth();
  const user = session?.user;
 
  return (
    <div>
     <EditCategorys slug={params.slug} userId ={user}/>
    </div>
  )
}

export default Category
