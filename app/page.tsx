import LogoMPT from "@/assets/Logo-MPT.png";
import Logo from "@/components/ui/Logo";
import LogoWithTextAndButton from "@/components/ui/LogoWithTextAndButton";

export default function Home() {
  return (
    <div className="flex flex-col px-10 py-5 bg-[#181818] w-full h-full gap-5">
      <LogoWithTextAndButton LogoImage={LogoMPT} firstText="Username" secondText="Your rank #2932" Button={<button className="bg-transparent border-red-500 border-2 rounded-xl text-md text-white px-4 py-2 font-bold">26,031</button>} />
      
      {/* Text area */}
      <div className="flex flex-col w-full h-max gap-2">
        <p className="text-gray-200 text-lg">
          Create sustained impact. Support verified projects. Get regular updates. Save tax. Use web3.
        </p>
        <button className="w-full bg-[#494949] rounded-2xl border-0 font-bold text-white py-3">
          <p>Read More</p>
        </button>
      </div>

      {/* Info card */}
      <div className="flex flex-col gap-3 w-full h-full py-3 px-4 border-2 border-gray-500 border-rounded-2xl rounded-2xl">
        <p className="text-gray-300 text-md">💎 Total funds raised 583.93 TON</p>
        {/* Loading bar */}
        <div></div>
        <p className="text-gray-300 text-sm">First round goal 1,000.00 TON</p>
        {/* Drop points card */}
         <div className=" flex flex-col bg-blue-900/30 w-full h-full px-5 py-4 gap-3 rounded-2xl">
          {/* First half of the card */}
          <div className="flex flex-row w-full h-full justify-between items-center">
            <LogoWithTextAndButton LogoImage={LogoMPT} firstText="Drop Points price:" secondText="0.01 TON" Button={<button className="bg-gray-500 rounded-xl text-md text-white px-5 py-3">Buy</button>} />
          </div>
          <div className="w-full border-b-2 border-gray-500"></div>
          {/* Second half of the card */}
          <div className="w-full">
            <p className=" text-sm text-gray-300">🔥 148.32K members & 223.42 purchased</p>
          </div>
        </div>
        <div>
          <button className=" w-full py-3 rounded-2xl bg-blue-400 text-white text-lg">
            <p>Get drop points!</p>
          </button>
        </div>
      </div>
    </div>
  );
}
