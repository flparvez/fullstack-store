"use client";
import { useGetCategoryByIdQuery } from "@/store/services/CategoryApi";
import EditCategory from "@/components/admin/EditCategory"
export default function EditCategorys({slug,userId}) {

    const {data} =useGetCategoryByIdQuery(slug)


  return (
    
<div>
  <h2>Edit Category</h2>
  <EditCategory userId={userId?.id}  cdata ={data} slug={slug}/>
</div>


  );
}
