import { ItemInterface } from "@/utils/navbarUtils/menuItems"
interface Props {
    menuItems: ItemInterface[]
}
export default function NavbarItems({ menuItems }: Props) {
    console.log(menuItems)

    const content = (

        <div className="hidden md:block">
            <nav aria-label="Site Nav">
                <ul className="flex items-center gap-6 text-sm">
                    {menuItems?.map(({ href, name }) => (
                        <li key={href}>
                            <a
                                className="text-gray-500 transition hover:text-gray-500/75"
                                href={href}
                            >
                                {name}
                            </a>
                        </li>
                    ))}



                </ul>
            </nav>
        </div>
    )


    return content
}