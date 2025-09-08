import Link from "next/link";

type Props = {
    href: string;
    text: string;
}

export default function LinkButton({ href, text }: Props) {
    return (
        <button className="w-max self-end py-2 px-4">
            <Link href={href}>
                <p className=" text-blue-600 text-sm">{text}</p>
            </Link>
        </button>
    )
}