"use client"

import { useEffect, useState } from "react";
import { Transfer } from "../api/transfers/route";

export default function Transfers() {


  const [transfers, setTransfers] = useState<Transfer[]>([])

  useEffect(() => {
    const fetchTransfers = async () => {
      const response = await fetch("/api/transfers")
      const data = await response.json()
      setTransfers(data.data)
    }

    fetchTransfers()
  }, [])
  
  return (
    <div className="flex flex-col px-10 py-5 bg-[#181818] w-full h-full gap-5">
      <h1 className="text-white text-2xl font-bold text-center">Latest Transfers</h1>
      <div className="flex flex-col gap-3">
        {transfers.map((transfer, index) => (
          <div key={index} className="flex justify-between items-center p-4 bg-gray-700/50 rounded-xl">
            <div>
              <p className="text-white font-medium">Transfer #{index + 1}</p>
              <p className="text-gray-400 text-sm">{new Date().toLocaleTimeString()}</p>
            </div>
            <p className="text-green-400 font-bold">+${transfer.Amount} ${transfer.Currency}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
