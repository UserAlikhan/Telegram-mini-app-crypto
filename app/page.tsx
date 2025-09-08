import LogoMPT from "@/assets/Logo-MPT.png";
import ButtonFullWidth from "@/components/ui/ButtonFullWidth";
import Logo from "@/components/ui/Logo";
import LogoWithTextAndButton from "@/components/ui/LogoWithTextAndButton";
import ProgressBar from "@/components/ui/ProgressBar";

export default function Home() {
  return (
    <div className="flex flex-col px-10 py-5 bg-[#181818] w-full h-full gap-5">
      <LogoWithTextAndButton LogoImage={LogoMPT} firstText="Username" secondText="Your rank #2932" Button={<button className="bg-transparent border-red-500 border-2 rounded-xl text-md text-white px-4 py-2 font-bold">26,031</button>} />
      
      {/* Text area */}
      <div className="flex flex-col w-full h-max gap-2">
        <p className="text-gray-200 text-lg">
          Create sustained impact. Support verified projects. Get regular updates. Save tax. Use web3.
        </p>
        <ButtonFullWidth text="Read More" bgColor="bg-[#494949]" textColor="white" textSize="lg" />
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
        <div></div>
        <p className="text-gray-300 text-sm">First round goal 1,000.00 TON</p>
        {/* Drop points card */}
         <div className=" flex flex-col bg-blue-900/30 w-full h-full px-5 py-4 gap-3 rounded-2xl">
          {/* First half of the card */}
          <LogoWithTextAndButton LogoImage={LogoMPT} firstText="Drop Points price:" secondText="0.01 TON" Button={<button className="bg-gray-500 rounded-2xl text-md text-white px-6 py-3">Buy</button>} />
          {/* Border separator */}
          <div className="w-full border-b-2 border-gray-500"></div>
          {/* Second half of the card */}
          <p className=" w-full text-sm text-gray-300">🔥 148.32K members & 223.42 purchased</p>
        </div>
        <ButtonFullWidth text="Get drop points!" bgColor="bg-blue-400" textColor="white" textSize="lg" />
      </div>
    </div>
  );
}
