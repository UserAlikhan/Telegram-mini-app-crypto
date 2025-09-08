type Props = {
    text: string;
    isActive: boolean;
    id: number;
    setActiveParamID: (id: number) => void;
}

export default function ParameterButton({ text, isActive, id, setActiveParamID }: Props) {
    return (
        <button 
            className={`${isActive ? "bg-white" : "bg-[#303030]"} rounded-2xl px-4 py-2`}
            onClick={() => setActiveParamID(id)}
        >
            <p className={`${isActive ? "text-black" : "text-white"} text-md`}>{text}</p>
        </button>
    )
}