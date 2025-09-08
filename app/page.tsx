"use client"

import LogoMPT from "@/assets/Logo-MPT.png";
import ButtonFullWidth from "@/components/ui/ButtonFullWidth";
import ButtonWithTextInTheBorder from "@/components/ui/ButtonWithTextInTheBorder";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import LogoWithTextAndButton from "@/components/ui/LogoWithTextAndButton";
import ParameterButton from "@/components/ui/ParameterButton";
import ProgressBar from "@/components/ui/ProgressBar";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const horScrollParams = ["Holders leadersboard", "Latest transfers", "Top users", "Topoviy top"]
  const [activeParamID, setActiveParamID] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  // TODO: Delete when have actual API implementation
  const users = ["User1", "User2", "User3", "User4", "User5", "User6", "User7", "User8", "User9", "User10"]
  
  const shortText = "Create sustained impact. Support verified projects. Get regular updates. Save tax. Use web3..."
  const fullText = "Create sustained impact through innovative blockchain technology. Support verified projects that are making a real difference in the world. Get regular updates on your investments and track your portfolio performance. Save on taxes with our advanced DeFi strategies. Use web3 to its full potential and be part of the future of finance. Join thousands of investors who are already benefiting from our platform."

  return (
    <div className="flex flex-col px-10 py-5 bg-[#181818] w-full h-full gap-5">
       <LogoWithTextAndButton 
         LogoImage={LogoMPT} firstText="Username" secondText="Your rank #2932" 
         Button={<ButtonWithTextInTheBorder text="26,031" textInTheBorder="Points"/>} 
       />
      
      {/* Text area */}
      <div className="flex flex-col w-full h-max gap-2">
        <p className="text-gray-200 text-lg">
          {isExpanded ? fullText : shortText}
        </p>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-[#494949] rounded-2xl border-0 font-bold text-white py-3 text-lg hover:bg-[#5a5a5a] transition-colors"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Info card */}
      <div className="flex flex-col gap-3 w-full h-full py-3 px-4 border-2 border-gray-500 border-rounded-2xl rounded-2xl">
        <p className="text-gray-300 text-md mt-3">💎 Total funds raised 583.93 TON</p>
        {/* Loading bar based  on percentage */}
        <ProgressBar
          percentage={52.3}
          height="h-7"
          backgroundColor="bg-gray-600"
          fillColor="bg-blue-400"
          className="w-full"
        />
        <p className="text-gray-300 text-sm">First round goal 1,000.00 TON</p>
        {/* Drop points card */}
         <div className=" flex flex-col bg-blue-900/30 w-full h-full px-5 py-4 gap-3 rounded-2xl">
          {/* First half of the card */}
          <LogoWithTextAndButton LogoImage={LogoMPT} firstText="Drop Points price:" secondText="0.01 TON" Button={
            <Link href="/buy">
              <button className="bg-gray-500 rounded-2xl text-md text-white px-6 py-3">Buy</button>
            </Link>
            } />
          {/* Border separator */}
          <div className="w-full border-b-2 border-gray-500"></div>
          {/* Second half of the card */}
          <p className=" w-full text-sm text-gray-300">🔥 148.32K members & 223.42 purchased</p>
        </div>
        <ButtonFullWidth text="Get drop points!" bgColor="bg-blue-400" textColor="white" textSize="lg" />
      </div>

      {/* Horizotal Scroll */}
      <HorizontalScroll>
        {horScrollParams.map((param, id) => (
          <ParameterButton key={id} text={param} isActive={id === activeParamID} id={id} setActiveParamID={setActiveParamID}/>
        ))}
      </HorizontalScroll>

      {/* Users cards */}
      {activeParamID == 0 && (
        <div className=" flex flex-col rounded-2xl gap-3">
          <div className=" flex border-1 border-gray-600 px-5 py-3 rounded-2xl">
            <LogoWithTextAndButton LogoImage={LogoMPT} firstText="Username" secondText="10 TON" Button={<p className="text-gray-400 text-sm">#1</p>} />
          </div>
          <div className=" flex border-1 border-gray-600 px-4 py-3 rounded-2xl">
            <LogoWithTextAndButton LogoImage={LogoMPT} firstText="Username" secondText="10 TON" Button={<p className="text-gray-400 text-sm">#2</p>} />
          </div>
          <div className=" flex border-1 border-gray-600 px-4 py-3 rounded-2xl">
            <LogoWithTextAndButton LogoImage={LogoMPT} firstText="Username" secondText="10 TON" Button={<p className="text-gray-400 text-sm">#3</p>} />
          </div>
          {/* If there are 3 or more users, redirect to Holders leadersboard page */}
          {users.length > 3 && (
            <button className="w-max self-end py-2 px-4">
              <Link href="/holders-leadersboard">
                <p className=" text-blue-600 text-sm">See more...</p>
              </Link>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
