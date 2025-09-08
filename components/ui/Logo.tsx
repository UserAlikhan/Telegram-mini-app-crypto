import { StaticImageData } from "next/image";
import Image from "next/image";

export default function Logo({logo, width, height}: {logo: StaticImageData, width: number, height: number}) {
    return (
        <div>
            <Image src={logo} alt="Logo" width={width} height={height} />
        </div>
    )
}