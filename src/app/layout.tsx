import "./globals.css"

import { Inter } from "@next/font/google"
import Link from "next/link"
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className="main">
          <div
            style={{ display: "flex", gap: "40px", marginBottom: "100px" }}
            className="wrapper-center"
          >
            <Link href="/" className="nav-link">
              <p>Home</p>
              <p>/</p>
            </Link>
            <Link href="/products" className="nav-link">
              <p>Products</p>
              /products
            </Link>
            <Link href="/products/1" className="nav-link">
              <p>Product 1</p>
              <p>/products/[1]</p>
            </Link>
            <Link href="/products/2" className="nav-link">
              <p>Product 2</p>
              <p>/products/[2]</p>
            </Link>
            <Link href="/products/3" className="nav-link">
              <p>Product 3</p>
              <p>/products/[3]</p>
            </Link>
            <Link href="/products/4" className="nav-link">
              <p>Product 4</p>
              <p>/products/[4]</p>
            </Link>
            <Link href="/products/5" className="nav-link">
              <p>Product 5</p>
              <p>/products/[5]</p>
            </Link>
            <Link href="/products/6" className="nav-link">
              <p>Product 6</p>
              <p>/products/[6]</p>
            </Link>
          </div>

          {children}
        </main>
      </body>
    </html>
  )
}
