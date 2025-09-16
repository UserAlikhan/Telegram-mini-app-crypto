"use client"

import ButtonFullWidth from "@/components/ui/ButtonFullWidth";
import DropDown from "@/components/ui/DropDown";
import Stepper from "@/components/ui/Stepper";
import { CURRENCIES, MAX_AMOUNT, MIN_AMOUNT, STEP } from "@/constants/main";
import floatFormat from "@/utils/FloatFormat";
import { useState } from "react";

export default function BuyPage() {

    const [amount, setAmount] = useState(0)

    const [error, setError] = useState("You must buy at least 100 points")

    const [selectedOption, setSelectedOption] = useState(CURRENCIES[0])
    
    return (
        <div className="flex flex-col bg-[#2F2F33] justify-center items-center w-full h-[calc(100vh-50px)] xs:h-[calc(100vh-60px)] sm:h-[calc(100vh-69px)] px-5 py-5 gap-4">
            <Stepper 
                min={MIN_AMOUNT}
                max={MAX_AMOUNT}   
                step={STEP}
                amount={amount}
                onAmountChange={setAmount}
                setError={setError}
            />

            <div className="h-6 flex items-center justify-center">
                {error && <p className="text-[#AAB8C2] text-[12px] text-center">{error}</p>}
            </div>
                
            <div className="flex flex-col w-full gap-2">
                <p className="text-[#FFFFFF] text-[12px]">
                    Set expiration date and time
                </p>

                <div className="flex flex-row w-full gap-2 logo-text-inner">
                    <div className="flex-[0.3] width-xs-full">
                        <DropDown options={CURRENCIES} selectedOption={selectedOption} onOptionSelect={setSelectedOption} />
                    </div>
                    <div className="flex-[0.7] bg-[#15202B] rounded-2xl py-5 px-4 flex items-center justify-center width-xs-full">
                        <p className="text-center text-[16px] text-xs-14 text-[#AAB8C2] font-normal">{floatFormat(amount)}</p>
                    </div>
                </div>                
            </div>

            <ButtonFullWidth text="Buy" bgColor="bg-[#1D9BF0]" textColor="text-[#F5F8FA]" textSize="text-[14px] text-xs-12" />
        </div>
    );
  }
  