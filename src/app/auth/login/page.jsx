
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
     CardHeader,
    CardTitle,
  } from "@/components/ui/card"



import Link from "next/link"
import LoginForm from "@/components/LoginForm"
import { auth, signIn } from "@/auth"
import { redirect } from "next/navigation"

const Page = async () => {
const session = await auth()

if(session?.user) redirect('/')
  return (
    <div className='flex justify-center '>
       <Card className="w-[350px]  mt-32">
      <CardHeader>
        <CardTitle>Login Page</CardTitle>
        
      </CardHeader>
      <CardContent>
        
     <LoginForm />
      </CardContent>
  <CardFooter className="flex flex-col gap-4">
    <span>Or</span>
    <form action={async ()=>{
      "use server"
      await signIn("google")
    }}>
        <Button type="submit">Login With Google</Button>
    </form>
    <Link href='/auth/register'>
    Dont have an account?  Signup</Link>
  </CardFooter>
    </Card>
  
    </div>
  )
}

export default Page