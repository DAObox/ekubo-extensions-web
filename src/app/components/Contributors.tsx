import Image from "next/image";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function Contributors() {
    return (
        <Link href="/extensions">
            <Card className="min-h-72 w-full sm:w-[300px] md:w-80 xl:w-96 p-2.5 flex flex-col justify-between hover:border-[#41127E]">
                <div />
                <div className="space-y-1.5">
                    <Image
                        loading="eager"
                        src={"/profile.png"}
                        width={50}
                        height={50}
                        alt="profile"
                        className="pb-1 rounded-full"
                        unoptimized={true}
                    />
                    <h2 className="text-2xl text-white">Victor Omorogbe</h2>
                    <p className="text-lg text-white">A community curated collection of open-source extensions for Ekubo protocol.</p>
                    <div className="flex flex-wrap">
                        <Button className="h-8 text-white bg-red-700 hover:bg-red-700 mr-1.5 mb-1.5">ETHCC Hackathon</Button>
                        <Button className="h-8 text-white bg-yellow-700 hover:bg-yellow-700 mr-1.5 mb-1.5">Sepolia Testnet</Button>
                        <Button className="h-8 text-white bg-green-700 hover:bg-green-700 mr-1.5 mb-1.5">Tool</Button>
                    </div>
                </div>
            </Card>
        </Link>
    )
}