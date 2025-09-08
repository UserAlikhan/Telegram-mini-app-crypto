type Props = {
    text: string;
    bgColor: string;
    textColor: string;
    textSize: string;
}

export default function ButtonFullWidth({text, bgColor, textColor, textSize}: Props) {
    return (
        <button className={`w-full py-3 rounded-2xl ${bgColor} text-${textColor} text-${textSize}`}>
            <p>{text}</p>   
        </button>
    )
}