export default function Step({ current, max }: { current: number, max: number }) {
    return (
        <div className="w-16 h-16 border-4 border-[#41127E] rounded-full flex flex-col items-center justify-center">
            <p className="text-xl font-bold text-white">{current}/{max}</p>
        </div>
    )
}