import Link from "next/link";
import { Button } from "./ui/button";

export default function HomePaths() {
    return (
        <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row items-center space-x-3.5">
                <Link href="/">
                    <Button className="h-8 text-white bg-[#41127E] hover:bg-transparent hover:border-2 border-[#41127E]">Blog</Button>
                </Link>
                <Link href="/">
                    <Button className="h-8 text-white bg-[#41127E] hover:bg-transparent hover:border-2 border-[#41127E]">FAQs</Button>
                </Link>
                <Link href="/">
                    <Button className="h-8 text-white bg-[#41127E] hover:bg-transparent hover:border-2 border-[#41127E]">Acknowledgements</Button>
                </Link>
            </div>
            <div className="flex flex-row items-center space-x-3.5">
                <Link href="/">
                    <Button className="h-8 text-white bg-[#41127E] hover:bg-transparent hover:border-2 border-[#41127E]">Submit a hook 🚀</Button>
                </Link>
                <Link href="/">
                    <Button className="h-8 text-white bg-[#41127E] hover:bg-transparent hover:border-2 border-[#41127E]">Dashboard 🔒</Button>
                </Link>
            </div>
        </div>
    )
}