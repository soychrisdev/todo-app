import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { ItemInterface } from "@/utils/navbarUtils/menuItems"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
interface Props {
    menuItems: ItemInterface[]
}
export default function NavbarItemsMobile({ menuItems }: Props) {

    const content = (

        <div className="block md:hidden">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger><MenuIcon className="h-5 w-5" /></NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid p-2">
                                {menuItems.map(({ href, name }) => (
                                    <Link href={href} className="mb-2 mt-2 bg-slate-50 hover:underline hover:bg-slate-100 rounded">{name}</Link>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )


    return content
}