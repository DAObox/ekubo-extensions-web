import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navigation() {
    return (
        <div className="fixed h-20 backdrop-blur-3xl bg-transparent/10 w-[360px] sm:w-[600px] top-10 rounded-l-full rounded-r-full px-2.5
        flex flex-col items-center justify-center bg-gradient-to-br from-[#41127E] via-transparent to-transparent">
            <div className="flex flex-row items-center justify-between w-full pr-2.5">
                <Link href={"/"}>
                    <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
                </Link>
                <Button className="bg-[#41127E] hover:bg-[#41127E] flex flex-row items-center space-x-1.5">
                    <Image src={"/github-mark-white.svg"} width={25} height={25} alt="logo" />
                    <p className="text-white">Sign in with github</p>
                </Button>
            </div>
        </div>
    )
}