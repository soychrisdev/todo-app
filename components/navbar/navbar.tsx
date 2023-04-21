'use client'

import { useState } from "react"
import { Button } from "../ui/button"
import NavbarLogo from "./navbarLogo/navbarLogo"
import NavbarAuth from "./navbarAuth/navbarAuth"
import NavbarItems from "./navbarItems/navbarItems"
import { Menu, MenuIcon } from "lucide-react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"

export default function Navbar() {
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        // setCounter(counter++)
    }
    const content = (

        <header aria-label="Site Header" className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <NavbarLogo />
                    <NavbarItems />
                    <div className="flex items-center gap-4">
                        <NavbarAuth />
                        <div className="block md:hidden">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger><MenuIcon className="h-5 w-5" /></NavigationMenuTrigger>
                                        <NavigationMenuContent className="p-4">
                                            <NavigationMenuLink>Link</NavigationMenuLink>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>

                            {/* <button
                                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                            >
                                
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )


    return content
}