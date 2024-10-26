import { connectDb } from "@/lib/dbConfig";
import Category from "@/models/categorySchema";
import {User} from "@/models/userSchema";
import { Types } from "mongoose";
import { NextResponse } from "next/server";
import slugify from "slugify";



// Get CategorySlug
export const GET = async (request:Request,context: { params:any}) =>{
    const slug = context.params.slug;


    try {
       if (!slug ) {
            return new NextResponse(
                JSON.stringify({message:"Inavlid or missing Id"}),
                {status:400}
            )
        }
    
        await connectDb();
     
        const category = await Category.findOne({
            slug:slug, })
     
      if (!category) {
    
        return new NextResponse (
            JSON.stringify({message:"Category not found or does not exist"}),
            {status:404});
    
      }
    
      return new NextResponse(
        JSON.stringify({message:"Category fetched successfully",category}),{status:200}
      )
    } catch (error:any) {
        return new NextResponse("Category Fetched Error: " + error.message,{status:400})
    }
    }










//  PATCH request By Slug

export const PATCH  = async (request:  Request,context: {params:any })=>{
    const slug = context.params.slug;
  

    try {
        
const body= await request.json();
const {title,description,image} = body;

const { searchParams } = new URL(request.url);
const userId = searchParams.get("userId");


if (!userId || !Types.ObjectId.isValid(userId!)) {
return new NextResponse(
    JSON.stringify({message:"Inavlid or missing userId"}),
    {status:400}
)
}

if (!slug ) {
    return new NextResponse(
        JSON.stringify({message:"Inavlid or missing Slug"}),
        {status:400}
    )
}

await connectDb();
const user = await User.findById(userId);

if (!user) {
    return new NextResponse (
        JSON.stringify({message:"User not found"}),
        {status:405}
    )
}
const category = await Category.findOne({slug:slug});

if (!category) {
    return new NextResponse (
        JSON.stringify({message:"Category not found"}),
        {status:404}
    )
}

const updatedCategory = await Category.findOneAndUpdate(
{slug:slug},
{title,description,image,slug:slugify(title)},
{new:true}
);

return new NextResponse(JSON.stringify({message:"Category updated successfully",updatedCategory}),{status:200})


    } catch (error:any) {
        return new NextResponse("Error In Updateing Category" + error.message,{
            status:500,
        })
    }
}

// deleteByid
export const DELETE =async (request:Request, context: {params :any})=>{
    const slug = context.params.slug;

try {
    const { searchParams } = new URL(request.url);
const userId = searchParams.get("userId");
if (!userId || !Types.ObjectId.isValid(userId!)) {
    return new NextResponse(
        JSON.stringify({message:"Inavlid or missing userId"}),
        {status:400}
    )
    }
    
    if (!slug ) {
        return new NextResponse(
            JSON.stringify({message:"Inavlid or missing Slug"}),
            {status:400}
        )
    }

    await connectDb();

    const user = await User.findById(userId);

    if (!user) {
        return new NextResponse (
            JSON.stringify({message:"User not found"}),
            {status:404}
        )
    }
    const category = await Category.findOne({
        slug:slug, })
 
  if (!category) {

    return new NextResponse (
        JSON.stringify({message:"Category not found or does not exist"}),
        {status:404});

  }

    
    await Category.findOneAndDelete({slug:slug})

    return new NextResponse(JSON.stringify({message:"Category deleted successfully"}),{status:200})

} catch (error:any) {
    return new NextResponse("Category deleted error"+error.message,{status:400})
}

}