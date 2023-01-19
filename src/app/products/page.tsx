import Link from "next/link"

const fetchProducts = async () => {
  const res = await fetch(`https://dummyjson.com/products`, {
    cache: "no-store",
  })
  const products = await res.json()
  return products
}

export default async function ProductsPage() {
  const { products } = await fetchProducts()

  return (
    <div>
      <Link href="/">{"<-- Go Back"}</Link>

      <h1>Products Page</h1>
      {products.map(({ id, title }: any) => (
        <h3 key={id}>{title}</h3>
      ))}
    </div>
  )
}
