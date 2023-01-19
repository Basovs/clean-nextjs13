import Link from "next/link"

const fetchProductDetails = async (productId: string) => {
  const res = await fetch(`https://dummyjson.com/products/${productId}`)
  const productDetails = await res.json()
  return productDetails
}

export default async function ProductPage({ params: { productId } }: any) {
  const { title } = await fetchProductDetails(productId)

  return (
    <div>
      <Link href="/">{"<--"} Go back</Link>
      <h1>Product Details Page</h1>

      <h2>{title}</h2>
    </div>
  )
}
