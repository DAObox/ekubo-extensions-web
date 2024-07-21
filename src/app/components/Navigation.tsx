'use client'

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navigation() {
    const session = useSession();
    return (
        <div className="fixed h-20 backdrop-blur-3xl bg-transparent/10 w-[360px] sm:w-[600px] top-10 rounded-l-full rounded-r-full px-2.5
        flex flex-col items-center justify-center bg-gradient-to-br from-[#41127E] via-transparent to-transparent">
            <div className="flex flex-row items-center justify-between w-full pr-2.5">
                <Link href={"/"}>
                    <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
                </Link>
                {
                    session.data?.user?.name ? <button onClick={() => signOut()} className="flex flex-row items-center space-x-5">
                        <Image src={session.data.user.image as string} width={50} height={50} alt="profile" className="rounded-full" />
                    </button> : <Button className="bg-[#41127E] hover:bg-[#41127E] flex flex-row items-center space-x-1.5"
                        onClick={() => signIn("github")}>
                        <Image src={"/github-mark-white.svg"} width={25} height={25} alt="logo" />
                        <p className="text-white">Sign in with github</p>
                    </Button>
                }
            </div>
        </div>
    )
}