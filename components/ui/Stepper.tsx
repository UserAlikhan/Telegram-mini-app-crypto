"use client"

import { useEffect, useState } from "react";

type Props = {
    initialValue: number;
    min: number;
    max: number;
    step: number;
    amount: number;
    onAmountChange: (value: number) => void;
    setError: (error: string) => void;
}

export default function Stepper({ initialValue, min, max, step, amount, onAmountChange, setError }: Props) {

    useEffect(() => {
        if (amount < min) {
            setError("Value cannot be less than " + min)
        } else if (amount > max) {
            setError("Value cannot be greater than " + max)
        } else {
            setError("")
        }
    }, [amount])

    return (
        <div className=" flex flex-row justify-between items-center bg-gray-700 w-full px-15 py-2 rounded-2xl">
            <button className="w-10 h-10 bg-gray-400 rounded-full" onClick={() => onAmountChange(amount - step)}>
                <p className="text-black text-2xl text-bold">-</p>
            </button>

            <input 
                className="text-white text-2xl text-bold text-center bg-transparent border-none outline-none" 
                value={amount} 
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

            <button className="w-10 h-10 bg-gray-400 rounded-full" onClick={() => onAmountChange(amount + step)}>
                <p className="text-black text-2xl text-bold">+</p>
            </button>
        </div>
    )
}