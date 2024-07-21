import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full border-t-2 border-[#41127E] p-5 flex flex-col items-end">
            <div className="flex flex-row items-center space-x-1.5">
                <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
                <h2 className="text-2xl font-extrabold text-white">Powered by Ekubo</h2>
            </div>
        </div>
    )
}