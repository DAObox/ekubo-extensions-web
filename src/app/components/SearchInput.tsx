'use client';

import Link from "next/link";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";

export default function SearchInput() {

    const [query, setQuery] = useState<String | undefined>()

    const handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    return (
        <div>
            <Input
                placeholder="Search for extensions" className="text-white bg-transparent focus-visible:ring-0 focus-visible:border-none"
                onChange={handleType}
            />
            {
                query && query.length > 0 && (
                    <Card className="w-full max-h-48 mt-2.5 overflow-y-scroll">
                        {
                            Array.from({ length: 50 }).map((_, i) => <Link href="/" key={i}>
                                <div className="px-2.5 py-1.5 text-white flex flex-row items-center justify-between">
                                    <p>Supreme Legendary Extension</p>
                                    <div className="flex flex-row items-center space-x-2.5">
                                        <Button className="hidden h-8 bg-red-700 hover:bg-red-700 sm:block">ETHCC Hackathon</Button>
                                        <Button className="hidden h-8 bg-yellow-700 hover:bg-yellow-700 sm:block">Sepolia Testnet</Button>
                                        <Button className="hidden h-8 bg-green-700 hover:bg-green-700 sm:block">Tool</Button>
                                    </div>
                                </div>
                            </Link>)
                        }
                    </Card>
                )
            }
        </div>
    )
}