type Props = {
    text: string;
    isActive: boolean;
    id: number;
    setActiveParamID: (id: number) => void;
}

export default function ParameterButton({ text, isActive, id, setActiveParamID }: Props) {
    return (
        <button 
            className={`${isActive ? "bg-white" : "bg-[#7474801F]"} h-[30px] rounded-2xl px-3`}
            onClick={() => setActiveParamID(id)}
        >
            <p className={`${isActive ? "text-black" : "text-white"} text-[12px] text-xs-10`} style={{fontFamily: 'var(--font-sf-pro-text)'}}>{text}</p>
        </button>
    )
}