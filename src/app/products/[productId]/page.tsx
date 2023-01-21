export const dynamic = "force-dynamic"

const fetchProductDetails = async (productId: string) => {
  // To check when the fetch is actually happening
  // note: this message will appear in terminal and not in devtool
  console.log("<- FETCHING PRODUCT DETAILS ->")

  // Making fetch longer to see the loading component for longer time
  await new Promise((resolve) => setTimeout(() => resolve(null), 1000))

  const res = await fetch(`https://dummyjson.com/products/${productId}`)
  return await res.json()
}

export default async function ProductPage({ params: { productId } }: any) {
  const { title } = await fetchProductDetails(productId)

  return (
    <div className="wrapper-center">
      <h1>Product Details Page</h1>

      <h2>{title}</h2>
    </div>
  )
}
