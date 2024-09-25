import ProductByCategory from '../ProductByCategory'
const AllCategory =async ({params}) => {

    const products = await fetch(`https://uniquestorebd.vercel.app/api/product/`).then((res) => res.json())


  return (
    <div>
      <ProductByCategory products={products} category={params.category} />
    </div>
  )
}

export default AllCategory
