"use client"
import ShoppingProductTile from "@/components/CategoryList";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useGetCategoriesQuery } from "@/store/services/CategoryApi";
import Link from "next/link";




export default function CategorytList() {
const {data,isLoading} = useGetCategoriesQuery()

  const categories =data;


if (!isLoading)

  return (
<div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  <h2> <Link href='/admin/category/add'> Add New Category</Link></h2>
          {categories && categories.length > 0
            ? categories.map((productItem) => (
              <div key={productItem._id}>
                  <ShoppingProductTile 
                  
                  product= {productItem}
               
                />
              </div>
              
              
              ))
            : null}
        </div>
</div>
  )
}




// <div  className="m-auto">


// <div className="columns-2">
// <h2 className="text-center ">Category List</h2>
// <h2 className="text-end"><Link href="/admin/category/add">Create Category</Link> </h2>
// </div>

// <Table className="sm:w-[80%] ">
// {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
// <TableHeader>
//   <TableRow>
//     <TableHead className="sm:w-[200px]">Category Name</TableHead>
   
//     <TableHead>Product Description</TableHead>
//     <TableHead className="sm:w-[100px] ">Edit</TableHead>
//     <TableHead className="sm:w-[100px]">Delete</TableHead>

//   </TableRow>
// </TableHeader>
// {categories?.map((item, i) => (
    


// <TableBody key={i}>


//     <TableRow >
//       <TableCell className="">{item.title}</TableCell>
//       <TableCell className="">{item.description}</TableCell>
//       <TableCell className="bg-green-300 rounded">Edit</TableCell>
//       <TableCell className="w-4">Delete</TableCell>
    
//     </TableRow>
// </TableBody>
// ))} 

  
// </Table>


// </div>