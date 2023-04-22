import { Cat } from "lucide-react"

export default function NavbarLogo() {
    const content = (
        <div className="md:flex md:items-center md:gap-12">
            <a className="block text-zinc-950" href="/">
                <span className="sr-only">Home</span>
                <Cat />
            </a>
        </div>
    )

    return content
}