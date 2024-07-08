import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
    return(
        <Link href="/">
            <div className="items-center hidden lg:flex">
                {/* <Image src="/logo.png" width={150} height={50} alt="logo" />    */}
                <p className="font-semibold text-white text-2xl ml-2.5">
                </p>
                logo
            </div>
        </Link>
    )
}