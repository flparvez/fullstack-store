"use client";
import { useGetCategoryByIdQuery } from "@/store/services/CategoryApi";
import EditCategory from "@/components/admin/EditCategory"
export default function AddCategory({params}) {

    const {data} =useGetCategoryByIdQuery(params.id)


  return (
    
<div>
  <h2>Edit Category</h2>
  <EditCategory  cdata ={data} categoryId={params.id}/>
</div>


  );
}
