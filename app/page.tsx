"use client"

import LogoFirst from "@/assets/Logo1.png";
import LogoSecond from "@/assets/Logo2.png";
import LogoThird from "@/assets/Logo3.png";
import ButtonFullWidth from "@/components/ui/ButtonFullWidth";
import ButtonWithTextInTheBorder from "@/components/ui/ButtonWithTextInTheBorder";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import LogoWithTextAndButton from "@/components/ui/LogoWithTextAndButton";
import ParameterButton from "@/components/ui/ParameterButton";
import ProgressBar from "@/components/ui/ProgressBar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { User } from "./api/users/route";
import { HORIZONTAL_SCROLL_PARAMS, TEXT_CONTENT } from "@/constants/main";
import LinkButton from "@/components/ui/LinkButton";

export default function Home() {

  const [activeParamID, setActiveParamID] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  
  const [user, setUser] = useState<User | null>(null)
  const [allUsers, setAllUsers] = useState<User[] | null>(null)

  // API calls
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/1`)
      const data = await response.json()
      setUser(data.data)
    }

    const fetchAllUsers = async () => {
      const response = await fetch(`/api/users`)
      const data = await response.json()
      setAllUsers(data.data)
    }

    fetchUser()
    fetchAllUsers()
  }, [])

  return (
    <div className="flex flex-col px-10 py-5 bg-[#2F2F33] w-full h-full gap-5">
      <LogoWithTextAndButton 
       LogoImage={LogoFirst} width={45} height={45} 
       TextSection={
        <div className="flex flex-col justify-between items-start">
          <p className="text-white text-[16px] font-normal">{user?.Username || ""}</p>
          <p className="text-[#636363] text-[12px] font-normal">Your rank #{user?.Rank || ""}</p>
        </div>
       }
       Button={<ButtonWithTextInTheBorder text={String(user?.Points || "")} textInTheBorder="Points"/>} 
      />
      
      {/* Text area */}
      <div className="flex flex-col w-full h-max gap-2">
        <p className="text-[#AAB8C2] text-[16px]">
          {isExpanded ? TEXT_CONTENT.FULL : TEXT_CONTENT.SHORT}
        </p>
        <ButtonFullWidth text={isExpanded ? "Read Less" : "Read More"} bgColor="bg-[#494949]" textColor="white" textSize="14px" onClick={() => setIsExpanded(!isExpanded)} />
      </div>

      {/* Info card */}
      <div className="flex flex-col gap-3 w-full h-full py-3 px-4 border-1 border-gray-600 border-rounded-2xl rounded-2xl">
        <p className="text-gray-400 text-[12px] text-bold-400 ">💎 Total funds raised ${user?.TON || ""} TON</p>
        {/* Loading bar based  on percentage */}
        <ProgressBar
          percentage={52.3}
          height="h-[20px]"
          backgroundColor="bg-gray-700"
          fillColor="bg-[#1D9BF0]"
          className="w-full"
        />
        <p className="text-gray-400 text-[10px] font-normal">First round goal 1,000.00 TON</p>
        {/* Drop points card */}
        <div className=" flex flex-col bg-[#253341] w-full h-full p-3 gap-3 rounded-xl">
          {/* First half of the card */}
          <LogoWithTextAndButton 
            LogoImage={LogoSecond} width={38} height={38} 
            TextSection={
              <div className="flex flex-col justify-between items-start">
                <p className="text-[#636363] text-[12px] font-normal">Drop Points price:</p>
                <p className="text-white text-[16px] font-normal">0.01 TON</p>
              </div>
            } 
            Button={
              <Link href="/buy">
                <button className="bg-gray-500 rounded-2xl text-md text-white h-fit px-5 py-2">
                  <p className=" text-[14px] text-bold">Buy</p>
                </button>
              </Link>
            } 
          />
          {/* Border separator */}
          <div className="w-full border-b-1 border-gray-600"></div>
          {/* Second half of the card */}
          <p className=" w-full text-[10px] text-[#F5F8FA]">🔥 148.32K members & 223.42 purchased</p>
        </div>
        <ButtonFullWidth text="Get drop points!" bgColor="bg-blue-400" textColor="white" textSize="lg" />
      </div>
      
      <div className=" flex flex-col gap-3">
        {/* Horizotal Scroll */}
        <HorizontalScroll>
          {HORIZONTAL_SCROLL_PARAMS.map((param, id) => (
            <ParameterButton key={id} text={param} isActive={id === activeParamID} id={id} setActiveParamID={setActiveParamID}/>
          ))}
        </HorizontalScroll>

        {/* Users cards */}
        <div className=" flex flex-col rounded-2xl gap-3">
          {activeParamID == 0 && allUsers?.slice(0, 3).map((userData, id) => (
            <div key={id} className=" flex border-1 border-gray-600 px-5 py-3 rounded-2xl">
              <LogoWithTextAndButton 
                LogoImage={LogoThird} width={60} height={60} 
                TextSection={
                  <div className="flex flex-col justify-center">
                    <p className="text-[#F5F8FA] text-[16px] font-normal">{userData.Username}</p>
                    <p className="text-[#636363] text-[16px] font-normal">{`${userData.TON} TON`}</p>
                  </div>
                }
                Button={<p className="text-[#636363] text-[16px] font-normal">#{id + 1}</p>} 
              />
            </div>
          ))}

          {/* See more button */}
          {activeParamID == 0 && allUsers?.length && allUsers.length > 3 && (
            <LinkButton href="/holders-leadersboard" text="See more..." />
          )}
      </div>
      </div>
    </div>
  );
}
