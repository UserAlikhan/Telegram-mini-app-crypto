type Props = {
    text: string
    textInTheBorder: string
}
    
export default function ButtonWithTextInTheBorder({ text, textInTheBorder }: Props) {
    return (
        <div className="bg-transparent border-gray-500 border-1 rounded-xl text-md text-white px-4 py-2 font-bold relative">
            {text}
            <div className="absolute -bottom-3 left-0 right-0 text-center">
               <span className="bg-[#181818] text-white text-xs px-2">{textInTheBorder}</span>
            </div>
        </div>
    )
}