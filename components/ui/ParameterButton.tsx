type Props = {
    text: string;
    isActive: boolean;
    id: number;
    setActiveParamID: (id: number) => void;
}

export default function ParameterButton({ text, isActive, id, setActiveParamID }: Props) {
    return (
        <button 
            className={`${isActive ? "bg-white" : "bg-[#303030]"} h-[30px] rounded-2xl px-2`}
            onClick={() => setActiveParamID(id)}
        >
            <p className={`${isActive ? "text-black" : "text-white"} text-[12px]`}>{text}</p>
        </button>
    )
}