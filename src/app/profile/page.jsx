import { auth } from '@/auth'
import {handleSignOut} from '@/hooks'

import OrderTable from "@/components/user/orderTable"
import { redirect } from 'next/navigation'
const Profile = async() => {
  const session = await auth()
const user = session?.user

if(!session?.user) redirect('/auth/login')
  console.log(session)
  return (
    
    <div className="flex">
   
      <div className="flex-1 p-6">
      <div className="flex flex-col items-center justify-center  py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile page</p>
            <h2 className="text-black">{user?.name}</h2>
          
        <hr />
        <form action={handleSignOut}>
        <button
        type='submit'
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Logout</button>
        </form>
       

        <h1 className="text-2xl font-bold mb-6">Customer Orders</h1>
        <OrderTable  user={user} />
      </div>
    </div>
        <div>
     
</div>
            </div>
  )
}

export default Profile
