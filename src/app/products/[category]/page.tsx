import ProductByCategory from '../ProductByCategory'
import Loading from '@/components/Loading';
import type { Metadata, ResolvingMetadata } from 'next';
type Props = {
  params: any;
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {


  const slug = params?.category;

  const category = await fetch(`http://localhost:3000/api/categories/${slug}`).then((res) => res.json())



if(!category) <Loading />
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: category?.category.title,
    openGraph: {
      images: [category?.category.image, ...previousImages],
    },
  };
}

const AllCategory =async ({params}:any) => {

  

  return (
    <div>
      <ProductByCategory category={params.category.toLowerCase()} />
    </div>
  )
}

export default AllCategory
