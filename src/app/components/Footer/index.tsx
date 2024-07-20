import Image from "next/image";
import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { SiThreads } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="bg-[#1E1E1E] flex justify-between text-white mx-5 mb-5 rounded-[32px]">
            <div className="flex flex-col gap-4 p-8 w-[460px]">
            <Image
                src="/assets/logo.svg"
                width={56}
                height={56}
                alt="logo"
                />
                <p className="footer-des">
                We&apos;ve prepared some of the best question you might have in your mind regarding our product & service.
                </p>
                <div className="flex gap-6 footer-des mb-6 mt-4">
                    <Link href="#">
                    Privacy Policy
                    </Link>
                    <Link href="#">
                    Terms & Conditions
                    </Link>
                </div>
                <div className="flex gap-6 items-center">
                 <Link href="#">
                  <IoLogoFacebook fontSize={24} />
                  </Link>
                  <Link href="#">
                  <FaXTwitter fontSize={24} />
                  </Link>
                  <Link href="#">
                  <SiThreads fontSize={24} />
                  </Link>
                  <Link href="#">
                  <FaLinkedin fontSize={24} />
                  </Link>
                </div>
            </div>
            <div>
                <Image className="rounded-r-[32px]" src="/assets/footer.svg" width={500} height={400} alt="questions" />
            </div>
        </div>
    )
}

export default Footer;