import LogoMPT from "@/assets/Logo-MPT.png";
import Logo from "@/components/ui/Logo";

export default function Home() {
  return (
    <div className="flex flex-col px-10 py-6 bg-gray-900 w-full h-full gap-5">
      <div className=" flex flex-row w-full h-max justify-between items-center border-2 border-red-500">
        <div className=" flex:0.7 flex-row gap-2">
          {/* Avatar Image */}
          <Logo logo={LogoMPT} width={40} height={40} />
          {/* Username and rank */}
          <div className=" flex flex-col justify-center items-center">
            <h1 className="text-white text-2xl font-bold">Username</h1>
            <p className="text-gray-400 text-sm">Your rank #2932</p>
          </div>
        </div>
        {/* Button */}
        <div className="flex:0.3 flex flex-row justify-end items-center">
          <button className="bg-transparent border-red-500 border-b-2 text-white px-4 py-2 font-bold">
            <p>26,031</p>
          </button>
        </div>
      </div>
      {/* Text area */}
      <div className="flex flex-col w-full h-max gap-2">
        <p className="bg-transparent border-gray-500 border-2 text-gray-200 px-4 py-2 rounded-md">
          Create sustained impact. Support verified projects. Get regular updates. Save tax. Use web3.
        </p>
        <button className="w-full bg-gray-600 rounded-md border-0 font-bold text-white px-4 py-2">
          <p>Read More</p>
        </button>
      </div>

      {/* Info card */}
      <div className="flex flex-col w-full h-full gap-2">
        <p className="text-gray-300 text-md">💎 Total funds raised 583.93 TON</p>
        {/* Loading bar */}
        <div></div>
        <p className="text-gray-300 text-sm">First round goal 1,000.00 TON</p>
        {/* Drop points card */}
        <div className=" flex flex-col bg-blue-900 w-full h-full px-5">
          {/* First half of the card */}
          <div className="flex flex-row w-full h-full border-b-2 border-gray-500">
            <Logo logo={LogoMPT} width={40} height={40} />
            <div className="flex flex-col gap-1">
              <h1>Drop Points price:</h1>
              <p>0.01 TON</p>
            </div>
            <button className="bg-gray-500 rounded-lg text-lg text-white px-4 py-2 font-bold">
              <p>Buy</p>
            </button>
          </div>
          {/* Second half of the card */}
          <div className="flex flex-col w-full h-full px-5">
            <p className=" text-sm text-gray-300">🔥 148.32K members & 223.42 purchased</p>
          </div>
        </div>
      </div>

      <div>
        <button className=" w-full px-4 py-2 rounded-lg bg-blue-400 text-white text-lg font-bold">
          <p>Get drop points!</p>
        </button>
      </div>
    </div>
  );
}
