import Link from "next/link"

export const Header = () => {

  return (
    <header className="w-full">
      <nav className="w-full">
        <ul className="flex justify-center w-full">
          <Link href='/'><li className="hover:bg-white/10 py-1 px-2">Home</li></Link>
          <Link href='/store'><li className="hover:bg-white/10 py-1 px-2">Store</li></Link>
          <Link href='/store/Tech'><li className="hover:bg-white/10 py-1 px-2">Tech</li></Link>
          <Link href='/test'><li className="hover:bg-white/10 py-1 px-2">Test</li></Link>
        </ul>
      </nav>
    </header>
  )
}
