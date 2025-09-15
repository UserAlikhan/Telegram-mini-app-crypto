type Props = {
    text: string
    textInTheBorder: string
}
    
export default function ButtonWithTextInTheBorder({ text, textInTheBorder }: Props) {
    return (
        <div className="bg-transparent border-gray-500 border-1 rounded-xl px-6 py-2 relative">
            <p className="text-[14px] font-AnonymosPro font-bold text-white">{text}</p>
            <div className="absolute -bottom-3 left-0 right-0 text-center">
               <span className="bg-[#2F2F33] text-white text-[10px] px-2 font-normal">{textInTheBorder}</span>
            </div>
        </div>
    )
}