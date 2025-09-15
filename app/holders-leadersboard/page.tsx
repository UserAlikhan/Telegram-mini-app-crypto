"use client"

import LogoWithTextAndButton from "@/components/ui/LogoWithTextAndButton"
import LogoFirst from "@/assets/Logo1.png"
import { useEffect, useState } from "react"
import { User } from "../api/users/route"

export default function HoldersLeadersboard() {
    const [users, setUsers] = useState<User[]>([])

    // API call
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("/api/users")
            const data = await response.json()
            setUsers(data.data)
        }

        fetchUsers()
    }, [])

    return (
        <div className="flex flex-col gap-3 py-7 px-10">
            <h1 className="text-white text-2xl font-bold text-center">Holders leadersboard</h1>
            {users.map((user, index) => (
                <div key={index} className="flex border-1 border-gray-600 px-4 py-3 rounded-2xl">
                    <LogoWithTextAndButton 
                        LogoImage={LogoFirst}
                        width={60}
                        height={60}
                        TextSection={
                            <div className="flex flex-col justify-between items-start">
                                <p className="text-white text-[16px] font-normal">{user.Username}</p>
                                <p className="text-[#636363] text-[16px] font-normal">{`${user.TON} TON`}</p>
                            </div>
                        }
                        Button={<p className="text-[#636363] text-[16px] font-normal">#{index + 1}</p>} 
                    />
                </div>
            ))}
        </div>
    )
}