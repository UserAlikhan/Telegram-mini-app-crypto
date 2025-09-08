import { StaticImageData } from "next/image";
import Logo from "./Logo";

interface Props {
  LogoImage: StaticImageData;
  firstText: string;
  secondText: string;
  Button: React.ReactNode;
}

export default function LogoWithTextAndButton({ LogoImage, firstText, secondText, Button }: Props) {
    return (
        <div className=" flex flex-row w-full h-15 justify-between items-center">
          <div className="flex flex-row w-full h-full items-center gap-3">
            {/* Avatar Image */}
            <div className="flex items-center h-full">
              <Logo logo={LogoImage} width={50} height={50} />
            </div>
            {/* Username and rank */}
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-white text-xl">{firstText}</h1>
              <p className="text-gray-400 text-sm">{secondText}</p>
            </div>
          </div>
          {/* Button */}
          <div className="flex flex-row justify-end items-center">
            {Button}
            {/* <button className="bg-transparent border-red-500 border-2 rounded-xl text-md text-white px-4 py-2 font-bold">
              <p>26,031</p>
            </button> */}
          </div>
      </div>
    )
}