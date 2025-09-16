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
        <div className="flex flex-row w-full justify-between logo-container-inner" style={{minHeight: height}}>
          <div className="flex flex-row w-full h-full gap-3 xs:gap-1 logo-text-inner">
            {/* Avatar Image */}
            <div className="flex-shrink-0" style={{width: width, height: height}}>
              <Logo logo={LogoImage} width={width} height={height} />
            </div>
            {/* Username and rank */}
            <div className="flex-1">
              {TextSection}
            </div>
          </div>
          {/* Button */}
          <div className="flex flex-row items-center h-full">
            {Button}
          </div>
      </div>
    )
}