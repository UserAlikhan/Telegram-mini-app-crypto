type Props = {
    text: string;
    bgColor: string;
    textColor: string;
    textSize: string;
    onClick?: () => void;
}

export default function ButtonFullWidth({text, bgColor, textColor, textSize, onClick}: Props) {
    return (
        <button className={`w-full py-3 rounded-2xl ${bgColor} text-${textColor} text-${textSize}`} onClick={onClick}>
            <p>{text}</p>   
        </button>
    )
}