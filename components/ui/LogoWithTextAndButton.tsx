import { StaticImageData } from "next/image";
import Logo from "./Logo";

interface Props {
  LogoImage: StaticImageData;
  width: number,
  height: number,
  TextSection: React.ReactNode;
  Button: React.ReactNode;
}

export default function LogoWithTextAndButton({ LogoImage, width, height, TextSection, Button }: Props) {
    return (
        <div className=" flex flex-row w-full justify-between" style={{height: height}}>
          <div className="flex flex-row w-full h-full gap-3">
            {/* Avatar Image */}
            <div style={{width: width, height: height}}>
              <Logo logo={LogoImage} width={width} height={height} />
            </div>
            {/* Username and rank */}
            {TextSection}
          </div>
          {/* Button */}
          <div className="flex flex-row items-center h-full">
            {Button}
          </div>
      </div>
    )
}