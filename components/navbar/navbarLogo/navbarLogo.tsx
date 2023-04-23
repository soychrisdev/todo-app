import { Cat } from "lucide-react"
import Link from "next/link"

export default function NavbarLogo() {
    const content = (
        <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-zinc-950" href="/">
                <span className="sr-only">Home</span>
                <Cat />
            </Link>
        </div>
    )

    return content
}