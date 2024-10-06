import ProductPage from '../ProductDetails';


export async function generateMetadata(
  { params, searchParams },
 
) {
  let product;
  try {
    const response = await fetch(`https://uniquestorebd.vercel.app/api/product/${params.slug}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    product = await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    // Handle the error as necessary, maybe set a default metadata or log the error
    return {
      title: 'Product not found',
      openGraph: {
        images: [],
      },
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product?.product?.name || 'Product',
    openGraph: {
      images: [product?.product?.images, ...previousImages],
    },
  };
}

const ProductDetails = async ({ params }) => {
  return <ProductPage slug={params?.slug} />;
};

export default ProductDetails;
