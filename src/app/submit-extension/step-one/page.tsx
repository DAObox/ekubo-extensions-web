import StepOneForm from "@/app/components/add-extension-forms/step-one-form";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export default async function SubmitHook() {
    return (
        <div className="bg-[#131216]/95 w-full min-h-screen pt-40 flex flex-col items-center space-y-5 sm:space-y-10 px-5">
            <div className="flex flex-col items-center w-full h-full">
                <div className="flex flex-col items-start w-full h-full max-w-3xl">
                    <div className="space-y-3.5">
                        <div className="flex flex-row items-center justify-between w-full">
                            <div className="w-16 h-16 border-4 border-[#41127E] rounded-full flex flex-col items-center justify-center">
                                <p className="text-xl font-bold text-white">1/4</p>
                            </div>
                            <h3 className="text-xl text-white sm:text-3xl">Add an extension</h3>
                            <Link href="/">
                                <Button className="h-8 text-white bg-[#41127E] hover:bg-transparent hover:border-2 border-[#41127E]">Go back</Button>
                            </Link>
                        </div>
                        <p className="text-center text-white">Please ensure your hook adheres to the standards and guidelines of the Ekubo extensions community.</p>
                    </div>
                    <StepOneForm />
                </div>
            </div>
        </div>
    )
}