import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return(
        <nav className="flex items-center justify-between px-14 h-20">
           <Image
            src="/assets/logo.svg"
            width={56}
            height={56}
            alt="logo"
            />
            <div className="flex items-center gap-4">
            <div className="flex items-center gap-12 z-10">
                <Link href="/">
                  How it works
                </Link>
                <Link href="/">
                  IELTS 4&ndash;skills courses
                </Link>
                <Link href="/">
                  FAQ
                </Link>
            </div>
            <button className="ml-7 z-10 bg-[#FEC047] text-black font-semibold py-2 px-5 border-[1.5px] border-black rounded">
              Let&apos;s Get Started
            </button>
            </div>
        </nav>
    )
}

export default Navbar;