"use client"

import floatFormat from "@/utils/FloatFormat";
import { useEffect } from "react";
import { Minus, Plus } from "lucide-react";

type Props = {
    min: number;
    max: number;
    step: number;   
    amount: number;
    onAmountChange: (value: number) => void;
    setError: (error: string) => void;
}

export default function Stepper({ min, max, step, amount, onAmountChange, setError }: Props) {

    useEffect(() => {
        if (amount < min) {
            setError("Value cannot be less than " + min)
        } else if (amount > max) {
            setError("Value cannot be greater than " + max)
        } else {
            setError("You must buy at least 100 points")
        }
    }, [amount])

    return (
        <div className=" flex flex-row justify-between items-center bg-[#15202B] w-full px-12 px-xs-2 py-2 rounded-xl">
            <button className="flex items-center justify-center bg-[#AAB8C2] w-[24px] h-[24px] size-xs-18 rounded-full text-[white]" onClick={() => onAmountChange(amount - step)}>
                <Minus width={24} height={24} color="black" />
            </button>

            <input 
                className="text-[#F5F8FA] text-[24px] text-xs-14 font-bold text-center border-nonebg-transparent w-[105px] w-xs-60 sm:w-[70px] outline-none" 
                value={floatFormat(amount)}
                onChange={(e) => {
                    const value = e.target.value;
                    if (value === '') {
                        onAmountChange(0);
                    } else {
                        const numValue = parseFloat(value);
                        if (!isNaN(numValue)) {
                            onAmountChange(numValue);
                        }
                    }
                }} 
                min={0}
            />

            <button className="flex items-center justify-center bg-[#AAB8C2] w-[24px] h-[24px] size-xs-18 rounded-full text-[white]" onClick={() => onAmountChange(amount + step)}>
                <Plus width={24} height={24} color="black" />
            </button>
        </div>
    )
}