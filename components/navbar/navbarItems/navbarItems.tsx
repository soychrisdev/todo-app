import { ItemInterface } from "@/utils/navbarUtils/menuItems"
import Link from "next/link"
interface Props {
    menuItems: ItemInterface[]
}
export default function NavbarItems({ menuItems }: Props) {
    const content = (

        <div className="hidden md:block">
            <nav aria-label="Site Nav">
                <ul className="flex items-center gap-6 text-sm">
                    {menuItems?.map(({ href, name, id }) => (
                        <li key={id}>
                            <Link
                                className="text-gray-500 transition hover:text-gray-500/75"
                                href={href}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}



                </ul>
            </nav>
        </div>
    )


    return content
}