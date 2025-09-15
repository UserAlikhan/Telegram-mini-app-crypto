import { StaticImageData } from "next/image";
import Image from "next/image";

export default function Logo({logo, width, height}: {logo: StaticImageData, width: number, height: number}) {
    return (
       <Image src={logo} className=" rounded-full w-full h-full object-cover" alt="Logo" width={width} height={height} />
    )
}