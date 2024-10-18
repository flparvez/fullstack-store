
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

import Link from "next/link"
// import {hash} from 'bcryptjs'
// import { redirect } from "next/navigation"
// import { connectDb } from "@/lib/dbConfig"
// import { User } from "@/models/userSchema"

// import { toast } from "sonner"
import RegisterC from "./RegisterC"



const Page = () => {

 
  return (
    <div className='flex justify-center '>
       <Card className="w-[350px]  mt-32">
      <CardHeader>
        <CardTitle>Signup Page</CardTitle>
        <RegisterC />
      </CardHeader>
      <CardContent>
    
      </CardContent>
  <CardFooter className="flex flex-col gap-4">
    <span>Or</span>
    <form action="">
        <Button type="submit">Register With Google</Button>
    </form>
    <Link href='/login'>
    Already have an account?  Login</Link>
  </CardFooter>
    </Card>
  
    </div>
  )
}

export default Page