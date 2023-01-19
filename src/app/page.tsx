import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "./page.module.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ display: "flex", gap: "40px" }}>
        <Link href="/products" prefetch={false}>
          Products
        </Link>
        <Link href="/products/1" prefetch={false}>
          Product 1
        </Link>
        <Link href="/products/2" prefetch={false}>
          Product 2
        </Link>
        <Link href="/products/3" prefetch={false}>
          Product 3
        </Link>
        <Link href="/products/4" prefetch={false}>
          Product 4
        </Link>
        <Link href="/products/5" prefetch={false}>
          Product 5
        </Link>
        <Link href="/products/6" prefetch={false}>
          Product 6
        </Link>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
    </main>
  )
}
