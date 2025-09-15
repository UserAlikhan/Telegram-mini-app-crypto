type Props = {
    text: string;
    bgColor: string;
    textColor: string;
    textSize: string;
    onClick?: () => void;
}

export default function ButtonFullWidth({text, bgColor, textColor, textSize, onClick}: Props) {
    return (
        <button className={`w-full h-[40px] rounded-2xl ${bgColor} ${textColor} ${textSize} font-bold`} onClick={onClick}>
            <p>{text}</p>   
        </button>
    )
}