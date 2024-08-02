import { BookText, Building2, Gamepad, PiggyBankIcon, Star, Wrench } from "lucide-react";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Input } from "../components/ui/input";

export default function Extensions() {
    return (
        <div className="bg-[#131216]/95 w-full min-h-screen pt-40 flex flex-col items-center space-y-5 sm:space-y-10 px-5">
            <div className="max-w-4xl w-full space-y-2.5">
                <div className="w-full backdrop-blur-3xl bg-transparent/10 bg-gradient-to-br from-[#41127E] via-transparent to-[#41127E] h-fit rounded-lg p-0.5">
                    <div className="w-full h-fit bg-[#131216]/95 rounded-lg">
                        <Input placeholder="Search for extensions by Supreme" className="w-full bg-[#131216] outline-0 active:outline-0 border-0 text-white" />
                    </div>
                </div>
                <div className="w-full flex flex-row space-x-5">
                    <div className="w-[500px] space-y-2.5">
                        <div className="w-full backdrop-blur-3xl bg-transparent/10 bg-gradient-to-br from-[#41127E] via-transparent to-transparent h-fit rounded-lg p-0.5">
                            <div className="w-full h-fit bg-[#131216]/95 rounded-lg p-2.5">
                                <div className="flex">
                                    <p className="text-white text-sm">Like this contributor?</p>
                                    <Button className="bg-white hover:bg-white border-2 border-white p-1.5 h-fit text-sm"><Star />  Star contributor</Button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full backdrop-blur-3xl bg-transparent/10 bg-gradient-to-br from-[#41127E] via-transparent to-transparent h-fit rounded-lg p-0.5">
                            <div className="w-full h-full bg-[#131216]/95 rounded-lg p-2.5">
                                <div>
                                    <p className="text-lg text-white pb-1.5">Filter</p>
                                    <div className="w-full h-0.5 bg-gradient-to-br from-[#41127E] via-transparent to-[#41127E]" />
                                </div>
                                <div className="mt-1.5">
                                    <p className="text-base text-white pb-1.5">Chains</p>
                                    {
                                        Array.from({ length: 5 }).map((_, i) => <Button key={i} className="bg-transparent hover:bg-transparent p-0 h-fit mr-1.5 mb-2.5">
                                            <div className="w-fit backdrop-blur-3xl bg-transparent/10 bg-gradient-to-br from-[#41127E] via-transparent to-transparent h-fit rounded-lg p-0.5">
                                                <div className="w-full h-fit bg-[#131216]/95 rounded-lg p-2.5">
                                                    <p className="text-sm text-white !font-normal">Mainnet</p>
                                                </div>
                                            </div>
                                        </Button>)
                                    }
                                </div>
                                <div className="w-full h-0.5 bg-gradient-to-br from-[#41127E] via-transparent to-[#41127E]" />
                                <div className="mt-2.5">
                                    <p className="text-white mb-1.5">Languages</p>
                                    <Select>
                                        <SelectTrigger className="w-full font-normal text-white border-[#41127E]">
                                            <SelectValue placeholder="Select a network" className="font-normal" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#131216] border-[#41127E]">
                                            <SelectItem value="cairo" className="hover:bg-[#41127E]">Cairo</SelectItem>
                                            <SelectItem value="starknetjs" className="hover:bg-[#41127E]">StarknetJS</SelectItem>
                                            <SelectItem value="starket-react" className="hover:bg-[#41127E]">Starknet React</SelectItem>
                                            <SelectItem value="typescript" className="hover:bg-[#41127E]">Typescript</SelectItem>
                                            <SelectItem value="dojo" className="hover:bg-[#41127E]">Dojo</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="w-full h-0.5 bg-gradient-to-br from-[#41127E] via-transparent to-[#41127E] mt-2.5" />
                                <div className="mt-1.5">
                                    <p className="text-white mb-1.5">Categories</p>
                                    <Select>
                                        <SelectTrigger className="w-full font-normal text-white border-[#41127E]">
                                            <SelectValue placeholder="Select category" className="font-normal" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#131216] border-[#41127E]">
                                            <SelectItem value="gaming" className="hover:bg-[#41127E]">
                                                <div className="flex flex-row items-center space-x-0.5">
                                                    <Gamepad color="#FFFFFF" />
                                                    <p className="mt-0.5">Gaming</p>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="tooling" className="hover:bg-[#41127E]">
                                                <div className="flex flex-row items-center space-x-0.5">
                                                    <Wrench color="#FFFFFF" />
                                                    <p className="mt-0.5">Tooling</p>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="infastructure" className="hover:bg-[#41127E]">
                                                <div className="flex flex-row items-center space-x-0.5">
                                                    <Building2 color="#FFFFFF" />
                                                    <p className="mt-0.5">Infastructure</p>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="defi" className="hover:bg-[#41127E]">
                                                <div className="flex flex-row items-center space-x-0.5">
                                                    <PiggyBankIcon color="#FFFFFF" />
                                                    <p className="mt-0.5">DeFi</p>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="learning" className="hover:bg-[#41127E]">
                                                <div className="flex flex-row items-center space-x-0.5">
                                                    <BookText color="#FFFFFF" />
                                                    <p className="mt-0.5">Learning</p>
                                                </div>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full b bg-[#131216]/95 h-40"></div>
                </div>
            </div>
        </div>
    )
}