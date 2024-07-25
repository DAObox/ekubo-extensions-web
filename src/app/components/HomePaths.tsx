'use client'

import Link from "next/link";
import { Button } from "./ui/button";
import { useToast } from "@/app/components/ui/use-toast"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function HomePaths() {
    const session = useSession();
    const { toast } = useToast()
    const router = useRouter()
    return (
        <div className="flex flex-row items-center w-full overflow-x-scroll md:justify-between space-x-3.5 md:space-x-0 hide-scrollbar">
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
                <Button
                    className="h-8 text-white bg-[#41127E] hover:bg-transparent hover:border-2 border-[#41127E]"
                    onClick={session.data?.user?.name == undefined ? () => {
                        toast({
                            title: "Please sign in to submit an extension",
                        })
                    } : () => router.push("/submit-extension/step-one")}
                >Submit an extension 🚀</Button>
                <Link href="/">
                    <Button className="h-8 text-white bg-[#41127E] hover:bg-transparent hover:border-2 border-[#41127E]">Dashboard 🔒</Button>
                </Link>
            </div>
        </div>
    )
}