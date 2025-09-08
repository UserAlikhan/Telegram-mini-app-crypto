"use client"

import ButtonFullWidth from "@/components/ui/ButtonFullWidth";
import Stepper from "@/components/ui/Stepper";
import { useState } from "react";

export default function BuyPage() {

    const currencies = ["TON", "ETH", "USDT", "BTC"]

    const [amount, setAmount] = useState(0)
    const max = 10000;
    const min = 100;

    const [error, setError] = useState("")
    
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen px-10 py-5 ">
            <div className="flex flex-col gap-3">
                <Stepper 
                    initialValue={amount}
                    min={min}
                    max={max}   
                    step={10}
                    amount={amount}
                    onAmountChange={setAmount}
                    setError={setError}
                />
                
                <div className="h-6 flex items-center justify-center">
                {error && <p className="text-white text-sm text-center">{error}</p>}
                </div>
                
                <div className="flex flex-col w-full gap-5">
                    <p className="text-white text-md">
                        Set currency and see your amount
                    </p>

                    <div className="flex flex-row w-full gap-3">
                        <select className="flex-[0.3] bg-gray-700 rounded-2xl py-5 px-4 pr-8 text-white text-center text-sm appearance-none border-none outline-none">
                            {currencies.map((currency, index) => (
                                <option className="text-white text-center text-sm" key={index} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                        <div className="flex-[0.7] bg-gray-700 rounded-2xl py-5 px-4 flex items-center justify-center">
                            <p className="text-white text-center text-md font-bold">{amount}</p>
                        </div>
                    </div>
                    
                    <ButtonFullWidth text="Buy" bgColor="bg-blue-400" textColor="white" textSize="md" />
                </div>
            </div>
        </div>
    );
  }
  