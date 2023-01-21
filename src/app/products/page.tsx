import Link from "next/link"

export const dynamic = "force-dynamic"

const fetchProducts = async () => {
  // To check when the fetch is actually happening
  // note: this message will appear in terminal and not in devtool
  console.log("<- FETCHING PRODUCTS ->")

  // Making fetch longer to see the loading component for longer time
  await new Promise((resolve) => setTimeout(() => resolve(null), 1000))

  const res = await fetch(`https://dummyjson.com/products`, {
    cache: "no-store",
  })
  return await res.json()
}

export default async function ProductsPage() {
  const { products } = await fetchProducts()

  return (
    <div className="wrapper-center">
      <h1>Products Page</h1>

      {products.map(({ id, title }: any) => (
        <Link key={id} href={`/products/${id}`}>
          <h3>{title}</h3>
        </Link>
      ))}
    </div>
  )
}
