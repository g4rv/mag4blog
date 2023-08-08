import Link from "next/link";

export default function Home() {
  return (
    <main className="">
        <Link href='/about'>About</Link>
        <Link href='/blog'>Blog</Link>
    </main>
  )
}
